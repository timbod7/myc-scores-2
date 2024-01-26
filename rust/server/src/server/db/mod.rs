use std::time::SystemTime;

use sea_query::{Expr, PostgresQueryBuilder, Query};
use sea_query_binder::SqlxBinder;

use crate::adl::{
    custom::DbKey,
    db::schema,
    gen::{
        common::{db::WithId, time::Instant},
        protoapp::db::{AppUser, AppUserId, MessageId},
    },
};

use self::conversions::{AdlFieldGet, DbConversions};

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

pub async fn new_message(
    pool: &DbPool,
    user_id: &AppUserId,
    message: &String,
) -> sqlx::Result<MessageId> {
    let id: MessageId = DbKey::new("M-");
    let posted_at = instant_now();
    let (sql, values) = Query::insert()
        .into_table(schema::Message::Table)
        .columns([
            schema::Message::Id,
            schema::Message::PostedAt,
            schema::Message::PostedBy,
            schema::Message::Message,
        ])
        .values_panic([
            id.to_db().into(),
            posted_at.to_db().into(),
            user_id.to_db().into(),
            message.to_db().into(),
        ])
        .build_sqlx(PostgresQueryBuilder);
    sqlx::query_with(&sql, values.clone()).execute(pool).await?;
    Ok(id)
}

fn instant_now() -> Instant {
    let millis = SystemTime::now()
        .duration_since(SystemTime::UNIX_EPOCH)
        .expect("Time should advance")
        .as_millis();
    Instant(millis as i64)
}
