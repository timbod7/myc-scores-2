use adl::{
    custom::common::db::DbKey,
    db::{
        schema::{self},
        types::{InsertRow, SelectStatementExt, UpdateStatementExt},
    },
    gen::mycscores::{
        apis::ui::{SeasonFilter, SeasonQueryReq, SeasonSorting},
        db::{Season, SeasonId},
    },
};
use sea_query::{ColumnRef, Func, PostgresQueryBuilder, Query};
use sea_query_binder::SqlxBinder;
use sqlx::{Executor, Postgres};

use super::utils::DbTabular;

type DbPool = sqlx::PgPool;

pub async fn create_season<'a, E>(executor: E, season: &Season) -> sqlx::Result<SeasonId>
where
    E: Executor<'a, Database = Postgres>,
{
    type T = schema::Season;
    let id: SeasonId = DbKey::new(T::id_prefix());

    let (icolumns, ivalues) = InsertRow::new()
        .field(T::id(), &id)
        .field(T::name(), &season.name)
        .build();

    let (sql, values) = Query::insert()
        .into_table(T::table())
        .columns(icolumns)
        .values_panic(ivalues)
        .build_sqlx(PostgresQueryBuilder);
    sqlx::query_with(&sql, values).execute(executor).await?;
    Ok(id)
}

pub async fn update_season(pool: &DbPool, id: &SeasonId, season: &Season) -> sqlx::Result<()> {
    type T = schema::Season;
    let (sql, values) = Query::update()
        .table(T::table())
        .svalue(T::name(), &season.name)
        .and_where(T::id().eq_value(id))
        .build_sqlx(PostgresQueryBuilder);
    sqlx::query_with(&sql, values).execute(pool).await?;
    Ok(())
}

pub async fn delete_season(pool: &DbPool, id: &SeasonId) -> sqlx::Result<()> {
    type T = schema::Season;
    let (sql, values) = Query::delete()
        .from_table(T::table())
        .and_where(T::id().eq_value(id))
        .build_sqlx(PostgresQueryBuilder);
    sqlx::query_with(&sql, values).execute(pool).await?;
    Ok(())
}

pub async fn query_seasons(
    pool: &DbPool,
    req: &SeasonQueryReq,
) -> sqlx::Result<Vec<(SeasonId, Season)>> {
    type T = schema::Season;
    let mut query = Query::select();

    let query = query
        .from(T::table())
        .scolumn(T::id())
        .scolumn(T::name())
        .and_where(SeasonQuery::filter(&req.filter))
        .order_by_columns(SeasonQuery::sort_cols(&req.sorting))
        .offset(req.page.offset)
        .limit(req.page.limit);

    let (sql, values) = query.build_sqlx(PostgresQueryBuilder);

    let seasons = sqlx::query_with(&sql, values)
        .map(|r| {
            (
                T::id().from_row(&r),
                Season {
                    name: T::name().from_row(&r),
                },
            )
        })
        .fetch_all(pool)
        .await?;
    Ok(seasons)
}

pub async fn count_seasons(pool: &DbPool, req: &SeasonQueryReq) -> sqlx::Result<u64> {
    type T = schema::Season;
    let mut query = Query::select();

    let query = query
        .from(T::table())
        .expr(Func::count(T::id().cref()))
        .and_where(SeasonQuery::filter(&req.filter));
    let (sql, values) = query.build_sqlx(PostgresQueryBuilder);

    let count: i64 = sqlx::query_scalar_with(&sql, values)
        .fetch_one(pool)
        .await?;
    Ok(count as u64)
}

struct SeasonQuery {}

impl DbTabular for SeasonQuery {
    type S = SeasonSorting;
    type F = SeasonFilter;

    fn cref_from_sorting(s: &Self::S) -> ColumnRef {
        match s {
            SeasonSorting::Name => schema::Season::name().cref(),
        }
    }

    fn filter_prim(f: &Self::F) -> sea_query::SimpleExpr {
        match f {
            SeasonFilter::NameMatches(s) => {
                schema::AppUser::fullname().expr().like(format!("%{}%", s))
            }
        }
    }
}
