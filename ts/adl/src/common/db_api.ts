/* @generated from adl module common.db_api */

import * as ADL from '@adllang/adl-runtime';
import * as common_http from './http';

export type TabularQuery<T> = common_http.HttpReq<TabularQueryReq<T>, Paginated<T>>;

const TabularQuery_AST : ADL.ScopedDecl =
  {"decl":{"annotations":[],"name":"TabularQuery","type_":{"kind":"type_","value":{"typeExpr":{"parameters":[{"parameters":[{"parameters":[],"typeRef":{"kind":"typeParam","value":"T"}}],"typeRef":{"kind":"reference","value":{"moduleName":"common.db_api","name":"TabularQueryReq"}}},{"parameters":[{"parameters":[],"typeRef":{"kind":"typeParam","value":"T"}}],"typeRef":{"kind":"reference","value":{"moduleName":"common.db_api","name":"Paginated"}}}],"typeRef":{"kind":"reference","value":{"moduleName":"common.http","name":"HttpReq"}}},"typeParams":["T"]}},"version":{"kind":"nothing"}},"moduleName":"common.db_api"};

export const snTabularQuery: ADL.ScopedName = {moduleName:"common.db_api", name:"TabularQuery"};

export function texprTabularQuery<T>(texprT : ADL.ATypeExpr<T>): ADL.ATypeExpr<TabularQuery<T>> {
  return {value : {typeRef : {kind: "reference", value : {moduleName : "common.db_api",name : "TabularQuery"}}, parameters : [texprT.value]}};
}

export interface TabularQueryReq<T> {
  sorting: QuerySorting<T>;
  page: PageReq;
}

export function makeTabularQueryReq<T>(
  input: {
    sorting?: QuerySorting<T>,
    page?: PageReq,
  }
): TabularQueryReq<T> {
  return {
    sorting: input.sorting === undefined ? [] : input.sorting,
    page: input.page === undefined ? {offset : 0, limit : 20} : input.page,
  };
}

const TabularQueryReq_AST : ADL.ScopedDecl =
  {"decl":{"annotations":[],"name":"TabularQueryReq","type_":{"kind":"struct_","value":{"fields":[{"annotations":[],"default":{"kind":"just","value":[]},"name":"sorting","serializedName":"sorting","typeExpr":{"parameters":[{"parameters":[],"typeRef":{"kind":"typeParam","value":"T"}}],"typeRef":{"kind":"reference","value":{"moduleName":"common.db_api","name":"QuerySorting"}}}},{"annotations":[],"default":{"kind":"just","value":{}},"name":"page","serializedName":"page","typeExpr":{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"common.db_api","name":"PageReq"}}}}],"typeParams":["T"]}},"version":{"kind":"nothing"}},"moduleName":"common.db_api"};

export const snTabularQueryReq: ADL.ScopedName = {moduleName:"common.db_api", name:"TabularQueryReq"};

export function texprTabularQueryReq<T>(texprT : ADL.ATypeExpr<T>): ADL.ATypeExpr<TabularQueryReq<T>> {
  return {value : {typeRef : {kind: "reference", value : {moduleName : "common.db_api",name : "TabularQueryReq"}}, parameters : [texprT.value]}};
}

export type QuerySorting<T> = SortColumn<T>[];

const QuerySorting_AST : ADL.ScopedDecl =
  {"decl":{"annotations":[],"name":"QuerySorting","type_":{"kind":"type_","value":{"typeExpr":{"parameters":[{"parameters":[{"parameters":[],"typeRef":{"kind":"typeParam","value":"T"}}],"typeRef":{"kind":"reference","value":{"moduleName":"common.db_api","name":"SortColumn"}}}],"typeRef":{"kind":"primitive","value":"Vector"}},"typeParams":["T"]}},"version":{"kind":"nothing"}},"moduleName":"common.db_api"};

export const snQuerySorting: ADL.ScopedName = {moduleName:"common.db_api", name:"QuerySorting"};

export function texprQuerySorting<T>(texprT : ADL.ATypeExpr<T>): ADL.ATypeExpr<QuerySorting<T>> {
  return {value : {typeRef : {kind: "reference", value : {moduleName : "common.db_api",name : "QuerySorting"}}, parameters : [texprT.value]}};
}

export interface SortColumn<T> {
  column: ColumnRef<T>;
  order: SortOrder;
}

export function makeSortColumn<T>(
  input: {
    column: ColumnRef<T>,
    order: SortOrder,
  }
): SortColumn<T> {
  return {
    column: input.column,
    order: input.order,
  };
}

const SortColumn_AST : ADL.ScopedDecl =
  {"decl":{"annotations":[],"name":"SortColumn","type_":{"kind":"struct_","value":{"fields":[{"annotations":[],"default":{"kind":"nothing"},"name":"column","serializedName":"column","typeExpr":{"parameters":[{"parameters":[],"typeRef":{"kind":"typeParam","value":"T"}}],"typeRef":{"kind":"reference","value":{"moduleName":"common.db_api","name":"ColumnRef"}}}},{"annotations":[],"default":{"kind":"nothing"},"name":"order","serializedName":"order","typeExpr":{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"common.db_api","name":"SortOrder"}}}}],"typeParams":["T"]}},"version":{"kind":"nothing"}},"moduleName":"common.db_api"};

export const snSortColumn: ADL.ScopedName = {moduleName:"common.db_api", name:"SortColumn"};

export function texprSortColumn<T>(texprT : ADL.ATypeExpr<T>): ADL.ATypeExpr<SortColumn<T>> {
  return {value : {typeRef : {kind: "reference", value : {moduleName : "common.db_api",name : "SortColumn"}}, parameters : [texprT.value]}};
}

export type SortOrder = 'asc' | 'desc';
export const valuesSortOrder : SortOrder[] = ['asc', 'desc'];

const SortOrder_AST : ADL.ScopedDecl =
  {"decl":{"annotations":[],"name":"SortOrder","type_":{"kind":"union_","value":{"fields":[{"annotations":[],"default":{"kind":"nothing"},"name":"asc","serializedName":"asc","typeExpr":{"parameters":[],"typeRef":{"kind":"primitive","value":"Void"}}},{"annotations":[],"default":{"kind":"nothing"},"name":"desc","serializedName":"desc","typeExpr":{"parameters":[],"typeRef":{"kind":"primitive","value":"Void"}}}],"typeParams":[]}},"version":{"kind":"nothing"}},"moduleName":"common.db_api"};

export const snSortOrder: ADL.ScopedName = {moduleName:"common.db_api", name:"SortOrder"};

export function texprSortOrder(): ADL.ATypeExpr<SortOrder> {
  return {value : {typeRef : {kind: "reference", value : snSortOrder}, parameters : []}};
}

export type ColumnRef<_T> = string;

const ColumnRef_AST : ADL.ScopedDecl =
  {"decl":{"annotations":[],"name":"ColumnRef","type_":{"kind":"newtype_","value":{"default":{"kind":"nothing"},"typeExpr":{"parameters":[],"typeRef":{"kind":"primitive","value":"String"}},"typeParams":["T"]}},"version":{"kind":"nothing"}},"moduleName":"common.db_api"};

export const snColumnRef: ADL.ScopedName = {moduleName:"common.db_api", name:"ColumnRef"};

export function texprColumnRef<T>(texprT : ADL.ATypeExpr<T>): ADL.ATypeExpr<ColumnRef<T>> {
  return {value : {typeRef : {kind: "reference", value : {moduleName : "common.db_api",name : "ColumnRef"}}, parameters : [texprT.value]}};
}

export interface ColumnRefWithValue<T> {
  column: ColumnRef<T>;
  value: {}|null;
}

export function makeColumnRefWithValue<T>(
  input: {
    column: ColumnRef<T>,
    value: {}|null,
  }
): ColumnRefWithValue<T> {
  return {
    column: input.column,
    value: input.value,
  };
}

const ColumnRefWithValue_AST : ADL.ScopedDecl =
  {"decl":{"annotations":[],"name":"ColumnRefWithValue","type_":{"kind":"struct_","value":{"fields":[{"annotations":[],"default":{"kind":"nothing"},"name":"column","serializedName":"column","typeExpr":{"parameters":[{"parameters":[],"typeRef":{"kind":"typeParam","value":"T"}}],"typeRef":{"kind":"reference","value":{"moduleName":"common.db_api","name":"ColumnRef"}}}},{"annotations":[],"default":{"kind":"nothing"},"name":"value","serializedName":"value","typeExpr":{"parameters":[],"typeRef":{"kind":"primitive","value":"Json"}}}],"typeParams":["T"]}},"version":{"kind":"nothing"}},"moduleName":"common.db_api"};

export const snColumnRefWithValue: ADL.ScopedName = {moduleName:"common.db_api", name:"ColumnRefWithValue"};

export function texprColumnRefWithValue<T>(texprT : ADL.ATypeExpr<T>): ADL.ATypeExpr<ColumnRefWithValue<T>> {
  return {value : {typeRef : {kind: "reference", value : {moduleName : "common.db_api",name : "ColumnRefWithValue"}}, parameters : [texprT.value]}};
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

export const _AST_MAP: { [key: string]: ADL.ScopedDecl } = {
  "common.db_api.TabularQuery" : TabularQuery_AST,
  "common.db_api.TabularQueryReq" : TabularQueryReq_AST,
  "common.db_api.QuerySorting" : QuerySorting_AST,
  "common.db_api.SortColumn" : SortColumn_AST,
  "common.db_api.SortOrder" : SortOrder_AST,
  "common.db_api.ColumnRef" : ColumnRef_AST,
  "common.db_api.ColumnRefWithValue" : ColumnRefWithValue_AST,
  "common.db_api.PageReq" : PageReq_AST,
  "common.db_api.Paginated" : Paginated_AST
};
