/* @generated from adl module common.http */

import * as ADL from './../runtime/adl';

/**
 * Request types
 */
export interface HttpGet<O> {
  path: string;
  security: HttpSecurity;
  rateLimit: (HttpRateLimit|null);
  respType: ADL.ATypeExpr<O>;
}

const HttpGet_AST : ADL.ScopedDecl =
  {"moduleName":"common.http","decl":{"annotations":[{"value":"Request types\n","key":{"moduleName":"sys.annotations","name":"Doc"}}],"type_":{"kind":"struct_","value":{"typeParams":["O"],"fields":[{"annotations":[],"serializedName":"path","default":{"kind":"nothing"},"name":"path","typeExpr":{"typeRef":{"kind":"primitive","value":"String"},"parameters":[]}},{"annotations":[],"serializedName":"security","default":{"kind":"nothing"},"name":"security","typeExpr":{"typeRef":{"kind":"reference","value":{"moduleName":"common.http","name":"HttpSecurity"}},"parameters":[]}},{"annotations":[],"serializedName":"rateLimit","default":{"kind":"just","value":null},"name":"rateLimit","typeExpr":{"typeRef":{"kind":"primitive","value":"Nullable"},"parameters":[{"typeRef":{"kind":"reference","value":{"moduleName":"common.http","name":"HttpRateLimit"}},"parameters":[]}]}},{"annotations":[],"serializedName":"respType","default":{"kind":"just","value":null},"name":"respType","typeExpr":{"typeRef":{"kind":"primitive","value":"TypeToken"},"parameters":[{"typeRef":{"kind":"typeParam","value":"O"},"parameters":[]}]}}]}},"name":"HttpGet","version":{"kind":"nothing"}}};

export const snHttpGet: ADL.ScopedName = {moduleName:"common.http", name:"HttpGet"};

export function texprHttpGet<O>(texprO : ADL.ATypeExpr<O>): ADL.ATypeExpr<HttpGet<O>> {
  return {value : {typeRef : {kind: "reference", value : {moduleName : "common.http",name : "HttpGet"}}, parameters : [texprO.value]}};
}

export interface HttpPut<I, O> {
  path: string;
  security: HttpSecurity;
  rateLimit: (HttpRateLimit|null);
  reqType: ADL.ATypeExpr<I>;
  respType: ADL.ATypeExpr<O>;
}

const HttpPut_AST : ADL.ScopedDecl =
  {"moduleName":"common.http","decl":{"annotations":[],"type_":{"kind":"struct_","value":{"typeParams":["I","O"],"fields":[{"annotations":[],"serializedName":"path","default":{"kind":"nothing"},"name":"path","typeExpr":{"typeRef":{"kind":"primitive","value":"String"},"parameters":[]}},{"annotations":[],"serializedName":"security","default":{"kind":"nothing"},"name":"security","typeExpr":{"typeRef":{"kind":"reference","value":{"moduleName":"common.http","name":"HttpSecurity"}},"parameters":[]}},{"annotations":[],"serializedName":"rateLimit","default":{"kind":"just","value":null},"name":"rateLimit","typeExpr":{"typeRef":{"kind":"primitive","value":"Nullable"},"parameters":[{"typeRef":{"kind":"reference","value":{"moduleName":"common.http","name":"HttpRateLimit"}},"parameters":[]}]}},{"annotations":[],"serializedName":"reqType","default":{"kind":"just","value":null},"name":"reqType","typeExpr":{"typeRef":{"kind":"primitive","value":"TypeToken"},"parameters":[{"typeRef":{"kind":"typeParam","value":"I"},"parameters":[]}]}},{"annotations":[],"serializedName":"respType","default":{"kind":"just","value":null},"name":"respType","typeExpr":{"typeRef":{"kind":"primitive","value":"TypeToken"},"parameters":[{"typeRef":{"kind":"typeParam","value":"O"},"parameters":[]}]}}]}},"name":"HttpPut","version":{"kind":"nothing"}}};

export const snHttpPut: ADL.ScopedName = {moduleName:"common.http", name:"HttpPut"};

export function texprHttpPut<I, O>(texprI : ADL.ATypeExpr<I>, texprO : ADL.ATypeExpr<O>): ADL.ATypeExpr<HttpPut<I, O>> {
  return {value : {typeRef : {kind: "reference", value : {moduleName : "common.http",name : "HttpPut"}}, parameters : [texprI.value, texprO.value]}};
}

export interface HttpPost<I, O> {
  path: string;
  security: HttpSecurity;
  rateLimit: (HttpRateLimit|null);
  reqType: ADL.ATypeExpr<I>;
  respType: ADL.ATypeExpr<O>;
}

const HttpPost_AST : ADL.ScopedDecl =
  {"moduleName":"common.http","decl":{"annotations":[],"type_":{"kind":"struct_","value":{"typeParams":["I","O"],"fields":[{"annotations":[],"serializedName":"path","default":{"kind":"nothing"},"name":"path","typeExpr":{"typeRef":{"kind":"primitive","value":"String"},"parameters":[]}},{"annotations":[],"serializedName":"security","default":{"kind":"nothing"},"name":"security","typeExpr":{"typeRef":{"kind":"reference","value":{"moduleName":"common.http","name":"HttpSecurity"}},"parameters":[]}},{"annotations":[],"serializedName":"rateLimit","default":{"kind":"just","value":null},"name":"rateLimit","typeExpr":{"typeRef":{"kind":"primitive","value":"Nullable"},"parameters":[{"typeRef":{"kind":"reference","value":{"moduleName":"common.http","name":"HttpRateLimit"}},"parameters":[]}]}},{"annotations":[],"serializedName":"reqType","default":{"kind":"just","value":null},"name":"reqType","typeExpr":{"typeRef":{"kind":"primitive","value":"TypeToken"},"parameters":[{"typeRef":{"kind":"typeParam","value":"I"},"parameters":[]}]}},{"annotations":[],"serializedName":"respType","default":{"kind":"just","value":null},"name":"respType","typeExpr":{"typeRef":{"kind":"primitive","value":"TypeToken"},"parameters":[{"typeRef":{"kind":"typeParam","value":"O"},"parameters":[]}]}}]}},"name":"HttpPost","version":{"kind":"nothing"}}};

export const snHttpPost: ADL.ScopedName = {moduleName:"common.http", name:"HttpPost"};

export function texprHttpPost<I, O>(texprI : ADL.ATypeExpr<I>, texprO : ADL.ATypeExpr<O>): ADL.ATypeExpr<HttpPost<I, O>> {
  return {value : {typeRef : {kind: "reference", value : {moduleName : "common.http",name : "HttpPost"}}, parameters : [texprI.value, texprO.value]}};
}

export interface HttpDelete<P, O> {
  path: string;
  security: HttpSecurity;
  paramsType: ADL.ATypeExpr<P>;
  respType: ADL.ATypeExpr<O>;
}

const HttpDelete_AST : ADL.ScopedDecl =
  {"moduleName":"common.http","decl":{"annotations":[],"type_":{"kind":"struct_","value":{"typeParams":["P","O"],"fields":[{"annotations":[],"serializedName":"path","default":{"kind":"nothing"},"name":"path","typeExpr":{"typeRef":{"kind":"primitive","value":"String"},"parameters":[]}},{"annotations":[],"serializedName":"security","default":{"kind":"nothing"},"name":"security","typeExpr":{"typeRef":{"kind":"reference","value":{"moduleName":"common.http","name":"HttpSecurity"}},"parameters":[]}},{"annotations":[],"serializedName":"paramsType","default":{"kind":"just","value":null},"name":"paramsType","typeExpr":{"typeRef":{"kind":"primitive","value":"TypeToken"},"parameters":[{"typeRef":{"kind":"typeParam","value":"P"},"parameters":[]}]}},{"annotations":[],"serializedName":"respType","default":{"kind":"just","value":null},"name":"respType","typeExpr":{"typeRef":{"kind":"primitive","value":"TypeToken"},"parameters":[{"typeRef":{"kind":"typeParam","value":"O"},"parameters":[]}]}}]}},"name":"HttpDelete","version":{"kind":"nothing"}}};

export const snHttpDelete: ADL.ScopedName = {moduleName:"common.http", name:"HttpDelete"};

export function texprHttpDelete<P, O>(texprP : ADL.ATypeExpr<P>, texprO : ADL.ATypeExpr<O>): ADL.ATypeExpr<HttpDelete<P, O>> {
  return {value : {typeRef : {kind: "reference", value : {moduleName : "common.http",name : "HttpDelete"}}, parameters : [texprP.value, texprO.value]}};
}

export interface HttpSecurity_Public {
  kind: 'public';
}
export interface HttpSecurity_Token {
  kind: 'token';
}
export interface HttpSecurity_TokenWithRole {
  kind: 'tokenWithRole';
  value: string;
}

export type HttpSecurity = HttpSecurity_Public | HttpSecurity_Token | HttpSecurity_TokenWithRole;

export interface HttpSecurityOpts {
  public: null;
  token: null;
  tokenWithRole: string;
}

export function makeHttpSecurity<K extends keyof HttpSecurityOpts>(kind: K, value: HttpSecurityOpts[K]) { return {kind, value}; }

const HttpSecurity_AST : ADL.ScopedDecl =
  {"moduleName":"common.http","decl":{"annotations":[],"type_":{"kind":"union_","value":{"typeParams":[],"fields":[{"annotations":[],"serializedName":"public","default":{"kind":"nothing"},"name":"public","typeExpr":{"typeRef":{"kind":"primitive","value":"Void"},"parameters":[]}},{"annotations":[],"serializedName":"token","default":{"kind":"nothing"},"name":"token","typeExpr":{"typeRef":{"kind":"primitive","value":"Void"},"parameters":[]}},{"annotations":[],"serializedName":"tokenWithRole","default":{"kind":"nothing"},"name":"tokenWithRole","typeExpr":{"typeRef":{"kind":"primitive","value":"String"},"parameters":[]}}]}},"name":"HttpSecurity","version":{"kind":"nothing"}}};

export const snHttpSecurity: ADL.ScopedName = {moduleName:"common.http", name:"HttpSecurity"};

export function texprHttpSecurity(): ADL.ATypeExpr<HttpSecurity> {
  return {value : {typeRef : {kind: "reference", value : snHttpSecurity}, parameters : []}};
}

export interface HttpRateLimit {
  maxRequests: number;
  perTimeUnit: RateLimitTimeUnit;
}

export function makeHttpRateLimit(
  input: {
    maxRequests: number,
    perTimeUnit: RateLimitTimeUnit,
  }
): HttpRateLimit {
  return {
    maxRequests: input.maxRequests,
    perTimeUnit: input.perTimeUnit,
  };
}

const HttpRateLimit_AST : ADL.ScopedDecl =
  {"moduleName":"common.http","decl":{"annotations":[],"type_":{"kind":"struct_","value":{"typeParams":[],"fields":[{"annotations":[],"serializedName":"maxRequests","default":{"kind":"nothing"},"name":"maxRequests","typeExpr":{"typeRef":{"kind":"primitive","value":"Word32"},"parameters":[]}},{"annotations":[],"serializedName":"perTimeUnit","default":{"kind":"nothing"},"name":"perTimeUnit","typeExpr":{"typeRef":{"kind":"reference","value":{"moduleName":"common.http","name":"RateLimitTimeUnit"}},"parameters":[]}}]}},"name":"HttpRateLimit","version":{"kind":"nothing"}}};

export const snHttpRateLimit: ADL.ScopedName = {moduleName:"common.http", name:"HttpRateLimit"};

export function texprHttpRateLimit(): ADL.ATypeExpr<HttpRateLimit> {
  return {value : {typeRef : {kind: "reference", value : snHttpRateLimit}, parameters : []}};
}

export type RateLimitTimeUnit = 'second' | 'minute' | 'hour';
export const valuesRateLimitTimeUnit : RateLimitTimeUnit[] = ['second', 'minute', 'hour'];

const RateLimitTimeUnit_AST : ADL.ScopedDecl =
  {"moduleName":"common.http","decl":{"annotations":[],"type_":{"kind":"union_","value":{"typeParams":[],"fields":[{"annotations":[],"serializedName":"second","default":{"kind":"nothing"},"name":"second","typeExpr":{"typeRef":{"kind":"primitive","value":"Void"},"parameters":[]}},{"annotations":[],"serializedName":"minute","default":{"kind":"nothing"},"name":"minute","typeExpr":{"typeRef":{"kind":"primitive","value":"Void"},"parameters":[]}},{"annotations":[],"serializedName":"hour","default":{"kind":"nothing"},"name":"hour","typeExpr":{"typeRef":{"kind":"primitive","value":"Void"},"parameters":[]}}]}},"name":"RateLimitTimeUnit","version":{"kind":"nothing"}}};

export const snRateLimitTimeUnit: ADL.ScopedName = {moduleName:"common.http", name:"RateLimitTimeUnit"};

export function texprRateLimitTimeUnit(): ADL.ATypeExpr<RateLimitTimeUnit> {
  return {value : {typeRef : {kind: "reference", value : snRateLimitTimeUnit}, parameters : []}};
}

/**
 * Empty Struct (Used mostly for Void RPC responses)
 */
export interface Unit {
}

export function makeUnit(
  _input: {
  }
): Unit {
  return {
  };
}

const Unit_AST : ADL.ScopedDecl =
  {"moduleName":"common.http","decl":{"annotations":[{"value":"Empty Struct (Used mostly for Void RPC responses)\n","key":{"moduleName":"sys.annotations","name":"Doc"}}],"type_":{"kind":"struct_","value":{"typeParams":[],"fields":[]}},"name":"Unit","version":{"kind":"nothing"}}};

export const snUnit: ADL.ScopedName = {moduleName:"common.http", name:"Unit"};

export function texprUnit(): ADL.ATypeExpr<Unit> {
  return {value : {typeRef : {kind: "reference", value : snUnit}, parameters : []}};
}

export const _AST_MAP: { [key: string]: ADL.ScopedDecl } = {
  "common.http.HttpGet" : HttpGet_AST,
  "common.http.HttpPut" : HttpPut_AST,
  "common.http.HttpPost" : HttpPost_AST,
  "common.http.HttpDelete" : HttpDelete_AST,
  "common.http.HttpSecurity" : HttpSecurity_AST,
  "common.http.HttpRateLimit" : HttpRateLimit_AST,
  "common.http.RateLimitTimeUnit" : RateLimitTimeUnit_AST,
  "common.http.Unit" : Unit_AST
};
