/* @generated from adl module common.db */

import * as ADL from './../runtime/adl';

export interface DbTable {
  table_name: string;
  indexes: string[][];
  uniqueness_constraints: string[][];
  extra_sql: string[];
  label: string[];
}

export function makeDbTable(
  input: {
    table_name?: string,
    indexes?: string[][],
    uniqueness_constraints?: string[][],
    extra_sql?: string[],
    label?: string[],
  }
): DbTable {
  return {
    table_name: input.table_name === undefined ? "" : input.table_name,
    indexes: input.indexes === undefined ? [] : input.indexes,
    uniqueness_constraints: input.uniqueness_constraints === undefined ? [] : input.uniqueness_constraints,
    extra_sql: input.extra_sql === undefined ? [] : input.extra_sql,
    label: input.label === undefined ? [] : input.label,
  };
}

const DbTable_AST : ADL.ScopedDecl =
  {"moduleName":"common.db","decl":{"annotations":[],"type_":{"kind":"struct_","value":{"typeParams":[],"fields":[{"annotations":[],"serializedName":"table_name","default":{"kind":"just","value":""},"name":"table_name","typeExpr":{"typeRef":{"kind":"primitive","value":"String"},"parameters":[]}},{"annotations":[],"serializedName":"indexes","default":{"kind":"just","value":[]},"name":"indexes","typeExpr":{"typeRef":{"kind":"primitive","value":"Vector"},"parameters":[{"typeRef":{"kind":"primitive","value":"Vector"},"parameters":[{"typeRef":{"kind":"primitive","value":"String"},"parameters":[]}]}]}},{"annotations":[],"serializedName":"uniqueness_constraints","default":{"kind":"just","value":[]},"name":"uniqueness_constraints","typeExpr":{"typeRef":{"kind":"primitive","value":"Vector"},"parameters":[{"typeRef":{"kind":"primitive","value":"Vector"},"parameters":[{"typeRef":{"kind":"primitive","value":"String"},"parameters":[]}]}]}},{"annotations":[],"serializedName":"extra_sql","default":{"kind":"just","value":[]},"name":"extra_sql","typeExpr":{"typeRef":{"kind":"primitive","value":"Vector"},"parameters":[{"typeRef":{"kind":"primitive","value":"String"},"parameters":[]}]}},{"annotations":[],"serializedName":"label","default":{"kind":"just","value":[]},"name":"label","typeExpr":{"typeRef":{"kind":"primitive","value":"Vector"},"parameters":[{"typeRef":{"kind":"primitive","value":"String"},"parameters":[]}]}}]}},"name":"DbTable","version":{"kind":"nothing"}}};

export const snDbTable: ADL.ScopedName = {moduleName:"common.db", name:"DbTable"};

export function texprDbTable(): ADL.ATypeExpr<DbTable> {
  return {value : {typeRef : {kind: "reference", value : snDbTable}, parameters : []}};
}

export interface DbView {
  view_name: string;
}

export function makeDbView(
  input: {
    view_name?: string,
  }
): DbView {
  return {
    view_name: input.view_name === undefined ? "" : input.view_name,
  };
}

const DbView_AST : ADL.ScopedDecl =
  {"moduleName":"common.db","decl":{"annotations":[],"type_":{"kind":"struct_","value":{"typeParams":[],"fields":[{"annotations":[],"serializedName":"view_name","default":{"kind":"just","value":""},"name":"view_name","typeExpr":{"typeRef":{"kind":"primitive","value":"String"},"parameters":[]}}]}},"name":"DbView","version":{"kind":"nothing"}}};

export const snDbView: ADL.ScopedName = {moduleName:"common.db", name:"DbView"};

export function texprDbView(): ADL.ATypeExpr<DbView> {
  return {value : {typeRef : {kind: "reference", value : snDbView}, parameters : []}};
}

/**
 * Field level annotation to override the name of the
 * database column.
 */
export type DbColumnName = string;

const DbColumnName_AST : ADL.ScopedDecl =
  {"moduleName":"common.db","decl":{"annotations":[{"value":"Field level annotation to override the name of the\ndatabase column.\n","key":{"moduleName":"sys.annotations","name":"Doc"}}],"type_":{"kind":"type_","value":{"typeParams":[],"typeExpr":{"typeRef":{"kind":"primitive","value":"String"},"parameters":[]}}},"name":"DbColumnName","version":{"kind":"nothing"}}};

export const snDbColumnName: ADL.ScopedName = {moduleName:"common.db", name:"DbColumnName"};

export function texprDbColumnName(): ADL.ATypeExpr<DbColumnName> {
  return {value : {typeRef : {kind: "reference", value : snDbColumnName}, parameters : []}};
}

/**
 * Field or type level annotation to override the type of the
 * database column.
 */
export type DbColumnType = string;

const DbColumnType_AST : ADL.ScopedDecl =
  {"moduleName":"common.db","decl":{"annotations":[{"value":"Field or type level annotation to override the type of the\ndatabase column.\n","key":{"moduleName":"sys.annotations","name":"Doc"}}],"type_":{"kind":"type_","value":{"typeParams":[],"typeExpr":{"typeRef":{"kind":"primitive","value":"String"},"parameters":[]}}},"name":"DbColumnType","version":{"kind":"nothing"}}};

export const snDbColumnType: ADL.ScopedName = {moduleName:"common.db", name:"DbColumnType"};

export function texprDbColumnType(): ADL.ATypeExpr<DbColumnType> {
  return {value : {typeRef : {kind: "reference", value : snDbColumnType}, parameters : []}};
}

/**
 * Field level annotation to indicate that that the fields
 * contained in this field should be lifted up to the current
 * table.
 */
export type DbSpread = null;

const DbSpread_AST : ADL.ScopedDecl =
  {"moduleName":"common.db","decl":{"annotations":[{"value":"Field level annotation to indicate that that the fields\ncontained in this field should be lifted up to the current\ntable.\n","key":{"moduleName":"sys.annotations","name":"Doc"}}],"type_":{"kind":"type_","value":{"typeParams":[],"typeExpr":{"typeRef":{"kind":"primitive","value":"Void"},"parameters":[]}}},"name":"DbSpread","version":{"kind":"nothing"}}};

export const snDbSpread: ADL.ScopedName = {moduleName:"common.db", name:"DbSpread"};

export function texprDbSpread(): ADL.ATypeExpr<DbSpread> {
  return {value : {typeRef : {kind: "reference", value : snDbSpread}, parameters : []}};
}

/**
 * Field level annotation to indicate that that field
 * is part of the primary key
 */
export type DbPrimaryKey = null;

const DbPrimaryKey_AST : ADL.ScopedDecl =
  {"moduleName":"common.db","decl":{"annotations":[{"value":"Field level annotation to indicate that that field\nis part of the primary key\n","key":{"moduleName":"sys.annotations","name":"Doc"}}],"type_":{"kind":"type_","value":{"typeParams":[],"typeExpr":{"typeRef":{"kind":"primitive","value":"Void"},"parameters":[]}}},"name":"DbPrimaryKey","version":{"kind":"nothing"}}};

export const snDbPrimaryKey: ADL.ScopedName = {moduleName:"common.db", name:"DbPrimaryKey"};

export function texprDbPrimaryKey(): ADL.ATypeExpr<DbPrimaryKey> {
  return {value : {typeRef : {kind: "reference", value : snDbPrimaryKey}, parameters : []}};
}

/**
 * A reference for a database stored value, referenced by a
 * string primary key.
 */
export type DbKey<_T> = string;

const DbKey_AST : ADL.ScopedDecl =
  {"moduleName":"common.db","decl":{"annotations":[{"value":"A reference for a database stored value, referenced by a\nstring primary key.\n","key":{"moduleName":"sys.annotations","name":"Doc"}}],"type_":{"kind":"newtype_","value":{"typeParams":["T"],"default":{"kind":"nothing"},"typeExpr":{"typeRef":{"kind":"primitive","value":"String"},"parameters":[]}}},"name":"DbKey","version":{"kind":"nothing"}}};

export const snDbKey: ADL.ScopedName = {moduleName:"common.db", name:"DbKey"};

export function texprDbKey<T>(texprT : ADL.ATypeExpr<T>): ADL.ATypeExpr<DbKey<T>> {
  return {value : {typeRef : {kind: "reference", value : {moduleName : "common.db",name : "DbKey"}}, parameters : [texprT.value]}};
}

/**
 * Extent a datatype for use as a database table, giving it a
 * primary key
 */
export interface WithId<T> {
  id: string;
  value: T;
}

export function makeWithId<T>(
  input: {
    id: string,
    value: T,
  }
): WithId<T> {
  return {
    id: input.id,
    value: input.value,
  };
}

const WithId_AST : ADL.ScopedDecl =
  {"moduleName":"common.db","decl":{"annotations":[{"value":"Extent a datatype for use as a database table, giving it a\nprimary key\n","key":{"moduleName":"sys.annotations","name":"Doc"}}],"type_":{"kind":"struct_","value":{"typeParams":["T"],"fields":[{"annotations":[{"value":null,"key":{"moduleName":"common.db","name":"DbPrimaryKey"}}],"serializedName":"id","default":{"kind":"nothing"},"name":"id","typeExpr":{"typeRef":{"kind":"primitive","value":"String"},"parameters":[]}},{"annotations":[{"value":null,"key":{"moduleName":"common.db","name":"DbSpread"}}],"serializedName":"value","default":{"kind":"nothing"},"name":"value","typeExpr":{"typeRef":{"kind":"typeParam","value":"T"},"parameters":[]}}]}},"name":"WithId","version":{"kind":"nothing"}}};

export const snWithId: ADL.ScopedName = {moduleName:"common.db", name:"WithId"};

export function texprWithId<T>(texprT : ADL.ATypeExpr<T>): ADL.ATypeExpr<WithId<T>> {
  return {value : {typeRef : {kind: "reference", value : {moduleName : "common.db",name : "WithId"}}, parameters : [texprT.value]}};
}

export const _AST_MAP: { [key: string]: ADL.ScopedDecl } = {
  "common.db.DbTable" : DbTable_AST,
  "common.db.DbView" : DbView_AST,
  "common.db.DbColumnName" : DbColumnName_AST,
  "common.db.DbColumnType" : DbColumnType_AST,
  "common.db.DbSpread" : DbSpread_AST,
  "common.db.DbPrimaryKey" : DbPrimaryKey_AST,
  "common.db.DbKey" : DbKey_AST,
  "common.db.WithId" : WithId_AST
};
