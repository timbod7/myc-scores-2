use sea_query::{Expr, PostgresQueryBuilder, Query};
use sea_query_binder::SqlxBinder;

use crate::adl::{
    db::schema,
    gen::{common::db::WithId, protoapp::db::AppUser},
};

use self::conversions::AdlFieldGet;

mod conversions;

type DbPool = sqlx::PgPool;

pub async fn get_user_with_email(
    pool: &DbPool,
    email: &str,
) -> sqlx::Result<Option<WithId<AppUser>>> {
    let (sql, values) = Query::select()
        .from(schema::AppUser::Table)
        .columns(vec![
            schema::AppUser::Id,
            schema::AppUser::Fullname,
            schema::AppUser::Email,
            schema::AppUser::IsAdmin,
            schema::AppUser::HashedPassword,
        ])
        .and_where(Expr::col(schema::AppUser::Email).eq(email))
        .build_sqlx(PostgresQueryBuilder);

    let v = sqlx::query_with(&sql, values.clone())
        .map(|r| WithId {
            id: r.adl_get(0),
            value: AppUser {
                fullname: r.adl_get(1),
                email: r.adl_get(2),
                is_admin: r.adl_get(3),
                hashed_password: r.adl_get(4),
            },
        })
        .fetch_optional(pool)
        .await?;

    Ok(v)
}
