use serde::{de::DeserializeOwned, Serialize};
use sqlx::{postgres::PgRow, types::time::OffsetDateTime, ColumnIndex, Postgres, Row};
use std::marker::PhantomData;

use crate::{adl::custom::DbKey, adl::gen::common::time::Instant};

/// Helper trait to extract values from a db row and decode them
pub trait AdlFieldGet<'r, I, T> {
    fn adl_get(&'r self, index: I) -> T;
}

impl<'r, I, T> AdlFieldGet<'r, I, T> for PgRow
where
    I: ColumnIndex<PgRow>,
    T: DbConversions,
    T::DbType: sqlx::Type<Postgres> + sqlx::Decode<'r, Postgres>,
{
    fn adl_get(&'r self, index: I) -> T {
        let dbv: T::DbType = self.get(index);
        T::from_db_impl(dbv)
    }
}

pub trait DbConversions {
    type DbType;

    fn to_db(&self) -> Self::DbType;
    fn from_db_impl(dbv: Self::DbType) -> Self;
}

impl DbConversions for Instant {
    type DbType = OffsetDateTime;

    fn to_db(&self) -> OffsetDateTime {
        OffsetDateTime::from_unix_timestamp_nanos(self.0 as i128 * 1_000_000)
            .expect("instant should be in range")
    }

    fn from_db_impl(dbv: OffsetDateTime) -> Self {
        let timestamp_millis = dbv.unix_timestamp_nanos() / 1_000_000;
        Instant(timestamp_millis as i64)
    }
}

impl DbConversions for String {
    type DbType = String;

    fn to_db(&self) -> String {
        self.clone()
    }

    fn from_db_impl(dbv: String) -> Self {
        dbv
    }
}

impl DbConversions for bool {
    type DbType = bool;

    fn to_db(&self) -> bool {
        self.clone()
    }

    fn from_db_impl(dbv: bool) -> Self {
        dbv
    }
}

impl DbConversions for serde_json::Value {
    type DbType = serde_json::Value;

    fn to_db(&self) -> Self::DbType {
        self.clone()
    }

    fn from_db_impl(dbv: Self::DbType) -> Self {
        dbv
    }
}

impl DbConversions for u32 {
    type DbType = i64;

    fn to_db(&self) -> Self::DbType {
        *self as Self::DbType
    }

    fn from_db_impl(dbv: Self::DbType) -> Self {
        dbv as Self
    }
}

impl DbConversions for u64 {
    type DbType = i64;

    fn to_db(&self) -> Self::DbType {
        *self as Self::DbType
    }

    fn from_db_impl(dbv: Self::DbType) -> Self {
        dbv as Self
    }
}

impl<T> DbConversions for DbKey<T> {
    type DbType = String;

    fn to_db(&self) -> String {
        self.0.clone()
    }

    fn from_db_impl(dbv: String) -> Self {
        DbKey(dbv, PhantomData)
    }
}

impl<T> DbConversions for Option<T>
where
    T: DbConversions,
{
    type DbType = Option<T::DbType>;

    fn to_db(&self) -> Option<T::DbType> {
        match self {
            None => None,
            Some(v) => Some(v.to_db()),
        }
    }

    fn from_db_impl(dbv: Option<T::DbType>) -> Self {
        match dbv {
            None => None,
            Some(dbv) => Some(T::from_db_impl(dbv)),
        }
    }
}

fn union_to_db<U: Serialize>(u: &U) -> String {
    let jv = serde_json::to_value(&u).expect("should be able to serialize an adl enum");
    jv.as_str().expect("adl enum should be a string").to_owned()
}

fn union_from_db<U: DeserializeOwned>(dbv: String) -> U {
    let jv = serde_json::Value::String(dbv);
    serde_json::from_value(jv).expect("db enum should be valid")
}

fn adl_to_db<U: Serialize>(u: &U) -> serde_json::Value {
    serde_json::to_value(&u).expect("should be able to serialize an adl enum")
}

fn adl_from_db<U: DeserializeOwned>(dbv: serde_json::Value) -> U {
    serde_json::from_value(dbv).expect("db enum should be valid")
}
