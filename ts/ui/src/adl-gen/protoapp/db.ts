/* @generated from adl module protoapp.db */

import * as ADL from './../runtime/adl';
import * as common_db from './../common/db';
import * as common_strings from './../common/strings';
import * as common_time from './../common/time';

export interface AppUser {
  fullname: common_strings.StringNE;
  email: common_strings.StringNE;
  isAdmin: boolean;
  hashed_password: common_strings.StringNE;
}

export function makeAppUser(
  input: {
    fullname: common_strings.StringNE,
    email: common_strings.StringNE,
    isAdmin: boolean,
    hashed_password?: common_strings.StringNE,
  }
): AppUser {
  return {
    fullname: input.fullname,
    email: input.email,
    isAdmin: input.isAdmin,
    hashed_password: input.hashed_password === undefined ? "" : input.hashed_password,
  };
}

const AppUser_AST : ADL.ScopedDecl =
  {"moduleName":"protoapp.db","decl":{"annotations":[],"type_":{"kind":"struct_","value":{"typeParams":[],"fields":[{"annotations":[],"serializedName":"fullname","default":{"kind":"nothing"},"name":"fullname","typeExpr":{"typeRef":{"kind":"reference","value":{"moduleName":"common.strings","name":"StringNE"}},"parameters":[]}},{"annotations":[],"serializedName":"email","default":{"kind":"nothing"},"name":"email","typeExpr":{"typeRef":{"kind":"reference","value":{"moduleName":"common.strings","name":"StringNE"}},"parameters":[]}},{"annotations":[],"serializedName":"isAdmin","default":{"kind":"nothing"},"name":"isAdmin","typeExpr":{"typeRef":{"kind":"primitive","value":"Bool"},"parameters":[]}},{"annotations":[],"serializedName":"hashed_password","default":{"kind":"just","value":""},"name":"hashed_password","typeExpr":{"typeRef":{"kind":"reference","value":{"moduleName":"common.strings","name":"StringNE"}},"parameters":[]}}]}},"name":"AppUser","version":{"kind":"nothing"}}};

export const snAppUser: ADL.ScopedName = {moduleName:"protoapp.db", name:"AppUser"};

export function texprAppUser(): ADL.ATypeExpr<AppUser> {
  return {value : {typeRef : {kind: "reference", value : snAppUser}, parameters : []}};
}

export type AppUserTable = common_db.WithId<AppUser>;

const AppUserTable_AST : ADL.ScopedDecl =
  {"moduleName":"protoapp.db","decl":{"annotations":[{"value":{"extra_sql":["grant select on app_user to admin_user;"],"uniqueness_constraints":[["email"]],"indexes":[["email"]]},"key":{"moduleName":"common.db","name":"DbTable"}}],"type_":{"kind":"newtype_","value":{"typeParams":[],"default":{"kind":"nothing"},"typeExpr":{"typeRef":{"kind":"reference","value":{"moduleName":"common.db","name":"WithId"}},"parameters":[{"typeRef":{"kind":"reference","value":{"moduleName":"protoapp.db","name":"AppUser"}},"parameters":[]}]}}},"name":"AppUserTable","version":{"kind":"nothing"}}};

export const snAppUserTable: ADL.ScopedName = {moduleName:"protoapp.db", name:"AppUserTable"};

export function texprAppUserTable(): ADL.ATypeExpr<AppUserTable> {
  return {value : {typeRef : {kind: "reference", value : snAppUserTable}, parameters : []}};
}

export type AppUserId = common_db.DbKey<AppUserTable>;

const AppUserId_AST : ADL.ScopedDecl =
  {"moduleName":"protoapp.db","decl":{"annotations":[],"type_":{"kind":"type_","value":{"typeParams":[],"typeExpr":{"typeRef":{"kind":"reference","value":{"moduleName":"common.db","name":"DbKey"}},"parameters":[{"typeRef":{"kind":"reference","value":{"moduleName":"protoapp.db","name":"AppUserTable"}},"parameters":[]}]}}},"name":"AppUserId","version":{"kind":"nothing"}}};

export const snAppUserId: ADL.ScopedName = {moduleName:"protoapp.db", name:"AppUserId"};

export function texprAppUserId(): ADL.ATypeExpr<AppUserId> {
  return {value : {typeRef : {kind: "reference", value : snAppUserId}, parameters : []}};
}

export interface Message {
  posted_at: common_time.Instant;
  posted_by: AppUserId;
  message: common_strings.StringML;
}

export function makeMessage(
  input: {
    posted_at: common_time.Instant,
    posted_by: AppUserId,
    message: common_strings.StringML,
  }
): Message {
  return {
    posted_at: input.posted_at,
    posted_by: input.posted_by,
    message: input.message,
  };
}

const Message_AST : ADL.ScopedDecl =
  {"moduleName":"protoapp.db","decl":{"annotations":[],"type_":{"kind":"struct_","value":{"typeParams":[],"fields":[{"annotations":[],"serializedName":"posted_at","default":{"kind":"nothing"},"name":"posted_at","typeExpr":{"typeRef":{"kind":"reference","value":{"moduleName":"common.time","name":"Instant"}},"parameters":[]}},{"annotations":[],"serializedName":"posted_by","default":{"kind":"nothing"},"name":"posted_by","typeExpr":{"typeRef":{"kind":"reference","value":{"moduleName":"protoapp.db","name":"AppUserId"}},"parameters":[]}},{"annotations":[],"serializedName":"message","default":{"kind":"nothing"},"name":"message","typeExpr":{"typeRef":{"kind":"reference","value":{"moduleName":"common.strings","name":"StringML"}},"parameters":[]}}]}},"name":"Message","version":{"kind":"nothing"}}};

export const snMessage: ADL.ScopedName = {moduleName:"protoapp.db", name:"Message"};

export function texprMessage(): ADL.ATypeExpr<Message> {
  return {value : {typeRef : {kind: "reference", value : snMessage}, parameters : []}};
}

export type MessageTable = common_db.WithId<Message>;

const MessageTable_AST : ADL.ScopedDecl =
  {"moduleName":"protoapp.db","decl":{"annotations":[{"value":{"extra_sql":["grant all on message to admin_user;"],"indexes":[["posted_at"]]},"key":{"moduleName":"common.db","name":"DbTable"}}],"type_":{"kind":"newtype_","value":{"typeParams":[],"default":{"kind":"nothing"},"typeExpr":{"typeRef":{"kind":"reference","value":{"moduleName":"common.db","name":"WithId"}},"parameters":[{"typeRef":{"kind":"reference","value":{"moduleName":"protoapp.db","name":"Message"}},"parameters":[]}]}}},"name":"MessageTable","version":{"kind":"nothing"}}};

export const snMessageTable: ADL.ScopedName = {moduleName:"protoapp.db", name:"MessageTable"};

export function texprMessageTable(): ADL.ATypeExpr<MessageTable> {
  return {value : {typeRef : {kind: "reference", value : snMessageTable}, parameters : []}};
}

export type MessageId = common_db.DbKey<MessageTable>;

const MessageId_AST : ADL.ScopedDecl =
  {"moduleName":"protoapp.db","decl":{"annotations":[],"type_":{"kind":"type_","value":{"typeParams":[],"typeExpr":{"typeRef":{"kind":"reference","value":{"moduleName":"common.db","name":"DbKey"}},"parameters":[{"typeRef":{"kind":"reference","value":{"moduleName":"protoapp.db","name":"MessageTable"}},"parameters":[]}]}}},"name":"MessageId","version":{"kind":"nothing"}}};

export const snMessageId: ADL.ScopedName = {moduleName:"protoapp.db", name:"MessageId"};

export function texprMessageId(): ADL.ATypeExpr<MessageId> {
  return {value : {typeRef : {kind: "reference", value : snMessageId}, parameters : []}};
}

export const _AST_MAP: { [key: string]: ADL.ScopedDecl } = {
  "protoapp.db.AppUser" : AppUser_AST,
  "protoapp.db.AppUserTable" : AppUserTable_AST,
  "protoapp.db.AppUserId" : AppUserId_AST,
  "protoapp.db.Message" : Message_AST,
  "protoapp.db.MessageTable" : MessageTable_AST,
  "protoapp.db.MessageId" : MessageId_AST
};
