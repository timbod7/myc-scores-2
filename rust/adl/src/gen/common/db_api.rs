// @generated from adl module common.db_api

use serde::Deserialize;
use serde::Serialize;

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
 * A holder for paginated results
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
