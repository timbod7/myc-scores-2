/* @generated from adl module mycscores.apis.ui */

import * as ADL from '@adllang/adl-runtime';
import * as common_db_api from './../../common/db_api';
import * as common_http from './../../common/http';
import * as common_strings from './../../common/strings';
import * as common_time from './../../common/time';
import * as mycscores_db from './../db';

export interface ApiRequests {
  /**
   * AWS default compatible health check
   */
  healthy: common_http.HttpReq<null, null>;
  /**
   * Login a user
   * The response will set an httpOnly cookie containing the refresh token
   */
  login: common_http.HttpReq<LoginReq, LoginResp>;
  /**
   * Get a refreshed access token
   * If the refresh token is not provided in the request body, then it will
   * be read from the refrestToken cookie in the request.
   */
  refresh: common_http.HttpReq<RefreshReq, RefreshResp>;
  /**
   * Clear the `refreshToken` cookie.
   */
  logout: common_http.HttpReq<common_http.Unit, common_http.Unit>;
  /**
   * Gets info about the logged in user
   */
  who_am_i: common_http.HttpReq<null, UserWithId>;
  seasons: common_http.HttpReq<null, SeasonDetails[]>;
  raceSchedule: common_http.HttpReq<mycscores_db.SeasonId, RaceScheduleResp>;
  /**
   * Fetch the entrants for a race
   */
  getRaceEntrants: common_http.HttpReq<mycscores_db.RaceId, RaceEntrant[]>;
  /**
   * Fetch the results for a race
   */
  getRaceResults: common_http.HttpReq<mycscores_db.RaceId, GetRaceResultsResp>;
  /**
   * Set/update the results for a race
   */
  updateRaceResults: common_http.HttpReq<UpdateRaceResultsReq, common_http.Unit>;
  /**
   * Fetch results for an event
   */
  getEventResults: common_http.HttpReq<mycscores_db.EventId, GetEventResultsResp>;
  /**
   * Fetch results for all events in a season
   */
  getSeasonEventResults: common_http.HttpReq<mycscores_db.SeasonId, EventResults[]>;
  /**
   * Fetch results for a series
   */
  getSeriesResults: common_http.HttpReq<mycscores_db.SeriesId, GetSeriesResultsResp>;
  /**
   * Create a new user
   */
  create_user: common_http.HttpReq<UserDetails, mycscores_db.AppUserId>;
  /**
   * Update a user
   */
  update_user: common_http.HttpReq<WithId<mycscores_db.AppUserId, UserDetails>, common_http.Unit>;
  /**
   * Query users
   */
  query_users: common_http.HttpReq<UserQueryReq, common_db_api.Paginated<UserWithId>>;
}

export function makeApiRequests(
  input: {
    healthy?: common_http.HttpReq<null, null>,
    login?: common_http.HttpReq<LoginReq, LoginResp>,
    refresh?: common_http.HttpReq<RefreshReq, RefreshResp>,
    logout?: common_http.HttpReq<common_http.Unit, common_http.Unit>,
    who_am_i?: common_http.HttpReq<null, UserWithId>,
    seasons?: common_http.HttpReq<null, SeasonDetails[]>,
    raceSchedule?: common_http.HttpReq<mycscores_db.SeasonId, RaceScheduleResp>,
    getRaceEntrants?: common_http.HttpReq<mycscores_db.RaceId, RaceEntrant[]>,
    getRaceResults?: common_http.HttpReq<mycscores_db.RaceId, GetRaceResultsResp>,
    updateRaceResults?: common_http.HttpReq<UpdateRaceResultsReq, common_http.Unit>,
    getEventResults?: common_http.HttpReq<mycscores_db.EventId, GetEventResultsResp>,
    getSeasonEventResults?: common_http.HttpReq<mycscores_db.SeasonId, EventResults[]>,
    getSeriesResults?: common_http.HttpReq<mycscores_db.SeriesId, GetSeriesResultsResp>,
    create_user?: common_http.HttpReq<UserDetails, mycscores_db.AppUserId>,
    update_user?: common_http.HttpReq<WithId<mycscores_db.AppUserId, UserDetails>, common_http.Unit>,
    query_users?: common_http.HttpReq<UserQueryReq, common_db_api.Paginated<UserWithId>>,
  }
): ApiRequests {
  return {
    healthy: input.healthy === undefined ? {method : "get", path : "/", security : {kind : "public"}, reqType : ADL.texprVoid(), respType : ADL.texprVoid()} : input.healthy,
    login: input.login === undefined ? {method : "post", path : "/login", security : {kind : "public"}, reqType : texprLoginReq(), respType : texprLoginResp()} : input.login,
    refresh: input.refresh === undefined ? {method : "post", path : "/refresh", security : {kind : "public"}, reqType : texprRefreshReq(), respType : texprRefreshResp()} : input.refresh,
    logout: input.logout === undefined ? {method : "post", path : "/logout", security : {kind : "public"}, reqType : common_http.texprUnit(), respType : common_http.texprUnit()} : input.logout,
    who_am_i: input.who_am_i === undefined ? {method : "get", path : "/whoami", security : {kind : "token"}, reqType : ADL.texprVoid(), respType : texprUserWithId()} : input.who_am_i,
    seasons: input.seasons === undefined ? {method : "post", path : "/seasons", security : {kind : "public"}, reqType : ADL.texprVoid(), respType : ADL.texprVector(texprSeasonDetails())} : input.seasons,
    raceSchedule: input.raceSchedule === undefined ? {method : "post", path : "/race-schedule", security : {kind : "public"}, reqType : mycscores_db.texprSeasonId(), respType : texprRaceScheduleResp()} : input.raceSchedule,
    getRaceEntrants: input.getRaceEntrants === undefined ? {method : "post", path : "/raceentrants-get", security : {kind : "public"}, reqType : mycscores_db.texprRaceId(), respType : ADL.texprVector(texprRaceEntrant())} : input.getRaceEntrants,
    getRaceResults: input.getRaceResults === undefined ? {method : "post", path : "/results/race", security : {kind : "public"}, reqType : mycscores_db.texprRaceId(), respType : texprGetRaceResultsResp()} : input.getRaceResults,
    updateRaceResults: input.updateRaceResults === undefined ? {method : "post", path : "/results/race/update", security : {kind : "token"}, reqType : texprUpdateRaceResultsReq(), respType : common_http.texprUnit()} : input.updateRaceResults,
    getEventResults: input.getEventResults === undefined ? {method : "post", path : "/results/event", security : {kind : "public"}, reqType : mycscores_db.texprEventId(), respType : texprGetEventResultsResp()} : input.getEventResults,
    getSeasonEventResults: input.getSeasonEventResults === undefined ? {method : "post", path : "/results/season-events", security : {kind : "public"}, reqType : mycscores_db.texprSeasonId(), respType : ADL.texprVector(texprEventResults())} : input.getSeasonEventResults,
    getSeriesResults: input.getSeriesResults === undefined ? {method : "post", path : "/results/series", security : {kind : "public"}, reqType : mycscores_db.texprSeriesId(), respType : texprGetSeriesResultsResp()} : input.getSeriesResults,
    create_user: input.create_user === undefined ? {method : "post", path : "/users/create", security : {kind : "tokenWithRole", value : "admin"}, reqType : texprUserDetails(), respType : mycscores_db.texprAppUserId()} : input.create_user,
    update_user: input.update_user === undefined ? {method : "post", path : "/users/update", security : {kind : "tokenWithRole", value : "admin"}, reqType : texprWithId(mycscores_db.texprAppUserId(), texprUserDetails()), respType : common_http.texprUnit()} : input.update_user,
    query_users: input.query_users === undefined ? {method : "get", path : "/users/query", security : {kind : "tokenWithRole", value : "admin"}, reqType : texprUserQueryReq(), respType : common_db_api.texprPaginated(texprUserWithId())} : input.query_users,
  };
}

const ApiRequests_AST : ADL.ScopedDecl =
  {"decl":{"annotations":[],"name":"ApiRequests","type_":{"kind":"struct_","value":{"fields":[{"annotations":[{"key":{"moduleName":"sys.annotations","name":"Doc"},"value":"AWS default compatible health check\n"}],"default":{"kind":"just","value":{"method":"get","path":"/","security":"public"}},"name":"healthy","serializedName":"healthy","typeExpr":{"parameters":[{"parameters":[],"typeRef":{"kind":"primitive","value":"Void"}},{"parameters":[],"typeRef":{"kind":"primitive","value":"Void"}}],"typeRef":{"kind":"reference","value":{"moduleName":"common.http","name":"HttpReq"}}}},{"annotations":[{"key":{"moduleName":"sys.annotations","name":"Doc"},"value":"Login a user\n\nThe response will set an httpOnly cookie containing the refresh token\n"}],"default":{"kind":"just","value":{"path":"/login","security":"public"}},"name":"login","serializedName":"login","typeExpr":{"parameters":[{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"mycscores.apis.ui","name":"LoginReq"}}},{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"mycscores.apis.ui","name":"LoginResp"}}}],"typeRef":{"kind":"reference","value":{"moduleName":"common.http","name":"HttpReq"}}}},{"annotations":[{"key":{"moduleName":"sys.annotations","name":"Doc"},"value":"Get a refreshed access token\n\nIf the refresh token is not provided in the request body, then it will\nbe read from the refrestToken cookie in the request.\n"}],"default":{"kind":"just","value":{"path":"/refresh","security":"public"}},"name":"refresh","serializedName":"refresh","typeExpr":{"parameters":[{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"mycscores.apis.ui","name":"RefreshReq"}}},{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"mycscores.apis.ui","name":"RefreshResp"}}}],"typeRef":{"kind":"reference","value":{"moduleName":"common.http","name":"HttpReq"}}}},{"annotations":[{"key":{"moduleName":"sys.annotations","name":"Doc"},"value":"Clear the `refreshToken` cookie.\n"}],"default":{"kind":"just","value":{"path":"/logout","security":"public"}},"name":"logout","serializedName":"logout","typeExpr":{"parameters":[{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"common.http","name":"Unit"}}},{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"common.http","name":"Unit"}}}],"typeRef":{"kind":"reference","value":{"moduleName":"common.http","name":"HttpReq"}}}},{"annotations":[{"key":{"moduleName":"sys.annotations","name":"Doc"},"value":"Gets info about the logged in user\n"}],"default":{"kind":"just","value":{"method":"get","path":"/whoami","security":"token"}},"name":"who_am_i","serializedName":"who_am_i","typeExpr":{"parameters":[{"parameters":[],"typeRef":{"kind":"primitive","value":"Void"}},{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"mycscores.apis.ui","name":"UserWithId"}}}],"typeRef":{"kind":"reference","value":{"moduleName":"common.http","name":"HttpReq"}}}},{"annotations":[],"default":{"kind":"just","value":{"path":"/seasons","security":"public"}},"name":"seasons","serializedName":"seasons","typeExpr":{"parameters":[{"parameters":[],"typeRef":{"kind":"primitive","value":"Void"}},{"parameters":[{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"mycscores.apis.ui","name":"SeasonDetails"}}}],"typeRef":{"kind":"primitive","value":"Vector"}}],"typeRef":{"kind":"reference","value":{"moduleName":"common.http","name":"HttpReq"}}}},{"annotations":[],"default":{"kind":"just","value":{"path":"/race-schedule","security":"public"}},"name":"raceSchedule","serializedName":"raceSchedule","typeExpr":{"parameters":[{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"mycscores.db","name":"SeasonId"}}},{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"mycscores.apis.ui","name":"RaceScheduleResp"}}}],"typeRef":{"kind":"reference","value":{"moduleName":"common.http","name":"HttpReq"}}}},{"annotations":[{"key":{"moduleName":"sys.annotations","name":"Doc"},"value":"Fetch the entrants for a race\n"}],"default":{"kind":"just","value":{"path":"/raceentrants-get","security":"public"}},"name":"getRaceEntrants","serializedName":"getRaceEntrants","typeExpr":{"parameters":[{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"mycscores.db","name":"RaceId"}}},{"parameters":[{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"mycscores.apis.ui","name":"RaceEntrant"}}}],"typeRef":{"kind":"primitive","value":"Vector"}}],"typeRef":{"kind":"reference","value":{"moduleName":"common.http","name":"HttpReq"}}}},{"annotations":[{"key":{"moduleName":"sys.annotations","name":"Doc"},"value":"Fetch the results for a race\n"}],"default":{"kind":"just","value":{"path":"/results/race","security":"public"}},"name":"getRaceResults","serializedName":"getRaceResults","typeExpr":{"parameters":[{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"mycscores.db","name":"RaceId"}}},{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"mycscores.apis.ui","name":"GetRaceResultsResp"}}}],"typeRef":{"kind":"reference","value":{"moduleName":"common.http","name":"HttpReq"}}}},{"annotations":[{"key":{"moduleName":"sys.annotations","name":"Doc"},"value":"Set/update the results for a race\n"}],"default":{"kind":"just","value":{"path":"/results/race/update","security":"token"}},"name":"updateRaceResults","serializedName":"updateRaceResults","typeExpr":{"parameters":[{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"mycscores.apis.ui","name":"UpdateRaceResultsReq"}}},{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"common.http","name":"Unit"}}}],"typeRef":{"kind":"reference","value":{"moduleName":"common.http","name":"HttpReq"}}}},{"annotations":[{"key":{"moduleName":"sys.annotations","name":"Doc"},"value":"Fetch results for an event\n"}],"default":{"kind":"just","value":{"path":"/results/event","security":"public"}},"name":"getEventResults","serializedName":"getEventResults","typeExpr":{"parameters":[{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"mycscores.db","name":"EventId"}}},{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"mycscores.apis.ui","name":"GetEventResultsResp"}}}],"typeRef":{"kind":"reference","value":{"moduleName":"common.http","name":"HttpReq"}}}},{"annotations":[{"key":{"moduleName":"sys.annotations","name":"Doc"},"value":"Fetch results for all events in a season\n"}],"default":{"kind":"just","value":{"path":"/results/season-events","security":"public"}},"name":"getSeasonEventResults","serializedName":"getSeasonEventResults","typeExpr":{"parameters":[{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"mycscores.db","name":"SeasonId"}}},{"parameters":[{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"mycscores.apis.ui","name":"EventResults"}}}],"typeRef":{"kind":"primitive","value":"Vector"}}],"typeRef":{"kind":"reference","value":{"moduleName":"common.http","name":"HttpReq"}}}},{"annotations":[{"key":{"moduleName":"sys.annotations","name":"Doc"},"value":"Fetch results for a series\n"}],"default":{"kind":"just","value":{"path":"/results/series","security":"public"}},"name":"getSeriesResults","serializedName":"getSeriesResults","typeExpr":{"parameters":[{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"mycscores.db","name":"SeriesId"}}},{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"mycscores.apis.ui","name":"GetSeriesResultsResp"}}}],"typeRef":{"kind":"reference","value":{"moduleName":"common.http","name":"HttpReq"}}}},{"annotations":[{"key":{"moduleName":"sys.annotations","name":"Doc"},"value":"Create a new user\n"}],"default":{"kind":"just","value":{"path":"/users/create","security":{"tokenWithRole":"admin"}}},"name":"create_user","serializedName":"create_user","typeExpr":{"parameters":[{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"mycscores.apis.ui","name":"UserDetails"}}},{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"mycscores.db","name":"AppUserId"}}}],"typeRef":{"kind":"reference","value":{"moduleName":"common.http","name":"HttpReq"}}}},{"annotations":[{"key":{"moduleName":"sys.annotations","name":"Doc"},"value":"Update a user\n"}],"default":{"kind":"just","value":{"path":"/users/update","security":{"tokenWithRole":"admin"}}},"name":"update_user","serializedName":"update_user","typeExpr":{"parameters":[{"parameters":[{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"mycscores.db","name":"AppUserId"}}},{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"mycscores.apis.ui","name":"UserDetails"}}}],"typeRef":{"kind":"reference","value":{"moduleName":"mycscores.apis.ui","name":"WithId"}}},{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"common.http","name":"Unit"}}}],"typeRef":{"kind":"reference","value":{"moduleName":"common.http","name":"HttpReq"}}}},{"annotations":[{"key":{"moduleName":"sys.annotations","name":"Doc"},"value":"Query users\n"}],"default":{"kind":"just","value":{"method":"get","path":"/users/query","security":{"tokenWithRole":"admin"}}},"name":"query_users","serializedName":"query_users","typeExpr":{"parameters":[{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"mycscores.apis.ui","name":"UserQueryReq"}}},{"parameters":[{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"mycscores.apis.ui","name":"UserWithId"}}}],"typeRef":{"kind":"reference","value":{"moduleName":"common.db_api","name":"Paginated"}}}],"typeRef":{"kind":"reference","value":{"moduleName":"common.http","name":"HttpReq"}}}}],"typeParams":[]}},"version":{"kind":"nothing"}},"moduleName":"mycscores.apis.ui"};

export const snApiRequests: ADL.ScopedName = {moduleName:"mycscores.apis.ui", name:"ApiRequests"};

export function texprApiRequests(): ADL.ATypeExpr<ApiRequests> {
  return {value : {typeRef : {kind: "reference", value : snApiRequests}, parameters : []}};
}

export interface LoginReq {
  email: common_strings.StringNE;
  password: common_strings.Password;
}

export function makeLoginReq(
  input: {
    email: common_strings.StringNE,
    password: common_strings.Password,
  }
): LoginReq {
  return {
    email: input.email,
    password: input.password,
  };
}

const LoginReq_AST : ADL.ScopedDecl =
  {"decl":{"annotations":[],"name":"LoginReq","type_":{"kind":"struct_","value":{"fields":[{"annotations":[],"default":{"kind":"nothing"},"name":"email","serializedName":"email","typeExpr":{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"common.strings","name":"StringNE"}}}},{"annotations":[],"default":{"kind":"nothing"},"name":"password","serializedName":"password","typeExpr":{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"common.strings","name":"Password"}}}}],"typeParams":[]}},"version":{"kind":"nothing"}},"moduleName":"mycscores.apis.ui"};

export const snLoginReq: ADL.ScopedName = {moduleName:"mycscores.apis.ui", name:"LoginReq"};

export function texprLoginReq(): ADL.ATypeExpr<LoginReq> {
  return {value : {typeRef : {kind: "reference", value : snLoginReq}, parameters : []}};
}

export interface LoginResp_Tokens {
  kind: 'tokens';
  value: LoginTokens;
}
export interface LoginResp_Invalid_credentials {
  kind: 'invalid_credentials';
}

export type LoginResp = LoginResp_Tokens | LoginResp_Invalid_credentials;

export interface LoginRespOpts {
  tokens: LoginTokens;
  invalid_credentials: null;
}

export function makeLoginResp<K extends keyof LoginRespOpts>(kind: K, value: LoginRespOpts[K]) { return {kind, value}; }

const LoginResp_AST : ADL.ScopedDecl =
  {"decl":{"annotations":[],"name":"LoginResp","type_":{"kind":"union_","value":{"fields":[{"annotations":[],"default":{"kind":"nothing"},"name":"tokens","serializedName":"tokens","typeExpr":{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"mycscores.apis.ui","name":"LoginTokens"}}}},{"annotations":[],"default":{"kind":"nothing"},"name":"invalid_credentials","serializedName":"invalid_credentials","typeExpr":{"parameters":[],"typeRef":{"kind":"primitive","value":"Void"}}}],"typeParams":[]}},"version":{"kind":"nothing"}},"moduleName":"mycscores.apis.ui"};

export const snLoginResp: ADL.ScopedName = {moduleName:"mycscores.apis.ui", name:"LoginResp"};

export function texprLoginResp(): ADL.ATypeExpr<LoginResp> {
  return {value : {typeRef : {kind: "reference", value : snLoginResp}, parameters : []}};
}

export interface RefreshReq {
  refresh_token: (common_strings.StringNE|null);
}

export function makeRefreshReq(
  input: {
    refresh_token?: (common_strings.StringNE|null),
  }
): RefreshReq {
  return {
    refresh_token: input.refresh_token === undefined ? null : input.refresh_token,
  };
}

const RefreshReq_AST : ADL.ScopedDecl =
  {"decl":{"annotations":[],"name":"RefreshReq","type_":{"kind":"struct_","value":{"fields":[{"annotations":[],"default":{"kind":"just","value":null},"name":"refresh_token","serializedName":"refresh_token","typeExpr":{"parameters":[{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"common.strings","name":"StringNE"}}}],"typeRef":{"kind":"primitive","value":"Nullable"}}}],"typeParams":[]}},"version":{"kind":"nothing"}},"moduleName":"mycscores.apis.ui"};

export const snRefreshReq: ADL.ScopedName = {moduleName:"mycscores.apis.ui", name:"RefreshReq"};

export function texprRefreshReq(): ADL.ATypeExpr<RefreshReq> {
  return {value : {typeRef : {kind: "reference", value : snRefreshReq}, parameters : []}};
}

export interface RefreshResp_Access_token {
  kind: 'access_token';
  value: common_strings.StringNE;
}
export interface RefreshResp_Invalid_refresh_token {
  kind: 'invalid_refresh_token';
}

export type RefreshResp = RefreshResp_Access_token | RefreshResp_Invalid_refresh_token;

export interface RefreshRespOpts {
  access_token: common_strings.StringNE;
  invalid_refresh_token: null;
}

export function makeRefreshResp<K extends keyof RefreshRespOpts>(kind: K, value: RefreshRespOpts[K]) { return {kind, value}; }

const RefreshResp_AST : ADL.ScopedDecl =
  {"decl":{"annotations":[],"name":"RefreshResp","type_":{"kind":"union_","value":{"fields":[{"annotations":[],"default":{"kind":"nothing"},"name":"access_token","serializedName":"access_token","typeExpr":{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"common.strings","name":"StringNE"}}}},{"annotations":[],"default":{"kind":"nothing"},"name":"invalid_refresh_token","serializedName":"invalid_refresh_token","typeExpr":{"parameters":[],"typeRef":{"kind":"primitive","value":"Void"}}}],"typeParams":[]}},"version":{"kind":"nothing"}},"moduleName":"mycscores.apis.ui"};

export const snRefreshResp: ADL.ScopedName = {moduleName:"mycscores.apis.ui", name:"RefreshResp"};

export function texprRefreshResp(): ADL.ATypeExpr<RefreshResp> {
  return {value : {typeRef : {kind: "reference", value : snRefreshResp}, parameters : []}};
}

export interface LoginTokens {
  access_jwt: common_strings.StringNE;
  refresh_jwt: common_strings.StringNE;
}

export function makeLoginTokens(
  input: {
    access_jwt: common_strings.StringNE,
    refresh_jwt: common_strings.StringNE,
  }
): LoginTokens {
  return {
    access_jwt: input.access_jwt,
    refresh_jwt: input.refresh_jwt,
  };
}

const LoginTokens_AST : ADL.ScopedDecl =
  {"decl":{"annotations":[],"name":"LoginTokens","type_":{"kind":"struct_","value":{"fields":[{"annotations":[],"default":{"kind":"nothing"},"name":"access_jwt","serializedName":"access_jwt","typeExpr":{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"common.strings","name":"StringNE"}}}},{"annotations":[],"default":{"kind":"nothing"},"name":"refresh_jwt","serializedName":"refresh_jwt","typeExpr":{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"common.strings","name":"StringNE"}}}}],"typeParams":[]}},"version":{"kind":"nothing"}},"moduleName":"mycscores.apis.ui"};

export const snLoginTokens: ADL.ScopedName = {moduleName:"mycscores.apis.ui", name:"LoginTokens"};

export function texprLoginTokens(): ADL.ATypeExpr<LoginTokens> {
  return {value : {typeRef : {kind: "reference", value : snLoginTokens}, parameters : []}};
}

export interface SeasonDetails {
  season: WithId<mycscores_db.SeasonId, mycscores_db.Season>;
  series: WithId<mycscores_db.SeriesId, mycscores_db.Series>[];
}

export function makeSeasonDetails(
  input: {
    season: WithId<mycscores_db.SeasonId, mycscores_db.Season>,
    series: WithId<mycscores_db.SeriesId, mycscores_db.Series>[],
  }
): SeasonDetails {
  return {
    season: input.season,
    series: input.series,
  };
}

const SeasonDetails_AST : ADL.ScopedDecl =
  {"decl":{"annotations":[],"name":"SeasonDetails","type_":{"kind":"struct_","value":{"fields":[{"annotations":[],"default":{"kind":"nothing"},"name":"season","serializedName":"season","typeExpr":{"parameters":[{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"mycscores.db","name":"SeasonId"}}},{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"mycscores.db","name":"Season"}}}],"typeRef":{"kind":"reference","value":{"moduleName":"mycscores.apis.ui","name":"WithId"}}}},{"annotations":[],"default":{"kind":"nothing"},"name":"series","serializedName":"series","typeExpr":{"parameters":[{"parameters":[{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"mycscores.db","name":"SeriesId"}}},{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"mycscores.db","name":"Series"}}}],"typeRef":{"kind":"reference","value":{"moduleName":"mycscores.apis.ui","name":"WithId"}}}],"typeRef":{"kind":"primitive","value":"Vector"}}}],"typeParams":[]}},"version":{"kind":"nothing"}},"moduleName":"mycscores.apis.ui"};

export const snSeasonDetails: ADL.ScopedName = {moduleName:"mycscores.apis.ui", name:"SeasonDetails"};

export function texprSeasonDetails(): ADL.ATypeExpr<SeasonDetails> {
  return {value : {typeRef : {kind: "reference", value : snSeasonDetails}, parameters : []}};
}

export interface RaceScheduleEntry {
  race_id: mycscores_db.RaceId;
  date: common_time.LocalDate;
  race_number: number;
  events: WithId<mycscores_db.EventId, mycscores_db.Event>[];
  duty_officer: string;
}

export function makeRaceScheduleEntry(
  input: {
    race_id: mycscores_db.RaceId,
    date: common_time.LocalDate,
    race_number: number,
    events: WithId<mycscores_db.EventId, mycscores_db.Event>[],
    duty_officer: string,
  }
): RaceScheduleEntry {
  return {
    race_id: input.race_id,
    date: input.date,
    race_number: input.race_number,
    events: input.events,
    duty_officer: input.duty_officer,
  };
}

const RaceScheduleEntry_AST : ADL.ScopedDecl =
  {"decl":{"annotations":[],"name":"RaceScheduleEntry","type_":{"kind":"struct_","value":{"fields":[{"annotations":[],"default":{"kind":"nothing"},"name":"race_id","serializedName":"race_id","typeExpr":{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"mycscores.db","name":"RaceId"}}}},{"annotations":[],"default":{"kind":"nothing"},"name":"date","serializedName":"date","typeExpr":{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"common.time","name":"LocalDate"}}}},{"annotations":[],"default":{"kind":"nothing"},"name":"race_number","serializedName":"race_number","typeExpr":{"parameters":[],"typeRef":{"kind":"primitive","value":"Word8"}}},{"annotations":[],"default":{"kind":"nothing"},"name":"events","serializedName":"events","typeExpr":{"parameters":[{"parameters":[{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"mycscores.db","name":"EventId"}}},{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"mycscores.db","name":"Event"}}}],"typeRef":{"kind":"reference","value":{"moduleName":"mycscores.apis.ui","name":"WithId"}}}],"typeRef":{"kind":"primitive","value":"Vector"}}},{"annotations":[],"default":{"kind":"nothing"},"name":"duty_officer","serializedName":"duty_officer","typeExpr":{"parameters":[],"typeRef":{"kind":"primitive","value":"String"}}}],"typeParams":[]}},"version":{"kind":"nothing"}},"moduleName":"mycscores.apis.ui"};

export const snRaceScheduleEntry: ADL.ScopedName = {moduleName:"mycscores.apis.ui", name:"RaceScheduleEntry"};

export function texprRaceScheduleEntry(): ADL.ATypeExpr<RaceScheduleEntry> {
  return {value : {typeRef : {kind: "reference", value : snRaceScheduleEntry}, parameters : []}};
}

export interface RaceEntrant {
  entrant: WithId<mycscores_db.EntrantId, mycscores_db.Entrant>;
  handicap: number;
  handicap_secs: number;
}

export function makeRaceEntrant(
  input: {
    entrant: WithId<mycscores_db.EntrantId, mycscores_db.Entrant>,
    handicap: number,
    handicap_secs: number,
  }
): RaceEntrant {
  return {
    entrant: input.entrant,
    handicap: input.handicap,
    handicap_secs: input.handicap_secs,
  };
}

const RaceEntrant_AST : ADL.ScopedDecl =
  {"decl":{"annotations":[],"name":"RaceEntrant","type_":{"kind":"struct_","value":{"fields":[{"annotations":[],"default":{"kind":"nothing"},"name":"entrant","serializedName":"entrant","typeExpr":{"parameters":[{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"mycscores.db","name":"EntrantId"}}},{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"mycscores.db","name":"Entrant"}}}],"typeRef":{"kind":"reference","value":{"moduleName":"mycscores.apis.ui","name":"WithId"}}}},{"annotations":[],"default":{"kind":"nothing"},"name":"handicap","serializedName":"handicap","typeExpr":{"parameters":[],"typeRef":{"kind":"primitive","value":"Double"}}},{"annotations":[],"default":{"kind":"nothing"},"name":"handicap_secs","serializedName":"handicap_secs","typeExpr":{"parameters":[],"typeRef":{"kind":"primitive","value":"Double"}}}],"typeParams":[]}},"version":{"kind":"nothing"}},"moduleName":"mycscores.apis.ui"};

export const snRaceEntrant: ADL.ScopedName = {moduleName:"mycscores.apis.ui", name:"RaceEntrant"};

export function texprRaceEntrant(): ADL.ATypeExpr<RaceEntrant> {
  return {value : {typeRef : {kind: "reference", value : snRaceEntrant}, parameters : []}};
}

export interface RaceScheduleResp {
  season: mycscores_db.Season;
  races: RaceScheduleEntry[];
  calendar_entries: mycscores_db.CalendarEntry[];
}

export function makeRaceScheduleResp(
  input: {
    season: mycscores_db.Season,
    races: RaceScheduleEntry[],
    calendar_entries: mycscores_db.CalendarEntry[],
  }
): RaceScheduleResp {
  return {
    season: input.season,
    races: input.races,
    calendar_entries: input.calendar_entries,
  };
}

const RaceScheduleResp_AST : ADL.ScopedDecl =
  {"decl":{"annotations":[],"name":"RaceScheduleResp","type_":{"kind":"struct_","value":{"fields":[{"annotations":[],"default":{"kind":"nothing"},"name":"season","serializedName":"season","typeExpr":{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"mycscores.db","name":"Season"}}}},{"annotations":[],"default":{"kind":"nothing"},"name":"races","serializedName":"races","typeExpr":{"parameters":[{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"mycscores.apis.ui","name":"RaceScheduleEntry"}}}],"typeRef":{"kind":"primitive","value":"Vector"}}},{"annotations":[],"default":{"kind":"nothing"},"name":"calendar_entries","serializedName":"calendar_entries","typeExpr":{"parameters":[{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"mycscores.db","name":"CalendarEntry"}}}],"typeRef":{"kind":"primitive","value":"Vector"}}}],"typeParams":[]}},"version":{"kind":"nothing"}},"moduleName":"mycscores.apis.ui"};

export const snRaceScheduleResp: ADL.ScopedName = {moduleName:"mycscores.apis.ui", name:"RaceScheduleResp"};

export function texprRaceScheduleResp(): ADL.ATypeExpr<RaceScheduleResp> {
  return {value : {typeRef : {kind: "reference", value : snRaceScheduleResp}, parameters : []}};
}

export interface EntrantRaceResult {
  entrant_id: mycscores_db.EntrantId;
  result: mycscores_db.RResult<common_time.LocalTime>;
}

export function makeEntrantRaceResult(
  input: {
    entrant_id: mycscores_db.EntrantId,
    result: mycscores_db.RResult<common_time.LocalTime>,
  }
): EntrantRaceResult {
  return {
    entrant_id: input.entrant_id,
    result: input.result,
  };
}

const EntrantRaceResult_AST : ADL.ScopedDecl =
  {"decl":{"annotations":[],"name":"EntrantRaceResult","type_":{"kind":"struct_","value":{"fields":[{"annotations":[],"default":{"kind":"nothing"},"name":"entrant_id","serializedName":"entrant_id","typeExpr":{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"mycscores.db","name":"EntrantId"}}}},{"annotations":[],"default":{"kind":"nothing"},"name":"result","serializedName":"result","typeExpr":{"parameters":[{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"common.time","name":"LocalTime"}}}],"typeRef":{"kind":"reference","value":{"moduleName":"mycscores.db","name":"RResult"}}}}],"typeParams":[]}},"version":{"kind":"nothing"}},"moduleName":"mycscores.apis.ui"};

export const snEntrantRaceResult: ADL.ScopedName = {moduleName:"mycscores.apis.ui", name:"EntrantRaceResult"};

export function texprEntrantRaceResult(): ADL.ATypeExpr<EntrantRaceResult> {
  return {value : {typeRef : {kind: "reference", value : snEntrantRaceResult}, parameters : []}};
}

export interface RaceStartDetails {
  date: common_time.LocalDate;
  start_time: common_time.LocalTime;
  conditions: common_strings.StringML;
  notes: common_strings.StringML;
  abandoned: boolean;
}

export function makeRaceStartDetails(
  input: {
    date: common_time.LocalDate,
    start_time: common_time.LocalTime,
    conditions: common_strings.StringML,
    notes: common_strings.StringML,
    abandoned: boolean,
  }
): RaceStartDetails {
  return {
    date: input.date,
    start_time: input.start_time,
    conditions: input.conditions,
    notes: input.notes,
    abandoned: input.abandoned,
  };
}

const RaceStartDetails_AST : ADL.ScopedDecl =
  {"decl":{"annotations":[],"name":"RaceStartDetails","type_":{"kind":"struct_","value":{"fields":[{"annotations":[],"default":{"kind":"nothing"},"name":"date","serializedName":"date","typeExpr":{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"common.time","name":"LocalDate"}}}},{"annotations":[],"default":{"kind":"nothing"},"name":"start_time","serializedName":"start_time","typeExpr":{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"common.time","name":"LocalTime"}}}},{"annotations":[],"default":{"kind":"nothing"},"name":"conditions","serializedName":"conditions","typeExpr":{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"common.strings","name":"StringML"}}}},{"annotations":[],"default":{"kind":"nothing"},"name":"notes","serializedName":"notes","typeExpr":{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"common.strings","name":"StringML"}}}},{"annotations":[],"default":{"kind":"nothing"},"name":"abandoned","serializedName":"abandoned","typeExpr":{"parameters":[],"typeRef":{"kind":"primitive","value":"Bool"}}}],"typeParams":[]}},"version":{"kind":"nothing"}},"moduleName":"mycscores.apis.ui"};

export const snRaceStartDetails: ADL.ScopedName = {moduleName:"mycscores.apis.ui", name:"RaceStartDetails"};

export function texprRaceStartDetails(): ADL.ATypeExpr<RaceStartDetails> {
  return {value : {typeRef : {kind: "reference", value : snRaceStartDetails}, parameters : []}};
}

export interface GetRaceResultsResp {
  scheduled_date: common_time.LocalDate;
  events: WithId<mycscores_db.EventId, mycscores_db.Event>[];
  start_details: (RaceStartDetails|null);
  results: EntrantRaceResult[];
}

export function makeGetRaceResultsResp(
  input: {
    scheduled_date: common_time.LocalDate,
    events: WithId<mycscores_db.EventId, mycscores_db.Event>[],
    start_details: (RaceStartDetails|null),
    results: EntrantRaceResult[],
  }
): GetRaceResultsResp {
  return {
    scheduled_date: input.scheduled_date,
    events: input.events,
    start_details: input.start_details,
    results: input.results,
  };
}

const GetRaceResultsResp_AST : ADL.ScopedDecl =
  {"decl":{"annotations":[],"name":"GetRaceResultsResp","type_":{"kind":"struct_","value":{"fields":[{"annotations":[],"default":{"kind":"nothing"},"name":"scheduled_date","serializedName":"scheduled_date","typeExpr":{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"common.time","name":"LocalDate"}}}},{"annotations":[],"default":{"kind":"nothing"},"name":"events","serializedName":"events","typeExpr":{"parameters":[{"parameters":[{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"mycscores.db","name":"EventId"}}},{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"mycscores.db","name":"Event"}}}],"typeRef":{"kind":"reference","value":{"moduleName":"mycscores.apis.ui","name":"WithId"}}}],"typeRef":{"kind":"primitive","value":"Vector"}}},{"annotations":[],"default":{"kind":"nothing"},"name":"start_details","serializedName":"start_details","typeExpr":{"parameters":[{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"mycscores.apis.ui","name":"RaceStartDetails"}}}],"typeRef":{"kind":"primitive","value":"Nullable"}}},{"annotations":[],"default":{"kind":"nothing"},"name":"results","serializedName":"results","typeExpr":{"parameters":[{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"mycscores.apis.ui","name":"EntrantRaceResult"}}}],"typeRef":{"kind":"primitive","value":"Vector"}}}],"typeParams":[]}},"version":{"kind":"nothing"}},"moduleName":"mycscores.apis.ui"};

export const snGetRaceResultsResp: ADL.ScopedName = {moduleName:"mycscores.apis.ui", name:"GetRaceResultsResp"};

export function texprGetRaceResultsResp(): ADL.ATypeExpr<GetRaceResultsResp> {
  return {value : {typeRef : {kind: "reference", value : snGetRaceResultsResp}, parameters : []}};
}

export interface EventResults {
  date: common_time.LocalDate;
  start_time: common_time.LocalTime;
  abbreviation: common_strings.StringNE;
  conditions: common_strings.StringML;
  is_handicap: boolean;
  abandoned: boolean;
  race_type: mycscores_db.RaceType;
  results: mycscores_db.EventResult[];
}

export function makeEventResults(
  input: {
    date: common_time.LocalDate,
    start_time: common_time.LocalTime,
    abbreviation: common_strings.StringNE,
    conditions: common_strings.StringML,
    is_handicap: boolean,
    abandoned: boolean,
    race_type: mycscores_db.RaceType,
    results: mycscores_db.EventResult[],
  }
): EventResults {
  return {
    date: input.date,
    start_time: input.start_time,
    abbreviation: input.abbreviation,
    conditions: input.conditions,
    is_handicap: input.is_handicap,
    abandoned: input.abandoned,
    race_type: input.race_type,
    results: input.results,
  };
}

const EventResults_AST : ADL.ScopedDecl =
  {"decl":{"annotations":[],"name":"EventResults","type_":{"kind":"struct_","value":{"fields":[{"annotations":[],"default":{"kind":"nothing"},"name":"date","serializedName":"date","typeExpr":{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"common.time","name":"LocalDate"}}}},{"annotations":[],"default":{"kind":"nothing"},"name":"start_time","serializedName":"start_time","typeExpr":{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"common.time","name":"LocalTime"}}}},{"annotations":[],"default":{"kind":"nothing"},"name":"abbreviation","serializedName":"abbreviation","typeExpr":{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"common.strings","name":"StringNE"}}}},{"annotations":[],"default":{"kind":"nothing"},"name":"conditions","serializedName":"conditions","typeExpr":{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"common.strings","name":"StringML"}}}},{"annotations":[],"default":{"kind":"nothing"},"name":"is_handicap","serializedName":"is_handicap","typeExpr":{"parameters":[],"typeRef":{"kind":"primitive","value":"Bool"}}},{"annotations":[],"default":{"kind":"nothing"},"name":"abandoned","serializedName":"abandoned","typeExpr":{"parameters":[],"typeRef":{"kind":"primitive","value":"Bool"}}},{"annotations":[],"default":{"kind":"nothing"},"name":"race_type","serializedName":"race_type","typeExpr":{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"mycscores.db","name":"RaceType"}}}},{"annotations":[],"default":{"kind":"nothing"},"name":"results","serializedName":"results","typeExpr":{"parameters":[{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"mycscores.db","name":"EventResult"}}}],"typeRef":{"kind":"primitive","value":"Vector"}}}],"typeParams":[]}},"version":{"kind":"nothing"}},"moduleName":"mycscores.apis.ui"};

export const snEventResults: ADL.ScopedName = {moduleName:"mycscores.apis.ui", name:"EventResults"};

export function texprEventResults(): ADL.ATypeExpr<EventResults> {
  return {value : {typeRef : {kind: "reference", value : snEventResults}, parameters : []}};
}

export type GetEventResultsResp = (EventResults|null);

const GetEventResultsResp_AST : ADL.ScopedDecl =
  {"decl":{"annotations":[],"name":"GetEventResultsResp","type_":{"kind":"type_","value":{"typeExpr":{"parameters":[{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"mycscores.apis.ui","name":"EventResults"}}}],"typeRef":{"kind":"primitive","value":"Nullable"}},"typeParams":[]}},"version":{"kind":"nothing"}},"moduleName":"mycscores.apis.ui"};

export const snGetEventResultsResp: ADL.ScopedName = {moduleName:"mycscores.apis.ui", name:"GetEventResultsResp"};

export function texprGetEventResultsResp(): ADL.ATypeExpr<GetEventResultsResp> {
  return {value : {typeRef : {kind: "reference", value : snGetEventResultsResp}, parameters : []}};
}

export interface EntrantSeriesResult {
  entrant_id: mycscores_db.EntrantId;
  event_id: mycscores_db.EventId;
  score: number;
}

export function makeEntrantSeriesResult(
  input: {
    entrant_id: mycscores_db.EntrantId,
    event_id: mycscores_db.EventId,
    score: number,
  }
): EntrantSeriesResult {
  return {
    entrant_id: input.entrant_id,
    event_id: input.event_id,
    score: input.score,
  };
}

const EntrantSeriesResult_AST : ADL.ScopedDecl =
  {"decl":{"annotations":[],"name":"EntrantSeriesResult","type_":{"kind":"struct_","value":{"fields":[{"annotations":[],"default":{"kind":"nothing"},"name":"entrant_id","serializedName":"entrant_id","typeExpr":{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"mycscores.db","name":"EntrantId"}}}},{"annotations":[],"default":{"kind":"nothing"},"name":"event_id","serializedName":"event_id","typeExpr":{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"mycscores.db","name":"EventId"}}}},{"annotations":[],"default":{"kind":"nothing"},"name":"score","serializedName":"score","typeExpr":{"parameters":[],"typeRef":{"kind":"primitive","value":"Word16"}}}],"typeParams":[]}},"version":{"kind":"nothing"}},"moduleName":"mycscores.apis.ui"};

export const snEntrantSeriesResult: ADL.ScopedName = {moduleName:"mycscores.apis.ui", name:"EntrantSeriesResult"};

export function texprEntrantSeriesResult(): ADL.ATypeExpr<EntrantSeriesResult> {
  return {value : {typeRef : {kind: "reference", value : snEntrantSeriesResult}, parameters : []}};
}

export interface GetSeriesResultsResp {
  season: WithId<mycscores_db.SeasonId, mycscores_db.Season>;
  series: WithId<mycscores_db.SeriesId, mycscores_db.Series>;
  events: WithId<mycscores_db.EventId, mycscores_db.Event>[];
  entrants: WithId<mycscores_db.EntrantId, mycscores_db.Entrant>[];
  results: EntrantSeriesResult[];
}

export function makeGetSeriesResultsResp(
  input: {
    season: WithId<mycscores_db.SeasonId, mycscores_db.Season>,
    series: WithId<mycscores_db.SeriesId, mycscores_db.Series>,
    events: WithId<mycscores_db.EventId, mycscores_db.Event>[],
    entrants: WithId<mycscores_db.EntrantId, mycscores_db.Entrant>[],
    results: EntrantSeriesResult[],
  }
): GetSeriesResultsResp {
  return {
    season: input.season,
    series: input.series,
    events: input.events,
    entrants: input.entrants,
    results: input.results,
  };
}

const GetSeriesResultsResp_AST : ADL.ScopedDecl =
  {"decl":{"annotations":[],"name":"GetSeriesResultsResp","type_":{"kind":"struct_","value":{"fields":[{"annotations":[],"default":{"kind":"nothing"},"name":"season","serializedName":"season","typeExpr":{"parameters":[{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"mycscores.db","name":"SeasonId"}}},{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"mycscores.db","name":"Season"}}}],"typeRef":{"kind":"reference","value":{"moduleName":"mycscores.apis.ui","name":"WithId"}}}},{"annotations":[],"default":{"kind":"nothing"},"name":"series","serializedName":"series","typeExpr":{"parameters":[{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"mycscores.db","name":"SeriesId"}}},{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"mycscores.db","name":"Series"}}}],"typeRef":{"kind":"reference","value":{"moduleName":"mycscores.apis.ui","name":"WithId"}}}},{"annotations":[],"default":{"kind":"nothing"},"name":"events","serializedName":"events","typeExpr":{"parameters":[{"parameters":[{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"mycscores.db","name":"EventId"}}},{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"mycscores.db","name":"Event"}}}],"typeRef":{"kind":"reference","value":{"moduleName":"mycscores.apis.ui","name":"WithId"}}}],"typeRef":{"kind":"primitive","value":"Vector"}}},{"annotations":[],"default":{"kind":"nothing"},"name":"entrants","serializedName":"entrants","typeExpr":{"parameters":[{"parameters":[{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"mycscores.db","name":"EntrantId"}}},{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"mycscores.db","name":"Entrant"}}}],"typeRef":{"kind":"reference","value":{"moduleName":"mycscores.apis.ui","name":"WithId"}}}],"typeRef":{"kind":"primitive","value":"Vector"}}},{"annotations":[],"default":{"kind":"nothing"},"name":"results","serializedName":"results","typeExpr":{"parameters":[{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"mycscores.apis.ui","name":"EntrantSeriesResult"}}}],"typeRef":{"kind":"primitive","value":"Vector"}}}],"typeParams":[]}},"version":{"kind":"nothing"}},"moduleName":"mycscores.apis.ui"};

export const snGetSeriesResultsResp: ADL.ScopedName = {moduleName:"mycscores.apis.ui", name:"GetSeriesResultsResp"};

export function texprGetSeriesResultsResp(): ADL.ATypeExpr<GetSeriesResultsResp> {
  return {value : {typeRef : {kind: "reference", value : snGetSeriesResultsResp}, parameters : []}};
}

export interface UpdateRaceResultsReq {
  race_id: mycscores_db.RaceId;
  start_details: RaceStartDetails;
  results: EntrantRaceResult[];
}

export function makeUpdateRaceResultsReq(
  input: {
    race_id: mycscores_db.RaceId,
    start_details: RaceStartDetails,
    results: EntrantRaceResult[],
  }
): UpdateRaceResultsReq {
  return {
    race_id: input.race_id,
    start_details: input.start_details,
    results: input.results,
  };
}

const UpdateRaceResultsReq_AST : ADL.ScopedDecl =
  {"decl":{"annotations":[],"name":"UpdateRaceResultsReq","type_":{"kind":"struct_","value":{"fields":[{"annotations":[],"default":{"kind":"nothing"},"name":"race_id","serializedName":"race_id","typeExpr":{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"mycscores.db","name":"RaceId"}}}},{"annotations":[],"default":{"kind":"nothing"},"name":"start_details","serializedName":"start_details","typeExpr":{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"mycscores.apis.ui","name":"RaceStartDetails"}}}},{"annotations":[],"default":{"kind":"nothing"},"name":"results","serializedName":"results","typeExpr":{"parameters":[{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"mycscores.apis.ui","name":"EntrantRaceResult"}}}],"typeRef":{"kind":"primitive","value":"Vector"}}}],"typeParams":[]}},"version":{"kind":"nothing"}},"moduleName":"mycscores.apis.ui"};

export const snUpdateRaceResultsReq: ADL.ScopedName = {moduleName:"mycscores.apis.ui", name:"UpdateRaceResultsReq"};

export function texprUpdateRaceResultsReq(): ADL.ATypeExpr<UpdateRaceResultsReq> {
  return {value : {typeRef : {kind: "reference", value : snUpdateRaceResultsReq}, parameters : []}};
}

export interface User {
  fullname: common_strings.StringNE;
  email: common_strings.EmailAddress;
  is_admin: boolean;
}

export function makeUser(
  input: {
    fullname: common_strings.StringNE,
    email: common_strings.EmailAddress,
    is_admin: boolean,
  }
): User {
  return {
    fullname: input.fullname,
    email: input.email,
    is_admin: input.is_admin,
  };
}

const User_AST : ADL.ScopedDecl =
  {"decl":{"annotations":[],"name":"User","type_":{"kind":"struct_","value":{"fields":[{"annotations":[],"default":{"kind":"nothing"},"name":"fullname","serializedName":"fullname","typeExpr":{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"common.strings","name":"StringNE"}}}},{"annotations":[],"default":{"kind":"nothing"},"name":"email","serializedName":"email","typeExpr":{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"common.strings","name":"EmailAddress"}}}},{"annotations":[],"default":{"kind":"nothing"},"name":"is_admin","serializedName":"is_admin","typeExpr":{"parameters":[],"typeRef":{"kind":"primitive","value":"Bool"}}}],"typeParams":[]}},"version":{"kind":"nothing"}},"moduleName":"mycscores.apis.ui"};

export const snUser: ADL.ScopedName = {moduleName:"mycscores.apis.ui", name:"User"};

export function texprUser(): ADL.ATypeExpr<User> {
  return {value : {typeRef : {kind: "reference", value : snUser}, parameters : []}};
}

export type UserWithId = WithId<mycscores_db.AppUserId, User>;

const UserWithId_AST : ADL.ScopedDecl =
  {"decl":{"annotations":[],"name":"UserWithId","type_":{"kind":"type_","value":{"typeExpr":{"parameters":[{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"mycscores.db","name":"AppUserId"}}},{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"mycscores.apis.ui","name":"User"}}}],"typeRef":{"kind":"reference","value":{"moduleName":"mycscores.apis.ui","name":"WithId"}}},"typeParams":[]}},"version":{"kind":"nothing"}},"moduleName":"mycscores.apis.ui"};

export const snUserWithId: ADL.ScopedName = {moduleName:"mycscores.apis.ui", name:"UserWithId"};

export function texprUserWithId(): ADL.ATypeExpr<UserWithId> {
  return {value : {typeRef : {kind: "reference", value : snUserWithId}, parameters : []}};
}

export type UserSorting = 'fullname' | 'email';
export const valuesUserSorting : UserSorting[] = ['fullname', 'email'];

const UserSorting_AST : ADL.ScopedDecl =
  {"decl":{"annotations":[],"name":"UserSorting","type_":{"kind":"union_","value":{"fields":[{"annotations":[],"default":{"kind":"nothing"},"name":"fullname","serializedName":"fullname","typeExpr":{"parameters":[],"typeRef":{"kind":"primitive","value":"Void"}}},{"annotations":[],"default":{"kind":"nothing"},"name":"email","serializedName":"email","typeExpr":{"parameters":[],"typeRef":{"kind":"primitive","value":"Void"}}}],"typeParams":[]}},"version":{"kind":"nothing"}},"moduleName":"mycscores.apis.ui"};

export const snUserSorting: ADL.ScopedName = {moduleName:"mycscores.apis.ui", name:"UserSorting"};

export function texprUserSorting(): ADL.ATypeExpr<UserSorting> {
  return {value : {typeRef : {kind: "reference", value : snUserSorting}, parameters : []}};
}

export interface UserFilter_Fullname_matches {
  kind: 'fullname_matches';
  value: string;
}

export type UserFilter = UserFilter_Fullname_matches;

export interface UserFilterOpts {
  fullname_matches: string;
}

export function makeUserFilter<K extends keyof UserFilterOpts>(kind: K, value: UserFilterOpts[K]) { return {kind, value}; }

const UserFilter_AST : ADL.ScopedDecl =
  {"decl":{"annotations":[],"name":"UserFilter","type_":{"kind":"union_","value":{"fields":[{"annotations":[],"default":{"kind":"nothing"},"name":"fullname_matches","serializedName":"fullname_matches","typeExpr":{"parameters":[],"typeRef":{"kind":"primitive","value":"String"}}}],"typeParams":[]}},"version":{"kind":"nothing"}},"moduleName":"mycscores.apis.ui"};

export const snUserFilter: ADL.ScopedName = {moduleName:"mycscores.apis.ui", name:"UserFilter"};

export function texprUserFilter(): ADL.ATypeExpr<UserFilter> {
  return {value : {typeRef : {kind: "reference", value : snUserFilter}, parameters : []}};
}

export type UserQueryReq = common_db_api.TabularQueryReq<UserSorting, UserFilter>;

const UserQueryReq_AST : ADL.ScopedDecl =
  {"decl":{"annotations":[],"name":"UserQueryReq","type_":{"kind":"type_","value":{"typeExpr":{"parameters":[{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"mycscores.apis.ui","name":"UserSorting"}}},{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"mycscores.apis.ui","name":"UserFilter"}}}],"typeRef":{"kind":"reference","value":{"moduleName":"common.db_api","name":"TabularQueryReq"}}},"typeParams":[]}},"version":{"kind":"nothing"}},"moduleName":"mycscores.apis.ui"};

export const snUserQueryReq: ADL.ScopedName = {moduleName:"mycscores.apis.ui", name:"UserQueryReq"};

export function texprUserQueryReq(): ADL.ATypeExpr<UserQueryReq> {
  return {value : {typeRef : {kind: "reference", value : snUserQueryReq}, parameters : []}};
}

export interface UserDetails {
  fullname: common_strings.StringNE;
  email: common_strings.EmailAddress;
  is_admin: boolean;
  password: common_strings.Password;
}

export function makeUserDetails(
  input: {
    fullname: common_strings.StringNE,
    email: common_strings.EmailAddress,
    is_admin: boolean,
    password: common_strings.Password,
  }
): UserDetails {
  return {
    fullname: input.fullname,
    email: input.email,
    is_admin: input.is_admin,
    password: input.password,
  };
}

const UserDetails_AST : ADL.ScopedDecl =
  {"decl":{"annotations":[],"name":"UserDetails","type_":{"kind":"struct_","value":{"fields":[{"annotations":[],"default":{"kind":"nothing"},"name":"fullname","serializedName":"fullname","typeExpr":{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"common.strings","name":"StringNE"}}}},{"annotations":[],"default":{"kind":"nothing"},"name":"email","serializedName":"email","typeExpr":{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"common.strings","name":"EmailAddress"}}}},{"annotations":[],"default":{"kind":"nothing"},"name":"is_admin","serializedName":"is_admin","typeExpr":{"parameters":[],"typeRef":{"kind":"primitive","value":"Bool"}}},{"annotations":[],"default":{"kind":"nothing"},"name":"password","serializedName":"password","typeExpr":{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"common.strings","name":"Password"}}}}],"typeParams":[]}},"version":{"kind":"nothing"}},"moduleName":"mycscores.apis.ui"};

export const snUserDetails: ADL.ScopedName = {moduleName:"mycscores.apis.ui", name:"UserDetails"};

export function texprUserDetails(): ADL.ATypeExpr<UserDetails> {
  return {value : {typeRef : {kind: "reference", value : snUserDetails}, parameters : []}};
}

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
  {"decl":{"annotations":[],"name":"WithId","type_":{"kind":"struct_","value":{"fields":[{"annotations":[],"default":{"kind":"nothing"},"name":"id","serializedName":"id","typeExpr":{"parameters":[],"typeRef":{"kind":"typeParam","value":"I"}}},{"annotations":[],"default":{"kind":"nothing"},"name":"value","serializedName":"value","typeExpr":{"parameters":[],"typeRef":{"kind":"typeParam","value":"T"}}}],"typeParams":["I","T"]}},"version":{"kind":"nothing"}},"moduleName":"mycscores.apis.ui"};

export const snWithId: ADL.ScopedName = {moduleName:"mycscores.apis.ui", name:"WithId"};

export function texprWithId<I, T>(texprI : ADL.ATypeExpr<I>, texprT : ADL.ATypeExpr<T>): ADL.ATypeExpr<WithId<I, T>> {
  return {value : {typeRef : {kind: "reference", value : {moduleName : "mycscores.apis.ui",name : "WithId"}}, parameters : [texprI.value, texprT.value]}};
}

export const _AST_MAP: { [key: string]: ADL.ScopedDecl } = {
  "mycscores.apis.ui.ApiRequests" : ApiRequests_AST,
  "mycscores.apis.ui.LoginReq" : LoginReq_AST,
  "mycscores.apis.ui.LoginResp" : LoginResp_AST,
  "mycscores.apis.ui.RefreshReq" : RefreshReq_AST,
  "mycscores.apis.ui.RefreshResp" : RefreshResp_AST,
  "mycscores.apis.ui.LoginTokens" : LoginTokens_AST,
  "mycscores.apis.ui.SeasonDetails" : SeasonDetails_AST,
  "mycscores.apis.ui.RaceScheduleEntry" : RaceScheduleEntry_AST,
  "mycscores.apis.ui.RaceEntrant" : RaceEntrant_AST,
  "mycscores.apis.ui.RaceScheduleResp" : RaceScheduleResp_AST,
  "mycscores.apis.ui.EntrantRaceResult" : EntrantRaceResult_AST,
  "mycscores.apis.ui.RaceStartDetails" : RaceStartDetails_AST,
  "mycscores.apis.ui.GetRaceResultsResp" : GetRaceResultsResp_AST,
  "mycscores.apis.ui.EventResults" : EventResults_AST,
  "mycscores.apis.ui.GetEventResultsResp" : GetEventResultsResp_AST,
  "mycscores.apis.ui.EntrantSeriesResult" : EntrantSeriesResult_AST,
  "mycscores.apis.ui.GetSeriesResultsResp" : GetSeriesResultsResp_AST,
  "mycscores.apis.ui.UpdateRaceResultsReq" : UpdateRaceResultsReq_AST,
  "mycscores.apis.ui.User" : User_AST,
  "mycscores.apis.ui.UserWithId" : UserWithId_AST,
  "mycscores.apis.ui.UserSorting" : UserSorting_AST,
  "mycscores.apis.ui.UserFilter" : UserFilter_AST,
  "mycscores.apis.ui.UserQueryReq" : UserQueryReq_AST,
  "mycscores.apis.ui.UserDetails" : UserDetails_AST,
  "mycscores.apis.ui.WithId" : WithId_AST
};
