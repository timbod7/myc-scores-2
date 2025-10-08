// @generated from adl module common.db_api

use crate::gen::common::http::HttpReq;
use crate::gen::common::http::Unit;
use serde::Deserialize;
use serde::Serialize;

#[derive(Clone,Deserialize,Eq,Hash,PartialEq,Serialize)]
pub struct WithId<I, T> {
  pub id: I,

  pub value: T,
}

impl<I, T> WithId<I, T> {
  pub fn new(id: I, value: T) -> WithId<I, T> {
    WithId {
      id: id,
      value: value,
    }
  }
}

pub type TabularQuery<F, S, T> = HttpReq<TabularQueryReq<S, F>, Paginated<T>>;

#[derive(Clone,Deserialize,Eq,Hash,PartialEq,Serialize)]
pub struct TabularQueryReq<S, F> {
  #[serde(default="TabularQueryReq::<S, F>::def_filter")]
  pub filter: BoolExpr<F>,

  #[serde(default="TabularQueryReq::<S, F>::def_sorting")]
  pub sorting: QuerySorting<S>,

  #[serde(default="TabularQueryReq::<S, F>::def_page")]
  pub page: PageReq,
}

impl<S, F> TabularQueryReq<S, F> {
  pub fn new() -> TabularQueryReq<S, F> {
    TabularQueryReq {
      filter: TabularQueryReq::<S, F>::def_filter(),
      sorting: TabularQueryReq::<S, F>::def_sorting(),
      page: TabularQueryReq::<S, F>::def_page(),
    }
  }

  pub fn def_filter() -> BoolExpr<F> {
    BoolExpr::Const(true)
  }

  pub fn def_sorting() -> QuerySorting<S> {
    vec![]
  }

  pub fn def_page() -> PageReq {
    PageReq{offset : 0_u64, limit : 20_u64}
  }
}

pub type QuerySorting<C> = Vec<SortColumn<C>>;

#[derive(Clone,Deserialize,Eq,Hash,PartialEq,Serialize)]
pub struct SortColumn<C> {
  pub column: C,

  pub order: SortOrder,
}

impl<C> SortColumn<C> {
  pub fn new(column: C, order: SortOrder) -> SortColumn<C> {
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

#[derive(Clone,Deserialize,Eq,Hash,PartialEq,Serialize)]
pub enum BoolExpr<P> {
  #[serde(rename="const")]
  Const(bool),

  #[serde(rename="prim")]
  Prim(P),

  #[serde(rename="not")]
  Not(Box<BoolExpr<P>>),

  #[serde(rename="and")]
  And(Vec<BoolExpr<P>>),

  #[serde(rename="or")]
  Or(Vec<BoolExpr<P>>),
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

#[derive(Clone,Deserialize,Eq,Hash,PartialEq,Serialize)]
pub struct CrudApi<I, T, S, F> {
  pub create: HttpReq<T, I>,

  pub update: HttpReq<WithId<I, T>, Unit>,

  pub delete: HttpReq<I, Unit>,

  pub query: HttpReq<TabularQueryReq<S, F>, Paginated<WithId<I, T>>>,
}

impl<I, T, S, F> CrudApi<I, T, S, F> {
  pub fn new(create: HttpReq<T, I>, update: HttpReq<WithId<I, T>, Unit>, delete: HttpReq<I, Unit>, query: HttpReq<TabularQueryReq<S, F>, Paginated<WithId<I, T>>>) -> CrudApi<I, T, S, F> {
    CrudApi {
      create: create,
      update: update,
      delete: delete,
      query: query,
    }
  }
}
