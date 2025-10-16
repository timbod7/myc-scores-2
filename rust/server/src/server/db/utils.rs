use std::ops::DerefMut;

use adl::{
    custom::common::db::DbKey,
    db::types::DbConversions,
    gen::common::db_api::{
        BoolExpr, PageReq, Paginated, SortColumn, SortOrder, TabularQueryReq, WithId,
    },
};
use sea_query::{
    ColumnRef, Cond, DynIden, Expr, Func, OnConflict, Order, PostgresQueryBuilder, Query,
    SimpleExpr, Value,
};
use sea_query_binder::SqlxBinder;
use sqlx::postgres::PgRow;
use sqlx::Row;

pub trait DbReadable: Unpin + Send {
    type DbTable: Clone + Unpin + Sync + Send;

    fn table() -> DynIden;

    fn id_column() -> DynIden;

    fn value_columns() -> Vec<DynIden>;

    fn all_columns() -> Vec<DynIden> {
        let mut columns = Self::value_columns();
        columns.push(Self::id_column());
        return columns;
    }

    fn from_db(row: &PgRow) -> Self;
}

pub trait Crudable: DbReadable {
    fn id_prefix() -> String;

    fn insert_values(&self) -> Vec<SimpleExpr>;
}

pub trait DbQueryable {
    type S;
    type F;

    fn cref_from_sorting(s: &Self::S) -> ColumnRef;

    fn filter_prim(f: &Self::F) -> SimpleExpr;

    fn filter(v0: &BoolExpr<Self::F>) -> SimpleExpr {
        match v0 {
            BoolExpr::Const(v) => SimpleExpr::Constant(Value::Bool(Some(*v))),
            BoolExpr::Prim(v) => Self::filter_prim(v),
            BoolExpr::Not(v) => SimpleExpr::not(Self::filter(v)),
            BoolExpr::And(vs) => {
                let mut cond = Cond::all();
                for v in vs {
                    cond = cond.add(Self::filter(v));
                }
                SimpleExpr::from(cond)
            }
            BoolExpr::Or(vs) => {
                let mut cond = Cond::any();
                for v in vs {
                    cond = cond.add(Self::filter(v));
                }
                SimpleExpr::from(cond)
            }
        }
    }

    fn sort_cols(sorting: &[SortColumn<Self::S>]) -> Vec<(ColumnRef, Order)> {
        let cols: Vec<(ColumnRef, Order)> = sorting
            .iter()
            .map(|s| {
                (
                    Self::cref_from_sorting(&s.column),
                    match s.order {
                        SortOrder::Asc => Order::Asc,
                        SortOrder::Desc => Order::Desc,
                    },
                )
            })
            .collect();
        cols
    }
}

pub async fn create<T: Crudable>(
    tx: &mut super::DbTransaction,
    value: T,
) -> sqlx::Result<DbKey<T::DbTable>> {
    let mut columns = T::value_columns();
    let mut values = value.insert_values();

    columns.push(T::id_column());
    let id: DbKey<T::DbTable> = DbKey::new(&T::id_prefix());
    values.push(id.clone().to_db().into());

    let (sql, values) = Query::insert()
        .into_table(T::table())
        .columns(columns)
        .values_panic(values)
        .build_sqlx(PostgresQueryBuilder);

    sqlx::query_with(&sql, values.clone())
        .execute(tx.deref_mut())
        .await?;
    Ok(id)
}

pub async fn update<T: Crudable>(
    tx: &mut super::DbTransaction,
    id: &DbKey<T::DbTable>,
    value: &T,
) -> sqlx::Result<()> {
    let mut columns = T::value_columns();
    let mut values = value.insert_values();

    columns.push(T::id_column());
    values.push(id.clone().to_db().into());

    let (sql, values) = Query::insert()
        .into_table(T::table())
        .columns(columns)
        .values_panic(values)
        .on_conflict(
            OnConflict::column(T::id_column())
                .update_columns(T::value_columns())
                .to_owned(),
        )
        .build_sqlx(PostgresQueryBuilder);

    sqlx::query_with(&sql, values.clone())
        .execute(tx.deref_mut())
        .await?;
    Ok(())
}

pub async fn delete<T: Crudable>(
    tx: &mut super::DbTransaction,
    id: &DbKey<T::DbTable>,
) -> sqlx::Result<()> {
    let (sql, values) = Query::delete()
        .from_table(T::table())
        .and_where(Expr::col(T::id_column()).eq(&id.0))
        .build_sqlx(PostgresQueryBuilder);
    sqlx::query_with(&sql, values.clone())
        .execute(tx.deref_mut())
        .await?;
    Ok(())
}

pub async fn query<T: DbReadable + DbQueryable>(
    tx: &mut super::DbTransaction,
    filter: &BoolExpr<T::F>,
    sorting: &Vec<SortColumn<T::S>>,
    page: &PageReq,
) -> sqlx::Result<Vec<(DbKey<T::DbTable>, T)>> {
    let mut query = Query::select();

    let query = query
        .from(T::table())
        .column(T::id_column())
        .columns(T::all_columns())
        .and_where(T::filter(filter))
        .order_by_columns(T::sort_cols(sorting))
        .offset(page.offset)
        .limit(page.limit);

    let (sql, values) = query.build_sqlx(PostgresQueryBuilder);

    let rows = sqlx::query_with(&sql, values)
        .map(|r| (DbKey::from_string(r.get(0)), T::from_db(&r)))
        .fetch_all(tx.deref_mut())
        .await?;
    Ok(rows)
}

pub async fn count<T: DbReadable + DbQueryable>(
    tx: &mut super::DbTransaction,
    filter: &BoolExpr<T::F>,
) -> sqlx::Result<u64> {
    let mut query = Query::select();
    let query = query
        .from(T::table())
        .expr(Func::count(T::id_column().to_string()))
        .and_where(T::filter(filter));
    let (sql, values) = query.build_sqlx(PostgresQueryBuilder);
    let count: i64 = sqlx::query_scalar_with(&sql, values)
        .fetch_one(tx.deref_mut())
        .await?;
    Ok(count as u64)
}

pub async fn query_paginated<T: DbReadable + DbQueryable>(
    tx: &mut super::DbTransaction,
    i: &TabularQueryReq<T::S, T::F>,
) -> sqlx::Result<Paginated<WithId<DbKey<T::DbTable>, T>>> {
    let values = query::<T>(tx, &i.filter, &i.sorting, &i.page).await?;
    let total_count = count::<T>(tx, &i.filter).await?;
    let page = Paginated {
        items: values.into_iter().map(with_id).collect(),
        current_offset: i.page.offset,
        total_count,
    };
    Ok(page)
}

fn with_id<I, V>(p: (I, V)) -> WithId<I, V> {
    WithId {
        id: p.0,
        value: p.1,
    }
}
