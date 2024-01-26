use std::time::SystemTime;

use sea_query::{Expr, Func, Order, PostgresQueryBuilder, Query};
use sea_query_binder::SqlxBinder;
use sqlx::Row;

use crate::adl::{
    custom::DbKey,
    db::schema,
    gen::{
        common::{db::WithId, time::Instant},
        protoapp::{
            apis,
            db::{AppUser, AppUserId, MessageId},
        },
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

pub async fn recent_messages(
    pool: &DbPool,
    offset: u32,
    limit: u32,
) -> sqlx::Result<Vec<apis::ui::Message>> {
    let (sql, values) = Query::select()
        .columns([
            (schema::Message::Table, schema::Message::Id),
            (schema::Message::Table, schema::Message::PostedAt),
            (schema::Message::Table, schema::Message::Message),
        ])
        .columns([schema::AppUser::Fullname])
        .from(schema::Message::Table)
        .inner_join(
            schema::AppUser::Table,
            Expr::col((schema::AppUser::Table, schema::AppUser::Id)).eq(Expr::col((
                schema::Message::Table,
                schema::Message::PostedBy,
            ))),
        )
        .order_by(schema::Message::PostedAt, Order::Desc)
        .offset(offset as u64)
        .limit(limit as u64)
        .build_sqlx(PostgresQueryBuilder);

    let messages = sqlx::query_with(&sql, values.clone())
        .map(|r| apis::ui::Message {
            id: r.adl_get(0),
            posted_at: r.adl_get(1),
            message: r.adl_get(2),
            user_fullname: r.adl_get(3),
        })
        .fetch_all(pool)
        .await?;
    Ok(messages)
}

pub async fn message_count(pool: &DbPool) -> sqlx::Result<u32> {
    let (sql, values) = Query::select()
        .from(schema::Message::Table)
        .expr(Func::count(Expr::asterisk()))
        .build_sqlx(PostgresQueryBuilder);
    let count: i64 = sqlx::query_with(&sql, values.clone())
        .map(|r| r.get(0))
        .fetch_one(pool)
        .await?;
    Ok(count as u32)
}

fn instant_now() -> Instant {
    let millis = SystemTime::now()
        .duration_since(SystemTime::UNIX_EPOCH)
        .expect("Time should advance")
        .as_millis();
    Instant(millis as i64)
}
