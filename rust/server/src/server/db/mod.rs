use sqlx::Postgres;

pub mod seasons;
pub mod users;
pub mod utils;

pub type DbPool = sqlx::PgPool;
pub type DbTransaction = sqlx::Transaction<'static, Postgres>;
