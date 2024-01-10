/* @generated from adl module common.time */

import * as ADL from './../runtime/adl';
import * as common_strings from './strings';

/**
 * A instant in time, represented as milliseconds from
 * the epoch of "1970-01-01T00:00:00Z
 */
export type Instant = number;

const Instant_AST : ADL.ScopedDecl =
  {"moduleName":"common.time","decl":{"annotations":[{"value":"A instant in time, represented as milliseconds from\nthe epoch of \"1970-01-01T00:00:00Z\n","key":{"moduleName":"sys.annotations","name":"Doc"}}],"type_":{"kind":"newtype_","value":{"typeParams":[],"default":{"kind":"nothing"},"typeExpr":{"typeRef":{"kind":"primitive","value":"Int64"},"parameters":[]}}},"name":"Instant","version":{"kind":"nothing"}}};

export const snInstant: ADL.ScopedName = {moduleName:"common.time", name:"Instant"};

export function texprInstant(): ADL.ATypeExpr<Instant> {
  return {value : {typeRef : {kind: "reference", value : snInstant}, parameters : []}};
}

/**
 * A date in ISO8601 format
 */
export type LocalDate = string;

const LocalDate_AST : ADL.ScopedDecl =
  {"moduleName":"common.time","decl":{"annotations":[{"value":"A date in ISO8601 format\n","key":{"moduleName":"sys.annotations","name":"Doc"}}],"type_":{"kind":"newtype_","value":{"typeParams":[],"default":{"kind":"just","value":"1970-01-01"},"typeExpr":{"typeRef":{"kind":"primitive","value":"String"},"parameters":[]}}},"name":"LocalDate","version":{"kind":"nothing"}}};

export const snLocalDate: ADL.ScopedName = {moduleName:"common.time", name:"LocalDate"};

export function texprLocalDate(): ADL.ATypeExpr<LocalDate> {
  return {value : {typeRef : {kind: "reference", value : snLocalDate}, parameters : []}};
}

/**
 * A time in ISO8601 format
 */
export type LocalTime = string;

const LocalTime_AST : ADL.ScopedDecl =
  {"moduleName":"common.time","decl":{"annotations":[{"value":"A time in ISO8601 format\n","key":{"moduleName":"sys.annotations","name":"Doc"}}],"type_":{"kind":"newtype_","value":{"typeParams":[],"default":{"kind":"just","value":"00:00:00"},"typeExpr":{"typeRef":{"kind":"primitive","value":"String"},"parameters":[]}}},"name":"LocalTime","version":{"kind":"nothing"}}};

export const snLocalTime: ADL.ScopedName = {moduleName:"common.time", name:"LocalTime"};

export function texprLocalTime(): ADL.ATypeExpr<LocalTime> {
  return {value : {typeRef : {kind: "reference", value : snLocalTime}, parameters : []}};
}

/**
 * A datetime in ISO8601 format
 */
export type LocalDateTime = string;

const LocalDateTime_AST : ADL.ScopedDecl =
  {"moduleName":"common.time","decl":{"annotations":[{"value":"A datetime in ISO8601 format\n","key":{"moduleName":"sys.annotations","name":"Doc"}}],"type_":{"kind":"newtype_","value":{"typeParams":[],"default":{"kind":"just","value":"1970-01-01T00:00:00"},"typeExpr":{"typeRef":{"kind":"primitive","value":"String"},"parameters":[]}}},"name":"LocalDateTime","version":{"kind":"nothing"}}};

export const snLocalDateTime: ADL.ScopedName = {moduleName:"common.time", name:"LocalDateTime"};

export function texprLocalDateTime(): ADL.ATypeExpr<LocalDateTime> {
  return {value : {typeRef : {kind: "reference", value : snLocalDateTime}, parameters : []}};
}

export type DayOfWeek = 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday';
export const valuesDayOfWeek : DayOfWeek[] = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

const DayOfWeek_AST : ADL.ScopedDecl =
  {"moduleName":"common.time","decl":{"annotations":[{"value":"The day of the week\n","key":{"moduleName":"sys.annotations","name":"Doc"}}],"type_":{"kind":"union_","value":{"typeParams":[],"fields":[{"annotations":[],"serializedName":"monday","default":{"kind":"nothing"},"name":"monday","typeExpr":{"typeRef":{"kind":"primitive","value":"Void"},"parameters":[]}},{"annotations":[],"serializedName":"tuesday","default":{"kind":"nothing"},"name":"tuesday","typeExpr":{"typeRef":{"kind":"primitive","value":"Void"},"parameters":[]}},{"annotations":[],"serializedName":"wednesday","default":{"kind":"nothing"},"name":"wednesday","typeExpr":{"typeRef":{"kind":"primitive","value":"Void"},"parameters":[]}},{"annotations":[],"serializedName":"thursday","default":{"kind":"nothing"},"name":"thursday","typeExpr":{"typeRef":{"kind":"primitive","value":"Void"},"parameters":[]}},{"annotations":[],"serializedName":"friday","default":{"kind":"nothing"},"name":"friday","typeExpr":{"typeRef":{"kind":"primitive","value":"Void"},"parameters":[]}},{"annotations":[],"serializedName":"saturday","default":{"kind":"nothing"},"name":"saturday","typeExpr":{"typeRef":{"kind":"primitive","value":"Void"},"parameters":[]}},{"annotations":[],"serializedName":"sunday","default":{"kind":"nothing"},"name":"sunday","typeExpr":{"typeRef":{"kind":"primitive","value":"Void"},"parameters":[]}}]}},"name":"DayOfWeek","version":{"kind":"nothing"}}};

export const snDayOfWeek: ADL.ScopedName = {moduleName:"common.time", name:"DayOfWeek"};

export function texprDayOfWeek(): ADL.ATypeExpr<DayOfWeek> {
  return {value : {typeRef : {kind: "reference", value : snDayOfWeek}, parameters : []}};
}

/**
 * A duration in ISO8601 format
 */
export type Duration = string;

const Duration_AST : ADL.ScopedDecl =
  {"moduleName":"common.time","decl":{"annotations":[{"value":"A duration in ISO8601 format\n","key":{"moduleName":"sys.annotations","name":"Doc"}}],"type_":{"kind":"newtype_","value":{"typeParams":[],"default":{"kind":"just","value":"P1D"},"typeExpr":{"typeRef":{"kind":"primitive","value":"String"},"parameters":[]}}},"name":"Duration","version":{"kind":"nothing"}}};

export const snDuration: ADL.ScopedName = {moduleName:"common.time", name:"Duration"};

export function texprDuration(): ADL.ATypeExpr<Duration> {
  return {value : {typeRef : {kind: "reference", value : snDuration}, parameters : []}};
}

/**
 * An IANA timezone
 */
export type Timezone = common_strings.StringNE;

const Timezone_AST : ADL.ScopedDecl =
  {"moduleName":"common.time","decl":{"annotations":[{"value":"An IANA timezone\n","key":{"moduleName":"sys.annotations","name":"Doc"}}],"type_":{"kind":"newtype_","value":{"typeParams":[],"default":{"kind":"nothing"},"typeExpr":{"typeRef":{"kind":"reference","value":{"moduleName":"common.strings","name":"StringNE"}},"parameters":[]}}},"name":"Timezone","version":{"kind":"nothing"}}};

export const snTimezone: ADL.ScopedName = {moduleName:"common.time", name:"Timezone"};

export function texprTimezone(): ADL.ATypeExpr<Timezone> {
  return {value : {typeRef : {kind: "reference", value : snTimezone}, parameters : []}};
}

export const _AST_MAP: { [key: string]: ADL.ScopedDecl } = {
  "common.time.Instant" : Instant_AST,
  "common.time.LocalDate" : LocalDate_AST,
  "common.time.LocalTime" : LocalTime_AST,
  "common.time.LocalDateTime" : LocalDateTime_AST,
  "common.time.DayOfWeek" : DayOfWeek_AST,
  "common.time.Duration" : Duration_AST,
  "common.time.Timezone" : Timezone_AST
};
