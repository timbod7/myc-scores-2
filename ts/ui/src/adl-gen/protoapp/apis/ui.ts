/* @generated from adl module protoapp.apis.ui */

import * as ADL from './../../runtime/adl';
import * as common_http from './../../common/http';
import * as common_strings from './../../common/strings';
import * as common_time from './../../common/time';
import * as protoapp_db from './../db';

export interface ApiRequests {
  /**
   * AWS default compatible health check
   */
  healthy: common_http.HttpGet<common_http.Unit>;
  /**
   * Test the server is live
   */
  ping: common_http.HttpPost<common_http.Unit, common_http.Unit>;
  /**
   * Login a user
   */
  login: common_http.HttpPost<LoginReq, LoginResp>;
  /**
   * Post a message to the noticeboard
   */
  newMessage: common_http.HttpPost<NewMessageReq, protoapp_db.MessageId>;
  /**
   * Get recent noticeboard messages
   */
  recentMessages: common_http.HttpPost<RecentMessagesReq, Paginated<Message>>;
  /**
   * Gets the logged in user details
   */
  whoAmI: common_http.HttpGet<UserProfile>;
}

export function makeApiRequests(
  input: {
    healthy?: common_http.HttpGet<common_http.Unit>,
    ping?: common_http.HttpPost<common_http.Unit, common_http.Unit>,
    login?: common_http.HttpPost<LoginReq, LoginResp>,
    newMessage?: common_http.HttpPost<NewMessageReq, protoapp_db.MessageId>,
    recentMessages?: common_http.HttpPost<RecentMessagesReq, Paginated<Message>>,
    whoAmI?: common_http.HttpGet<UserProfile>,
  }
): ApiRequests {
  return {
    healthy: input.healthy === undefined ? {path : "/", security : {kind : "public"}, rateLimit : null, respType : common_http.texprUnit()} : input.healthy,
    ping: input.ping === undefined ? {path : "/ping", security : {kind : "public"}, rateLimit : null, reqType : common_http.texprUnit(), respType : common_http.texprUnit()} : input.ping,
    login: input.login === undefined ? {path : "/login", security : {kind : "public"}, rateLimit : null, reqType : texprLoginReq(), respType : texprLoginResp()} : input.login,
    newMessage: input.newMessage === undefined ? {path : "/messages/new", security : {kind : "token"}, rateLimit : null, reqType : texprNewMessageReq(), respType : protoapp_db.texprMessageId()} : input.newMessage,
    recentMessages: input.recentMessages === undefined ? {path : "/messages/recent", security : {kind : "token"}, rateLimit : null, reqType : texprRecentMessagesReq(), respType : texprPaginated(texprMessage())} : input.recentMessages,
    whoAmI: input.whoAmI === undefined ? {path : "/whoami", security : {kind : "token"}, rateLimit : null, respType : texprUserProfile()} : input.whoAmI,
  };
}

const ApiRequests_AST : ADL.ScopedDecl =
  {"moduleName":"protoapp.apis.ui","decl":{"annotations":[],"type_":{"kind":"struct_","value":{"typeParams":[],"fields":[{"annotations":[{"value":"AWS default compatible health check\n","key":{"moduleName":"sys.annotations","name":"Doc"}}],"serializedName":"healthy","default":{"kind":"just","value":{"path":"/","security":"public"}},"name":"healthy","typeExpr":{"typeRef":{"kind":"reference","value":{"moduleName":"common.http","name":"HttpGet"}},"parameters":[{"typeRef":{"kind":"reference","value":{"moduleName":"common.http","name":"Unit"}},"parameters":[]}]}},{"annotations":[{"value":"Test the server is live\n","key":{"moduleName":"sys.annotations","name":"Doc"}}],"serializedName":"ping","default":{"kind":"just","value":{"path":"/ping","security":"public"}},"name":"ping","typeExpr":{"typeRef":{"kind":"reference","value":{"moduleName":"common.http","name":"HttpPost"}},"parameters":[{"typeRef":{"kind":"reference","value":{"moduleName":"common.http","name":"Unit"}},"parameters":[]},{"typeRef":{"kind":"reference","value":{"moduleName":"common.http","name":"Unit"}},"parameters":[]}]}},{"annotations":[{"value":"Login a user\n","key":{"moduleName":"sys.annotations","name":"Doc"}}],"serializedName":"login","default":{"kind":"just","value":{"path":"/login","security":"public"}},"name":"login","typeExpr":{"typeRef":{"kind":"reference","value":{"moduleName":"common.http","name":"HttpPost"}},"parameters":[{"typeRef":{"kind":"reference","value":{"moduleName":"protoapp.apis.ui","name":"LoginReq"}},"parameters":[]},{"typeRef":{"kind":"reference","value":{"moduleName":"protoapp.apis.ui","name":"LoginResp"}},"parameters":[]}]}},{"annotations":[{"value":"Post a message to the noticeboard\n","key":{"moduleName":"sys.annotations","name":"Doc"}}],"serializedName":"newMessage","default":{"kind":"just","value":{"path":"/messages/new","security":"token"}},"name":"newMessage","typeExpr":{"typeRef":{"kind":"reference","value":{"moduleName":"common.http","name":"HttpPost"}},"parameters":[{"typeRef":{"kind":"reference","value":{"moduleName":"protoapp.apis.ui","name":"NewMessageReq"}},"parameters":[]},{"typeRef":{"kind":"reference","value":{"moduleName":"protoapp.db","name":"MessageId"}},"parameters":[]}]}},{"annotations":[{"value":"Get recent noticeboard messages\n","key":{"moduleName":"sys.annotations","name":"Doc"}}],"serializedName":"recentMessages","default":{"kind":"just","value":{"path":"/messages/recent","security":"token"}},"name":"recentMessages","typeExpr":{"typeRef":{"kind":"reference","value":{"moduleName":"common.http","name":"HttpPost"}},"parameters":[{"typeRef":{"kind":"reference","value":{"moduleName":"protoapp.apis.ui","name":"RecentMessagesReq"}},"parameters":[]},{"typeRef":{"kind":"reference","value":{"moduleName":"protoapp.apis.ui","name":"Paginated"}},"parameters":[{"typeRef":{"kind":"reference","value":{"moduleName":"protoapp.apis.ui","name":"Message"}},"parameters":[]}]}]}},{"annotations":[{"value":"Gets the logged in user details\n","key":{"moduleName":"sys.annotations","name":"Doc"}}],"serializedName":"whoAmI","default":{"kind":"just","value":{"path":"/whoami","security":"token"}},"name":"whoAmI","typeExpr":{"typeRef":{"kind":"reference","value":{"moduleName":"common.http","name":"HttpGet"}},"parameters":[{"typeRef":{"kind":"reference","value":{"moduleName":"protoapp.apis.ui","name":"UserProfile"}},"parameters":[]}]}}]}},"name":"ApiRequests","version":{"kind":"nothing"}}};

export const snApiRequests: ADL.ScopedName = {moduleName:"protoapp.apis.ui", name:"ApiRequests"};

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
  {"moduleName":"protoapp.apis.ui","decl":{"annotations":[],"type_":{"kind":"struct_","value":{"typeParams":[],"fields":[{"annotations":[],"serializedName":"email","default":{"kind":"nothing"},"name":"email","typeExpr":{"typeRef":{"kind":"reference","value":{"moduleName":"common.strings","name":"StringNE"}},"parameters":[]}},{"annotations":[],"serializedName":"password","default":{"kind":"nothing"},"name":"password","typeExpr":{"typeRef":{"kind":"reference","value":{"moduleName":"common.strings","name":"Password"}},"parameters":[]}}]}},"name":"LoginReq","version":{"kind":"nothing"}}};

export const snLoginReq: ADL.ScopedName = {moduleName:"protoapp.apis.ui", name:"LoginReq"};

export function texprLoginReq(): ADL.ATypeExpr<LoginReq> {
  return {value : {typeRef : {kind: "reference", value : snLoginReq}, parameters : []}};
}

export interface LoginResp_Access_token {
  kind: 'access_token';
  value: common_strings.StringNE;
}
export interface LoginResp_Invalid_credentials {
  kind: 'invalid_credentials';
}

export type LoginResp = LoginResp_Access_token | LoginResp_Invalid_credentials;

export interface LoginRespOpts {
  access_token: common_strings.StringNE;
  invalid_credentials: null;
}

export function makeLoginResp<K extends keyof LoginRespOpts>(kind: K, value: LoginRespOpts[K]) { return {kind, value}; }

const LoginResp_AST : ADL.ScopedDecl =
  {"moduleName":"protoapp.apis.ui","decl":{"annotations":[],"type_":{"kind":"union_","value":{"typeParams":[],"fields":[{"annotations":[],"serializedName":"access_token","default":{"kind":"nothing"},"name":"access_token","typeExpr":{"typeRef":{"kind":"reference","value":{"moduleName":"common.strings","name":"StringNE"}},"parameters":[]}},{"annotations":[],"serializedName":"invalid_credentials","default":{"kind":"nothing"},"name":"invalid_credentials","typeExpr":{"typeRef":{"kind":"primitive","value":"Void"},"parameters":[]}}]}},"name":"LoginResp","version":{"kind":"nothing"}}};

export const snLoginResp: ADL.ScopedName = {moduleName:"protoapp.apis.ui", name:"LoginResp"};

export function texprLoginResp(): ADL.ATypeExpr<LoginResp> {
  return {value : {typeRef : {kind: "reference", value : snLoginResp}, parameters : []}};
}

export interface NewMessageReq {
  message: common_strings.StringML;
}

export function makeNewMessageReq(
  input: {
    message: common_strings.StringML,
  }
): NewMessageReq {
  return {
    message: input.message,
  };
}

const NewMessageReq_AST : ADL.ScopedDecl =
  {"moduleName":"protoapp.apis.ui","decl":{"annotations":[],"type_":{"kind":"struct_","value":{"typeParams":[],"fields":[{"annotations":[],"serializedName":"message","default":{"kind":"nothing"},"name":"message","typeExpr":{"typeRef":{"kind":"reference","value":{"moduleName":"common.strings","name":"StringML"}},"parameters":[]}}]}},"name":"NewMessageReq","version":{"kind":"nothing"}}};

export const snNewMessageReq: ADL.ScopedName = {moduleName:"protoapp.apis.ui", name:"NewMessageReq"};

export function texprNewMessageReq(): ADL.ATypeExpr<NewMessageReq> {
  return {value : {typeRef : {kind: "reference", value : snNewMessageReq}, parameters : []}};
}

export interface RecentMessagesReq {
  offset: number;
  count: number;
}

export function makeRecentMessagesReq(
  input: {
    offset?: number,
    count?: number,
  }
): RecentMessagesReq {
  return {
    offset: input.offset === undefined ? 0 : input.offset,
    count: input.count === undefined ? 20 : input.count,
  };
}

const RecentMessagesReq_AST : ADL.ScopedDecl =
  {"moduleName":"protoapp.apis.ui","decl":{"annotations":[],"type_":{"kind":"struct_","value":{"typeParams":[],"fields":[{"annotations":[],"serializedName":"offset","default":{"kind":"just","value":0},"name":"offset","typeExpr":{"typeRef":{"kind":"primitive","value":"Int32"},"parameters":[]}},{"annotations":[],"serializedName":"count","default":{"kind":"just","value":20},"name":"count","typeExpr":{"typeRef":{"kind":"primitive","value":"Int32"},"parameters":[]}}]}},"name":"RecentMessagesReq","version":{"kind":"nothing"}}};

export const snRecentMessagesReq: ADL.ScopedName = {moduleName:"protoapp.apis.ui", name:"RecentMessagesReq"};

export function texprRecentMessagesReq(): ADL.ATypeExpr<RecentMessagesReq> {
  return {value : {typeRef : {kind: "reference", value : snRecentMessagesReq}, parameters : []}};
}

export interface Message {
  id: protoapp_db.MessageId;
  posted_at: common_time.Instant;
  user_fullname: string;
  message: common_strings.StringML;
}

export function makeMessage(
  input: {
    id: protoapp_db.MessageId,
    posted_at: common_time.Instant,
    user_fullname: string,
    message: common_strings.StringML,
  }
): Message {
  return {
    id: input.id,
    posted_at: input.posted_at,
    user_fullname: input.user_fullname,
    message: input.message,
  };
}

const Message_AST : ADL.ScopedDecl =
  {"moduleName":"protoapp.apis.ui","decl":{"annotations":[],"type_":{"kind":"struct_","value":{"typeParams":[],"fields":[{"annotations":[],"serializedName":"id","default":{"kind":"nothing"},"name":"id","typeExpr":{"typeRef":{"kind":"reference","value":{"moduleName":"protoapp.db","name":"MessageId"}},"parameters":[]}},{"annotations":[],"serializedName":"posted_at","default":{"kind":"nothing"},"name":"posted_at","typeExpr":{"typeRef":{"kind":"reference","value":{"moduleName":"common.time","name":"Instant"}},"parameters":[]}},{"annotations":[],"serializedName":"user_fullname","default":{"kind":"nothing"},"name":"user_fullname","typeExpr":{"typeRef":{"kind":"primitive","value":"String"},"parameters":[]}},{"annotations":[],"serializedName":"message","default":{"kind":"nothing"},"name":"message","typeExpr":{"typeRef":{"kind":"reference","value":{"moduleName":"common.strings","name":"StringML"}},"parameters":[]}}]}},"name":"Message","version":{"kind":"nothing"}}};

export const snMessage: ADL.ScopedName = {moduleName:"protoapp.apis.ui", name:"Message"};

export function texprMessage(): ADL.ATypeExpr<Message> {
  return {value : {typeRef : {kind: "reference", value : snMessage}, parameters : []}};
}

export interface UserProfile {
  id: protoapp_db.AppUserId;
  fullname: string;
  email: string;
  is_admin: boolean;
}

export function makeUserProfile(
  input: {
    id: protoapp_db.AppUserId,
    fullname: string,
    email: string,
    is_admin: boolean,
  }
): UserProfile {
  return {
    id: input.id,
    fullname: input.fullname,
    email: input.email,
    is_admin: input.is_admin,
  };
}

const UserProfile_AST : ADL.ScopedDecl =
  {"moduleName":"protoapp.apis.ui","decl":{"annotations":[],"type_":{"kind":"struct_","value":{"typeParams":[],"fields":[{"annotations":[],"serializedName":"id","default":{"kind":"nothing"},"name":"id","typeExpr":{"typeRef":{"kind":"reference","value":{"moduleName":"protoapp.db","name":"AppUserId"}},"parameters":[]}},{"annotations":[],"serializedName":"fullname","default":{"kind":"nothing"},"name":"fullname","typeExpr":{"typeRef":{"kind":"primitive","value":"String"},"parameters":[]}},{"annotations":[],"serializedName":"email","default":{"kind":"nothing"},"name":"email","typeExpr":{"typeRef":{"kind":"primitive","value":"String"},"parameters":[]}},{"annotations":[],"serializedName":"is_admin","default":{"kind":"nothing"},"name":"is_admin","typeExpr":{"typeRef":{"kind":"primitive","value":"Bool"},"parameters":[]}}]}},"name":"UserProfile","version":{"kind":"nothing"}}};

export const snUserProfile: ADL.ScopedName = {moduleName:"protoapp.apis.ui", name:"UserProfile"};

export function texprUserProfile(): ADL.ATypeExpr<UserProfile> {
  return {value : {typeRef : {kind: "reference", value : snUserProfile}, parameters : []}};
}

/**
 * A holder for paginated results
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
  total_size: number;
}

export function makePaginated<T>(
  input: {
    items: T[],
    current_offset: number,
    total_size: number,
  }
): Paginated<T> {
  return {
    items: input.items,
    current_offset: input.current_offset,
    total_size: input.total_size,
  };
}

const Paginated_AST : ADL.ScopedDecl =
  {"moduleName":"protoapp.apis.ui","decl":{"annotations":[{"value":"A holder for paginated results\n","key":{"moduleName":"sys.annotations","name":"Doc"}}],"type_":{"kind":"struct_","value":{"typeParams":["T"],"fields":[{"annotations":[{"value":"The paginated items\n","key":{"moduleName":"sys.annotations","name":"Doc"}}],"serializedName":"items","default":{"kind":"nothing"},"name":"items","typeExpr":{"typeRef":{"kind":"primitive","value":"Vector"},"parameters":[{"typeRef":{"kind":"typeParam","value":"T"},"parameters":[]}]}},{"annotations":[{"value":"The offset used for this query\n","key":{"moduleName":"sys.annotations","name":"Doc"}}],"serializedName":"current_offset","default":{"kind":"nothing"},"name":"current_offset","typeExpr":{"typeRef":{"kind":"primitive","value":"Int64"},"parameters":[]}},{"annotations":[{"value":"The size of the entire date set\n","key":{"moduleName":"sys.annotations","name":"Doc"}}],"serializedName":"total_size","default":{"kind":"nothing"},"name":"total_size","typeExpr":{"typeRef":{"kind":"primitive","value":"Int64"},"parameters":[]}}]}},"name":"Paginated","version":{"kind":"nothing"}}};

export const snPaginated: ADL.ScopedName = {moduleName:"protoapp.apis.ui", name:"Paginated"};

export function texprPaginated<T>(texprT : ADL.ATypeExpr<T>): ADL.ATypeExpr<Paginated<T>> {
  return {value : {typeRef : {kind: "reference", value : {moduleName : "protoapp.apis.ui",name : "Paginated"}}, parameters : [texprT.value]}};
}

export const _AST_MAP: { [key: string]: ADL.ScopedDecl } = {
  "protoapp.apis.ui.ApiRequests" : ApiRequests_AST,
  "protoapp.apis.ui.LoginReq" : LoginReq_AST,
  "protoapp.apis.ui.LoginResp" : LoginResp_AST,
  "protoapp.apis.ui.NewMessageReq" : NewMessageReq_AST,
  "protoapp.apis.ui.RecentMessagesReq" : RecentMessagesReq_AST,
  "protoapp.apis.ui.Message" : Message_AST,
  "protoapp.apis.ui.UserProfile" : UserProfile_AST,
  "protoapp.apis.ui.Paginated" : Paginated_AST
};
