// @generated from adl module common.db_api

use crate::gen::common::http::HttpReq;
use serde::Deserialize;
use serde::Deserializer;
use serde::Serialize;
use serde::Serializer;
use std::marker::PhantomData;

pub type TabularQuery<T> = HttpReq<TabularQueryReq<T>, Paginated<T>>;

#[derive(Clone,Deserialize,Eq,Hash,PartialEq,Serialize)]
pub struct TabularQueryReq<T> {
  #[serde(default="TabularQueryReq::<T>::def_sorting")]
  pub sorting: QuerySorting<T>,

  #[serde(default="TabularQueryReq::<T>::def_page")]
  pub page: PageReq,
}

impl<T> TabularQueryReq<T> {
  pub fn new() -> TabularQueryReq<T> {
    TabularQueryReq {
      sorting: TabularQueryReq::<T>::def_sorting(),
      page: TabularQueryReq::<T>::def_page(),
    }
  }

  pub fn def_sorting() -> QuerySorting<T> {
    vec![]
  }

  pub fn def_page() -> PageReq {
    PageReq{offset : 0_u64, limit : 20_u64}
  }
}

pub type QuerySorting<T> = Vec<SortColumn<T>>;

#[derive(Clone,Deserialize,Eq,Hash,PartialEq,Serialize)]
pub struct SortColumn<T> {
  pub column: ColumnRef<T>,

  pub order: SortOrder,
}

impl<T> SortColumn<T> {
  pub fn new(column: ColumnRef<T>, order: SortOrder) -> SortColumn<T> {
    SortColumn {
      column: column,
      order: order,
    }
  }
}

#[derive(Clone,Deserialize,Eq,Hash,PartialEq,Serialize)]
pub enum SortOrder {
  #[serde(rename="asc")]
  Asc,

  #[serde(rename="desc")]
  Desc,
}

#[derive(Clone,Eq,Hash,PartialEq)]
pub struct ColumnRef<T>(pub String, pub PhantomData<T>);

impl<T> Serialize for ColumnRef<T>
{
  fn serialize<S>(&self, serializer: S) -> Result<S::Ok, S::Error>
  where
      S: Serializer,
  {
      self.0.serialize(serializer)
  }
}

impl<'de, T> Deserialize<'de> for ColumnRef<T>
{
  fn deserialize<D>(deserializer: D) -> Result<ColumnRef<T>, D::Error>
  where
      D: Deserializer<'de>,
  {
      let v = String::deserialize(deserializer)?;
      Ok(ColumnRef(v, PhantomData))
  }
}

#[derive(Clone,Deserialize,PartialEq,Serialize)]
pub struct ColumnRefWithValue<T> {
  pub column: ColumnRef<T>,

  pub value: serde_json::Value,
}

impl<T> ColumnRefWithValue<T> {
  pub fn new(column: ColumnRef<T>, value: serde_json::Value) -> ColumnRefWithValue<T> {
    ColumnRefWithValue {
      column: column,
      value: value,
    }
  }
}

#[derive(Clone,Deserialize,Eq,Hash,PartialEq,Serialize)]
pub struct PageReq {
  #[serde(default="PageReq::def_offset")]
  pub offset: u64,

  #[serde(default="PageReq::def_limit")]
  pub limit: u64,
}

impl PageReq {
  pub fn new() -> PageReq {
    PageReq {
      offset: PageReq::def_offset(),
      limit: PageReq::def_limit(),
    }
  }

  pub fn def_offset() -> u64 {
    0_u64
  }

  pub fn def_limit() -> u64 {
    20_u64
  }
}

/**
 * A holder for a page of results
 */
#[derive(Clone,Deserialize,Eq,Hash,PartialEq,Serialize)]
pub struct Paginated<T> {
  /**
   * The paginated items
   */
  pub items: Vec<T>,

  /**
   * The offset used for this query
   */
  pub current_offset: u64,

  /**
   * The size of the entire date set
   */
  pub total_count: u64,
}

impl<T> Paginated<T> {
  pub fn new(items: Vec<T>, current_offset: u64, total_count: u64) -> Paginated<T> {
    Paginated {
      items: items,
      current_offset: current_offset,
      total_count: total_count,
    }
  }
}
