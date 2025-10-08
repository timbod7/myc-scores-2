/* @generated from adl module common.db_api */

import * as ADL from '@adllang/adl-runtime';
import * as common_http from './http';

export interface WithId<I, T> {
  id: I;
  value: T;
}

export function makeWithId<I, T>(
  input: {
    id: I,
    value: T,
  }
): WithId<I, T> {
  return {
    id: input.id,
    value: input.value,
  };
}

const WithId_AST : ADL.ScopedDecl =
  {"decl":{"annotations":[],"name":"WithId","type_":{"kind":"struct_","value":{"fields":[{"annotations":[],"default":{"kind":"nothing"},"name":"id","serializedName":"id","typeExpr":{"parameters":[],"typeRef":{"kind":"typeParam","value":"I"}}},{"annotations":[],"default":{"kind":"nothing"},"name":"value","serializedName":"value","typeExpr":{"parameters":[],"typeRef":{"kind":"typeParam","value":"T"}}}],"typeParams":["I","T"]}},"version":{"kind":"nothing"}},"moduleName":"common.db_api"};

export const snWithId: ADL.ScopedName = {moduleName:"common.db_api", name:"WithId"};

export function texprWithId<I, T>(texprI : ADL.ATypeExpr<I>, texprT : ADL.ATypeExpr<T>): ADL.ATypeExpr<WithId<I, T>> {
  return {value : {typeRef : {kind: "reference", value : {moduleName : "common.db_api",name : "WithId"}}, parameters : [texprI.value, texprT.value]}};
}

export type TabularQuery<S, F, T> = common_http.HttpReq<TabularQueryReq<S, F>, Paginated<T>>;

const TabularQuery_AST : ADL.ScopedDecl =
  {"decl":{"annotations":[],"name":"TabularQuery","type_":{"kind":"type_","value":{"typeExpr":{"parameters":[{"parameters":[{"parameters":[],"typeRef":{"kind":"typeParam","value":"S"}},{"parameters":[],"typeRef":{"kind":"typeParam","value":"F"}}],"typeRef":{"kind":"reference","value":{"moduleName":"common.db_api","name":"TabularQueryReq"}}},{"parameters":[{"parameters":[],"typeRef":{"kind":"typeParam","value":"T"}}],"typeRef":{"kind":"reference","value":{"moduleName":"common.db_api","name":"Paginated"}}}],"typeRef":{"kind":"reference","value":{"moduleName":"common.http","name":"HttpReq"}}},"typeParams":["S","F","T"]}},"version":{"kind":"nothing"}},"moduleName":"common.db_api"};

export const snTabularQuery: ADL.ScopedName = {moduleName:"common.db_api", name:"TabularQuery"};

export function texprTabularQuery<S, F, T>(texprS : ADL.ATypeExpr<S>, texprF : ADL.ATypeExpr<F>, texprT : ADL.ATypeExpr<T>): ADL.ATypeExpr<TabularQuery<S, F, T>> {
  return {value : {typeRef : {kind: "reference", value : {moduleName : "common.db_api",name : "TabularQuery"}}, parameters : [texprS.value, texprF.value, texprT.value]}};
}

export interface TabularQueryReq<S, F> {
  filter: BoolExpr<F>;
  sorting: QuerySorting<S>;
  page: PageReq;
}

export function makeTabularQueryReq<S, F>(
  input: {
    filter?: BoolExpr<F>,
    sorting?: QuerySorting<S>,
    page?: PageReq,
  }
): TabularQueryReq<S, F> {
  return {
    filter: input.filter === undefined ? {kind : "const", value : true} : input.filter,
    sorting: input.sorting === undefined ? [] : input.sorting,
    page: input.page === undefined ? {offset : 0, limit : 20} : input.page,
  };
}

const TabularQueryReq_AST : ADL.ScopedDecl =
  {"decl":{"annotations":[],"name":"TabularQueryReq","type_":{"kind":"struct_","value":{"fields":[{"annotations":[],"default":{"kind":"just","value":{"const":true}},"name":"filter","serializedName":"filter","typeExpr":{"parameters":[{"parameters":[],"typeRef":{"kind":"typeParam","value":"F"}}],"typeRef":{"kind":"reference","value":{"moduleName":"common.db_api","name":"BoolExpr"}}}},{"annotations":[],"default":{"kind":"just","value":[]},"name":"sorting","serializedName":"sorting","typeExpr":{"parameters":[{"parameters":[],"typeRef":{"kind":"typeParam","value":"S"}}],"typeRef":{"kind":"reference","value":{"moduleName":"common.db_api","name":"QuerySorting"}}}},{"annotations":[],"default":{"kind":"just","value":{}},"name":"page","serializedName":"page","typeExpr":{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"common.db_api","name":"PageReq"}}}}],"typeParams":["S","F"]}},"version":{"kind":"nothing"}},"moduleName":"common.db_api"};

export const snTabularQueryReq: ADL.ScopedName = {moduleName:"common.db_api", name:"TabularQueryReq"};

export function texprTabularQueryReq<S, F>(texprS : ADL.ATypeExpr<S>, texprF : ADL.ATypeExpr<F>): ADL.ATypeExpr<TabularQueryReq<S, F>> {
  return {value : {typeRef : {kind: "reference", value : {moduleName : "common.db_api",name : "TabularQueryReq"}}, parameters : [texprS.value, texprF.value]}};
}

export type QuerySorting<C> = SortColumn<C>[];

const QuerySorting_AST : ADL.ScopedDecl =
  {"decl":{"annotations":[],"name":"QuerySorting","type_":{"kind":"type_","value":{"typeExpr":{"parameters":[{"parameters":[{"parameters":[],"typeRef":{"kind":"typeParam","value":"C"}}],"typeRef":{"kind":"reference","value":{"moduleName":"common.db_api","name":"SortColumn"}}}],"typeRef":{"kind":"primitive","value":"Vector"}},"typeParams":["C"]}},"version":{"kind":"nothing"}},"moduleName":"common.db_api"};

export const snQuerySorting: ADL.ScopedName = {moduleName:"common.db_api", name:"QuerySorting"};

export function texprQuerySorting<C>(texprC : ADL.ATypeExpr<C>): ADL.ATypeExpr<QuerySorting<C>> {
  return {value : {typeRef : {kind: "reference", value : {moduleName : "common.db_api",name : "QuerySorting"}}, parameters : [texprC.value]}};
}

export interface SortColumn<C> {
  column: C;
  order: SortOrder;
}

export function makeSortColumn<C>(
  input: {
    column: C,
    order: SortOrder,
  }
): SortColumn<C> {
  return {
    column: input.column,
    order: input.order,
  };
}

const SortColumn_AST : ADL.ScopedDecl =
  {"decl":{"annotations":[],"name":"SortColumn","type_":{"kind":"struct_","value":{"fields":[{"annotations":[],"default":{"kind":"nothing"},"name":"column","serializedName":"column","typeExpr":{"parameters":[],"typeRef":{"kind":"typeParam","value":"C"}}},{"annotations":[],"default":{"kind":"nothing"},"name":"order","serializedName":"order","typeExpr":{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"common.db_api","name":"SortOrder"}}}}],"typeParams":["C"]}},"version":{"kind":"nothing"}},"moduleName":"common.db_api"};

export const snSortColumn: ADL.ScopedName = {moduleName:"common.db_api", name:"SortColumn"};

export function texprSortColumn<C>(texprC : ADL.ATypeExpr<C>): ADL.ATypeExpr<SortColumn<C>> {
  return {value : {typeRef : {kind: "reference", value : {moduleName : "common.db_api",name : "SortColumn"}}, parameters : [texprC.value]}};
}

export type SortOrder = 'asc' | 'desc';
export const valuesSortOrder : SortOrder[] = ['asc', 'desc'];

const SortOrder_AST : ADL.ScopedDecl =
  {"decl":{"annotations":[],"name":"SortOrder","type_":{"kind":"union_","value":{"fields":[{"annotations":[],"default":{"kind":"nothing"},"name":"asc","serializedName":"asc","typeExpr":{"parameters":[],"typeRef":{"kind":"primitive","value":"Void"}}},{"annotations":[],"default":{"kind":"nothing"},"name":"desc","serializedName":"desc","typeExpr":{"parameters":[],"typeRef":{"kind":"primitive","value":"Void"}}}],"typeParams":[]}},"version":{"kind":"nothing"}},"moduleName":"common.db_api"};

export const snSortOrder: ADL.ScopedName = {moduleName:"common.db_api", name:"SortOrder"};

export function texprSortOrder(): ADL.ATypeExpr<SortOrder> {
  return {value : {typeRef : {kind: "reference", value : snSortOrder}, parameters : []}};
}

export interface BoolExpr_Const<_P> {
  kind: 'const';
  value: boolean;
}
export interface BoolExpr_Prim<P> {
  kind: 'prim';
  value: P;
}
export interface BoolExpr_Not<P> {
  kind: 'not';
  value: BoolExpr<P>;
}
export interface BoolExpr_And<P> {
  kind: 'and';
  value: BoolExpr<P>[];
}
export interface BoolExpr_Or<P> {
  kind: 'or';
  value: BoolExpr<P>[];
}

export type BoolExpr<P> = BoolExpr_Const<P> | BoolExpr_Prim<P> | BoolExpr_Not<P> | BoolExpr_And<P> | BoolExpr_Or<P>;

export interface BoolExprOpts<P> {
  const: boolean;
  prim: P;
  not: BoolExpr<P>;
  and: BoolExpr<P>[];
  or: BoolExpr<P>[];
}

export function makeBoolExpr<P, K extends keyof BoolExprOpts<P>>(kind: K, value: BoolExprOpts<P>[K]) { return {kind, value}; }

const BoolExpr_AST : ADL.ScopedDecl =
  {"decl":{"annotations":[],"name":"BoolExpr","type_":{"kind":"union_","value":{"fields":[{"annotations":[],"default":{"kind":"nothing"},"name":"const","serializedName":"const","typeExpr":{"parameters":[],"typeRef":{"kind":"primitive","value":"Bool"}}},{"annotations":[],"default":{"kind":"nothing"},"name":"prim","serializedName":"prim","typeExpr":{"parameters":[],"typeRef":{"kind":"typeParam","value":"P"}}},{"annotations":[],"default":{"kind":"nothing"},"name":"not","serializedName":"not","typeExpr":{"parameters":[{"parameters":[],"typeRef":{"kind":"typeParam","value":"P"}}],"typeRef":{"kind":"reference","value":{"moduleName":"common.db_api","name":"BoolExpr"}}}},{"annotations":[],"default":{"kind":"nothing"},"name":"and","serializedName":"and","typeExpr":{"parameters":[{"parameters":[{"parameters":[],"typeRef":{"kind":"typeParam","value":"P"}}],"typeRef":{"kind":"reference","value":{"moduleName":"common.db_api","name":"BoolExpr"}}}],"typeRef":{"kind":"primitive","value":"Vector"}}},{"annotations":[],"default":{"kind":"nothing"},"name":"or","serializedName":"or","typeExpr":{"parameters":[{"parameters":[{"parameters":[],"typeRef":{"kind":"typeParam","value":"P"}}],"typeRef":{"kind":"reference","value":{"moduleName":"common.db_api","name":"BoolExpr"}}}],"typeRef":{"kind":"primitive","value":"Vector"}}}],"typeParams":["P"]}},"version":{"kind":"nothing"}},"moduleName":"common.db_api"};

export const snBoolExpr: ADL.ScopedName = {moduleName:"common.db_api", name:"BoolExpr"};

export function texprBoolExpr<P>(texprP : ADL.ATypeExpr<P>): ADL.ATypeExpr<BoolExpr<P>> {
  return {value : {typeRef : {kind: "reference", value : {moduleName : "common.db_api",name : "BoolExpr"}}, parameters : [texprP.value]}};
}

export interface PageReq {
  offset: number;
  limit: number;
}

export function makePageReq(
  input: {
    offset?: number,
    limit?: number,
  }
): PageReq {
  return {
    offset: input.offset === undefined ? 0 : input.offset,
    limit: input.limit === undefined ? 20 : input.limit,
  };
}

const PageReq_AST : ADL.ScopedDecl =
  {"decl":{"annotations":[],"name":"PageReq","type_":{"kind":"struct_","value":{"fields":[{"annotations":[],"default":{"kind":"just","value":0},"name":"offset","serializedName":"offset","typeExpr":{"parameters":[],"typeRef":{"kind":"primitive","value":"Word64"}}},{"annotations":[],"default":{"kind":"just","value":20},"name":"limit","serializedName":"limit","typeExpr":{"parameters":[],"typeRef":{"kind":"primitive","value":"Word64"}}}],"typeParams":[]}},"version":{"kind":"nothing"}},"moduleName":"common.db_api"};

export const snPageReq: ADL.ScopedName = {moduleName:"common.db_api", name:"PageReq"};

export function texprPageReq(): ADL.ATypeExpr<PageReq> {
  return {value : {typeRef : {kind: "reference", value : snPageReq}, parameters : []}};
}

/**
 * A holder for a page of results
 */
export interface Paginated<T> {
  /**
   * The paginated items
   */
  items: T[];
  /**
   * The offset used for this query
   */
  current_offset: number;
  /**
   * The size of the entire date set
   */
  total_count: number;
}

export function makePaginated<T>(
  input: {
    items: T[],
    current_offset: number,
    total_count: number,
  }
): Paginated<T> {
  return {
    items: input.items,
    current_offset: input.current_offset,
    total_count: input.total_count,
  };
}

const Paginated_AST : ADL.ScopedDecl =
  {"decl":{"annotations":[{"key":{"moduleName":"sys.annotations","name":"Doc"},"value":"A holder for a page of results\n"}],"name":"Paginated","type_":{"kind":"struct_","value":{"fields":[{"annotations":[{"key":{"moduleName":"sys.annotations","name":"Doc"},"value":"The paginated items\n"}],"default":{"kind":"nothing"},"name":"items","serializedName":"items","typeExpr":{"parameters":[{"parameters":[],"typeRef":{"kind":"typeParam","value":"T"}}],"typeRef":{"kind":"primitive","value":"Vector"}}},{"annotations":[{"key":{"moduleName":"sys.annotations","name":"Doc"},"value":"The offset used for this query\n"}],"default":{"kind":"nothing"},"name":"current_offset","serializedName":"current_offset","typeExpr":{"parameters":[],"typeRef":{"kind":"primitive","value":"Word64"}}},{"annotations":[{"key":{"moduleName":"sys.annotations","name":"Doc"},"value":"The size of the entire date set\n"}],"default":{"kind":"nothing"},"name":"total_count","serializedName":"total_count","typeExpr":{"parameters":[],"typeRef":{"kind":"primitive","value":"Word64"}}}],"typeParams":["T"]}},"version":{"kind":"nothing"}},"moduleName":"common.db_api"};

export const snPaginated: ADL.ScopedName = {moduleName:"common.db_api", name:"Paginated"};

export function texprPaginated<T>(texprT : ADL.ATypeExpr<T>): ADL.ATypeExpr<Paginated<T>> {
  return {value : {typeRef : {kind: "reference", value : {moduleName : "common.db_api",name : "Paginated"}}, parameters : [texprT.value]}};
}

export interface CrudApi<I, T, S, F> {
  create: common_http.HttpReq<T, I>;
  update: common_http.HttpReq<WithId<I, T>, common_http.Unit>;
  delete: common_http.HttpReq<I, common_http.Unit>;
  query: common_http.HttpReq<TabularQueryReq<S, F>, Paginated<WithId<I, T>>>;
}

export function makeCrudApi<I, T, S, F>(
  input: {
    create: common_http.HttpReq<T, I>,
    update: common_http.HttpReq<WithId<I, T>, common_http.Unit>,
    delete: common_http.HttpReq<I, common_http.Unit>,
    query: common_http.HttpReq<TabularQueryReq<S, F>, Paginated<WithId<I, T>>>,
  }
): CrudApi<I, T, S, F> {
  return {
    create: input.create,
    update: input.update,
    delete: input.delete,
    query: input.query,
  };
}

const CrudApi_AST : ADL.ScopedDecl =
  {"decl":{"annotations":[],"name":"CrudApi","type_":{"kind":"struct_","value":{"fields":[{"annotations":[],"default":{"kind":"nothing"},"name":"create","serializedName":"create","typeExpr":{"parameters":[{"parameters":[],"typeRef":{"kind":"typeParam","value":"T"}},{"parameters":[],"typeRef":{"kind":"typeParam","value":"I"}}],"typeRef":{"kind":"reference","value":{"moduleName":"common.http","name":"HttpReq"}}}},{"annotations":[],"default":{"kind":"nothing"},"name":"update","serializedName":"update","typeExpr":{"parameters":[{"parameters":[{"parameters":[],"typeRef":{"kind":"typeParam","value":"I"}},{"parameters":[],"typeRef":{"kind":"typeParam","value":"T"}}],"typeRef":{"kind":"reference","value":{"moduleName":"common.db_api","name":"WithId"}}},{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"common.http","name":"Unit"}}}],"typeRef":{"kind":"reference","value":{"moduleName":"common.http","name":"HttpReq"}}}},{"annotations":[],"default":{"kind":"nothing"},"name":"delete","serializedName":"delete","typeExpr":{"parameters":[{"parameters":[],"typeRef":{"kind":"typeParam","value":"I"}},{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"common.http","name":"Unit"}}}],"typeRef":{"kind":"reference","value":{"moduleName":"common.http","name":"HttpReq"}}}},{"annotations":[],"default":{"kind":"nothing"},"name":"query","serializedName":"query","typeExpr":{"parameters":[{"parameters":[{"parameters":[],"typeRef":{"kind":"typeParam","value":"S"}},{"parameters":[],"typeRef":{"kind":"typeParam","value":"F"}}],"typeRef":{"kind":"reference","value":{"moduleName":"common.db_api","name":"TabularQueryReq"}}},{"parameters":[{"parameters":[{"parameters":[],"typeRef":{"kind":"typeParam","value":"I"}},{"parameters":[],"typeRef":{"kind":"typeParam","value":"T"}}],"typeRef":{"kind":"reference","value":{"moduleName":"common.db_api","name":"WithId"}}}],"typeRef":{"kind":"reference","value":{"moduleName":"common.db_api","name":"Paginated"}}}],"typeRef":{"kind":"reference","value":{"moduleName":"common.http","name":"HttpReq"}}}}],"typeParams":["I","T","S","F"]}},"version":{"kind":"nothing"}},"moduleName":"common.db_api"};

export const snCrudApi: ADL.ScopedName = {moduleName:"common.db_api", name:"CrudApi"};

export function texprCrudApi<I, T, S, F>(texprI : ADL.ATypeExpr<I>, texprT : ADL.ATypeExpr<T>, texprS : ADL.ATypeExpr<S>, texprF : ADL.ATypeExpr<F>): ADL.ATypeExpr<CrudApi<I, T, S, F>> {
  return {value : {typeRef : {kind: "reference", value : {moduleName : "common.db_api",name : "CrudApi"}}, parameters : [texprI.value, texprT.value, texprS.value, texprF.value]}};
}

export const _AST_MAP: { [key: string]: ADL.ScopedDecl } = {
  "common.db_api.WithId" : WithId_AST,
  "common.db_api.TabularQuery" : TabularQuery_AST,
  "common.db_api.TabularQueryReq" : TabularQueryReq_AST,
  "common.db_api.QuerySorting" : QuerySorting_AST,
  "common.db_api.SortColumn" : SortColumn_AST,
  "common.db_api.SortOrder" : SortOrder_AST,
  "common.db_api.BoolExpr" : BoolExpr_AST,
  "common.db_api.PageReq" : PageReq_AST,
  "common.db_api.Paginated" : Paginated_AST,
  "common.db_api.CrudApi" : CrudApi_AST
};
