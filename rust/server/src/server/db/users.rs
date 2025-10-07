use adl::{
    custom::common::db::DbKey,
    db::{
        schema,
        types::{InsertRow, SelectStatementExt, UpdateStatementExt},
    },
    gen::mycscores::{
        apis::{
            self,
            ui::{UserFilter, UserQueryReq, UserSorting},
        },
        db::{AppUser, AppUserId},
    },
};
use sea_query::{ColumnRef, Func, PostgresQueryBuilder, Query};
use sea_query_binder::SqlxBinder;
use sqlx::Row;

use super::utils::DbTabular;

type DbPool = sqlx::PgPool;

pub async fn get_user_with_email(
    pool: &DbPool,
    email: &str,
) -> sqlx::Result<Option<(AppUserId, AppUser)>> {
    get_user(pool, schema::AppUser::email().eq_value(&email.to_owned())).await
}

pub async fn get_user_with_id(
    pool: &DbPool,
    user_id: &AppUserId,
) -> sqlx::Result<Option<(AppUserId, AppUser)>> {
    get_user(pool, schema::AppUser::id().eq_value(user_id)).await
}

async fn get_user(
    pool: &DbPool,
    where_expr: sea_query::SimpleExpr,
) -> sqlx::Result<Option<(AppUserId, AppUser)>> {
    type T = schema::AppUser;
    let (sql, values) = Query::select()
        .from(T::table())
        .scolumn(T::id())
        .scolumn(T::fullname())
        .scolumn(T::email())
        .scolumn(T::is_admin())
        .scolumn(T::hashed_password())
        .and_where(where_expr)
        .build_sqlx(PostgresQueryBuilder);

    let v = sqlx::query_with(&sql, values)
        .map(|r| {
            (
                T::id().from_row(&r),
                AppUser {
                    fullname: T::fullname().from_row(&r),
                    email: T::email().from_row(&r),
                    is_admin: T::is_admin().from_row(&r),
                    hashed_password: T::hashed_password().from_row(&r),
                },
            )
        })
        .fetch_optional(pool)
        .await?;

    Ok(v)
}

pub async fn create_user(pool: &DbPool, user: &AppUser) -> sqlx::Result<AppUserId> {
    type T = schema::AppUser;
    let id: AppUserId = DbKey::new(T::id_prefix());

    let (icolumns, ivalues) = InsertRow::new()
        .field(T::id(), &id)
        .field(T::email(), &user.email)
        .field(T::fullname(), &user.fullname)
        .field(T::is_admin(), &user.is_admin)
        .field(T::hashed_password(), &user.hashed_password)
        .build();

    let (sql, values) = Query::insert()
        .into_table(T::table())
        .columns(icolumns)
        .values_panic(ivalues)
        .build_sqlx(PostgresQueryBuilder);
    sqlx::query_with(&sql, values).execute(pool).await?;
    Ok(id)
}

pub async fn update_user(pool: &DbPool, user_id: &AppUserId, user: &AppUser) -> sqlx::Result<()> {
    type T = schema::AppUser;
    let (sql, values) = Query::update()
        .table(T::table())
        .svalue(T::email(), &user.email)
        .svalue(T::fullname(), &user.fullname)
        .svalue(T::is_admin(), &user.is_admin)
        .svalue(T::hashed_password(), &user.hashed_password)
        .and_where(T::id().eq_value(user_id))
        .build_sqlx(PostgresQueryBuilder);
    sqlx::query_with(&sql, values).execute(pool).await?;
    Ok(())
}

pub async fn delete_user(pool: &DbPool, user_id: &AppUserId) -> sqlx::Result<()> {
    type T = schema::AppUser;
    let (sql, values) = Query::delete()
        .from_table(T::table())
        .and_where(T::id().eq_value(user_id))
        .build_sqlx(PostgresQueryBuilder);
    sqlx::query_with(&sql, values).execute(pool).await?;
    Ok(())
}

pub async fn query_users(
    pool: &DbPool,
    req: &UserQueryReq,
) -> sqlx::Result<Vec<apis::ui::UserWithId>> {
    type T = schema::AppUser;
    let mut query = Query::select();

    let query = query
        .from(T::table())
        .scolumn(T::id())
        .scolumn(T::fullname())
        .scolumn(T::email())
        .scolumn(T::is_admin())
        .and_where(UserQuery::filter(&req.filter))
        .order_by_columns(UserQuery::sort_cols(&req.sorting))
        .offset(req.page.offset)
        .limit(req.page.limit);

    let (sql, values) = query.build_sqlx(PostgresQueryBuilder);

    let users = sqlx::query_with(&sql, values)
        .map(|r| apis::ui::UserWithId {
            id: T::id().from_row(&r),
            value: apis::ui::User {
                fullname: T::fullname().from_row(&r),
                email: T::email().from_row(&r),
                is_admin: T::is_admin().from_row(&r),
            },
        })
        .fetch_all(pool)
        .await?;
    Ok(users)
}

struct UserQuery {}

impl DbTabular for UserQuery {
    type S = UserSorting;
    type F = UserFilter;

    fn cref_from_sorting(s: &Self::S) -> ColumnRef {
        match s {
            UserSorting::Fullname => schema::AppUser::fullname().cref(),
            UserSorting::Email => schema::AppUser::email().cref(),
        }
    }

    fn filter_prim(f: &Self::F) -> sea_query::SimpleExpr {
        match f {
            UserFilter::FullnameMatches(s) => {
                schema::AppUser::fullname().expr().like(format!("%{}%", s))
            }
        }
    }
}

pub async fn user_count(pool: &DbPool) -> sqlx::Result<u64> {
    type M = schema::AppUser;

    let (sql, values) = Query::select()
        .from(M::table())
        .expr(Func::count(sea_query::ColumnRef::Asterisk))
        .build_sqlx(PostgresQueryBuilder);

    let count: i64 = sqlx::query_with(&sql, values)
        .map(|r| r.get(0))
        .fetch_one(pool)
        .await?;
    Ok(count as u64)
}
