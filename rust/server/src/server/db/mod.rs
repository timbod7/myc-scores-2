use std::time::SystemTime;

use sea_query::{Expr, Func, Order, PostgresQueryBuilder, Query};
use sea_query_binder::SqlxBinder;
use sqlx::Row;

use crate::adl::{
    custom::DbKey,
    db::{
        schema,
        types::{InsertRow, SelectStatementExt},
    },
    gen::{
        common::{db::WithId, time::Instant},
        protoapp::{
            apis,
            db::{AppUser, AppUserId, MessageId},
        },
    },
};

type DbPool = sqlx::PgPool;

pub async fn get_user_with_email(
    pool: &DbPool,
    email: &str,
) -> sqlx::Result<Option<WithId<AppUser>>> {
    get_user(pool, schema::AppUser::email().eq_value(&email.to_owned())).await
}

pub async fn get_user_with_id(
    pool: &DbPool,
    user_id: &AppUserId,
) -> sqlx::Result<Option<WithId<AppUser>>> {
    get_user(pool, schema::AppUser::id().eq_value(user_id)).await
}

async fn get_user(
    pool: &DbPool,
    where_expr: sea_query::SimpleExpr,
) -> sqlx::Result<Option<WithId<AppUser>>> {
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
        .map(|r| WithId {
            id: T::id().from_row(&r).0,
            value: AppUser {
                fullname: T::fullname().from_row(&r),
                email: T::email().from_row(&r),
                is_admin: T::is_admin().from_row(&r),
                hashed_password: T::hashed_password().from_row(&r),
            },
        })
        .fetch_optional(pool)
        .await?;

    Ok(v)
}

pub async fn create_user(pool: &DbPool, user: &AppUser) -> sqlx::Result<AppUserId> {
    type T = schema::AppUser;
    let id: AppUserId = DbKey::new("U-");

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

pub async fn new_message(
    pool: &DbPool,
    user_id: &AppUserId,
    message: &String,
) -> sqlx::Result<MessageId> {
    let id: MessageId = DbKey::new("M-");
    let posted_at = instant_now();

    type T = schema::Message;

    let (icolumns, ivalues) = InsertRow::new()
        .field(T::id(), &id)
        .field(T::posted_at(), &posted_at)
        .field(T::posted_by(), &user_id)
        .field(T::message(), &message)
        .build();

    let (sql, values) = Query::insert()
        .into_table(schema::Message::table())
        .columns(icolumns)
        .values_panic(ivalues)
        .build_sqlx(PostgresQueryBuilder);
    sqlx::query_with(&sql, values).execute(pool).await?;
    Ok(id)
}

pub async fn recent_messages(
    pool: &DbPool,
    offset: u32,
    limit: u32,
) -> sqlx::Result<Vec<apis::ui::Message>> {
    type U = schema::AppUser;
    type M = schema::Message;
    let (sql, values) = Query::select()
        .scolumn(M::id())
        .scolumn(M::posted_at())
        .scolumn(M::message())
        .scolumn(U::fullname())
        .from(M::table())
        .inner_join(U::table(), U::id().expr().eq(M::posted_by().expr()))
        .order_by(schema::Message::posted_at().iden(), Order::Desc)
        .offset(offset as u64)
        .limit(limit as u64)
        .build_sqlx(PostgresQueryBuilder);

    let messages = sqlx::query_with(&sql, values.clone())
        .map(|r| apis::ui::Message {
            id: M::id().from_row(&r),
            posted_at: M::posted_at().from_row(&r),
            message: M::message().from_row(&r),
            user_fullname: U::fullname().from_row(&r),
        })
        .fetch_all(pool)
        .await?;
    Ok(messages)
}

pub async fn message_count(pool: &DbPool) -> sqlx::Result<u32> {
    type M = schema::Message;

    let (sql, values) = Query::select()
        .from(M::table())
        .expr(Func::count(Expr::asterisk()))
        .build_sqlx(PostgresQueryBuilder);

    let count: i64 = sqlx::query_with(&sql, values)
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
