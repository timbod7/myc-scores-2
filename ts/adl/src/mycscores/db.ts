/* @generated from adl module mycscores.db */

import * as ADL from '@adllang/adl-runtime';
import * as common_db from './../common/db';
import * as common_strings from './../common/strings';
import * as common_time from './../common/time';

export interface AppUser {
  fullname: common_strings.StringNE;
  email: common_strings.StringNE;
  is_admin: boolean;
  hashed_password: common_strings.StringNE;
}

export function makeAppUser(
  input: {
    fullname: common_strings.StringNE,
    email: common_strings.StringNE,
    is_admin: boolean,
    hashed_password?: common_strings.StringNE,
  }
): AppUser {
  return {
    fullname: input.fullname,
    email: input.email,
    is_admin: input.is_admin,
    hashed_password: input.hashed_password === undefined ? "" : input.hashed_password,
  };
}

const AppUser_AST : ADL.ScopedDecl =
  {"decl":{"annotations":[],"name":"AppUser","type_":{"kind":"struct_","value":{"fields":[{"annotations":[],"default":{"kind":"nothing"},"name":"fullname","serializedName":"fullname","typeExpr":{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"common.strings","name":"StringNE"}}}},{"annotations":[],"default":{"kind":"nothing"},"name":"email","serializedName":"email","typeExpr":{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"common.strings","name":"StringNE"}}}},{"annotations":[],"default":{"kind":"nothing"},"name":"is_admin","serializedName":"is_admin","typeExpr":{"parameters":[],"typeRef":{"kind":"primitive","value":"Bool"}}},{"annotations":[],"default":{"kind":"just","value":""},"name":"hashed_password","serializedName":"hashed_password","typeExpr":{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"common.strings","name":"StringNE"}}}}],"typeParams":[]}},"version":{"kind":"nothing"}},"moduleName":"mycscores.db"};

export const snAppUser: ADL.ScopedName = {moduleName:"mycscores.db", name:"AppUser"};

export function texprAppUser(): ADL.ATypeExpr<AppUser> {
  return {value : {typeRef : {kind: "reference", value : snAppUser}, parameters : []}};
}

export type AppUserTable = common_db.WithId<AppUser>;

const AppUserTable_AST : ADL.ScopedDecl =
  {"decl":{"annotations":[{"key":{"moduleName":"common.db","name":"DbTable"},"value":{"id_prefix":"U-","indexes":[["email"]],"uniqueness_constraints":[["email"]]}}],"name":"AppUserTable","type_":{"kind":"newtype_","value":{"default":{"kind":"nothing"},"typeExpr":{"parameters":[{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"mycscores.db","name":"AppUser"}}}],"typeRef":{"kind":"reference","value":{"moduleName":"common.db","name":"WithId"}}},"typeParams":[]}},"version":{"kind":"nothing"}},"moduleName":"mycscores.db"};

export const snAppUserTable: ADL.ScopedName = {moduleName:"mycscores.db", name:"AppUserTable"};

export function texprAppUserTable(): ADL.ATypeExpr<AppUserTable> {
  return {value : {typeRef : {kind: "reference", value : snAppUserTable}, parameters : []}};
}

export type AppUserId = common_db.DbKey<AppUserTable>;

const AppUserId_AST : ADL.ScopedDecl =
  {"decl":{"annotations":[],"name":"AppUserId","type_":{"kind":"type_","value":{"typeExpr":{"parameters":[{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"mycscores.db","name":"AppUserTable"}}}],"typeRef":{"kind":"reference","value":{"moduleName":"common.db","name":"DbKey"}}},"typeParams":[]}},"version":{"kind":"nothing"}},"moduleName":"mycscores.db"};

export const snAppUserId: ADL.ScopedName = {moduleName:"mycscores.db", name:"AppUserId"};

export function texprAppUserId(): ADL.ATypeExpr<AppUserId> {
  return {value : {typeRef : {kind: "reference", value : snAppUserId}, parameters : []}};
}

/**
 * Each season is a collection of series
 */
export interface Season {
  name: common_strings.StringNE;
}

export function makeSeason(
  input: {
    name: common_strings.StringNE,
  }
): Season {
  return {
    name: input.name,
  };
}

const Season_AST : ADL.ScopedDecl =
  {"decl":{"annotations":[{"key":{"moduleName":"sys.annotations","name":"Doc"},"value":"Each season is a collection of series\n"}],"name":"Season","type_":{"kind":"struct_","value":{"fields":[{"annotations":[],"default":{"kind":"nothing"},"name":"name","serializedName":"name","typeExpr":{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"common.strings","name":"StringNE"}}}}],"typeParams":[]}},"version":{"kind":"nothing"}},"moduleName":"mycscores.db"};

export const snSeason: ADL.ScopedName = {moduleName:"mycscores.db", name:"Season"};

export function texprSeason(): ADL.ATypeExpr<Season> {
  return {value : {typeRef : {kind: "reference", value : snSeason}, parameters : []}};
}

export type SeasonTable = common_db.WithId<Season>;

const SeasonTable_AST : ADL.ScopedDecl =
  {"decl":{"annotations":[{"key":{"moduleName":"common.db","name":"DbTable"},"value":{"id_prefix":"S-","label":["name"],"uniquenessConstraints":[["name"]]}}],"name":"SeasonTable","type_":{"kind":"newtype_","value":{"default":{"kind":"nothing"},"typeExpr":{"parameters":[{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"mycscores.db","name":"Season"}}}],"typeRef":{"kind":"reference","value":{"moduleName":"common.db","name":"WithId"}}},"typeParams":[]}},"version":{"kind":"nothing"}},"moduleName":"mycscores.db"};

export const snSeasonTable: ADL.ScopedName = {moduleName:"mycscores.db", name:"SeasonTable"};

export function texprSeasonTable(): ADL.ATypeExpr<SeasonTable> {
  return {value : {typeRef : {kind: "reference", value : snSeasonTable}, parameters : []}};
}

export type SeasonId = common_db.DbKey<SeasonTable>;

const SeasonId_AST : ADL.ScopedDecl =
  {"decl":{"annotations":[],"name":"SeasonId","type_":{"kind":"type_","value":{"typeExpr":{"parameters":[{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"mycscores.db","name":"SeasonTable"}}}],"typeRef":{"kind":"reference","value":{"moduleName":"common.db","name":"DbKey"}}},"typeParams":[]}},"version":{"kind":"nothing"}},"moduleName":"mycscores.db"};

export const snSeasonId: ADL.ScopedName = {moduleName:"mycscores.db", name:"SeasonId"};

export function texprSeasonId(): ADL.ATypeExpr<SeasonId> {
  return {value : {typeRef : {kind: "reference", value : snSeasonId}, parameters : []}};
}

/**
 * Each series is a collection of races
 */
export interface Series {
  season_id: SeasonId;
  name: common_strings.StringNE;
  abbreviation: common_strings.StringNE;
  is_handicap: boolean;
  handicap_system: (HandicapSystem|null);
  num_drops: number;
}

export function makeSeries(
  input: {
    season_id: SeasonId,
    name: common_strings.StringNE,
    abbreviation: common_strings.StringNE,
    is_handicap: boolean,
    handicap_system: (HandicapSystem|null),
    num_drops: number,
  }
): Series {
  return {
    season_id: input.season_id,
    name: input.name,
    abbreviation: input.abbreviation,
    is_handicap: input.is_handicap,
    handicap_system: input.handicap_system,
    num_drops: input.num_drops,
  };
}

const Series_AST : ADL.ScopedDecl =
  {"decl":{"annotations":[{"key":{"moduleName":"sys.annotations","name":"Doc"},"value":"Each series is a collection of races\n"}],"name":"Series","type_":{"kind":"struct_","value":{"fields":[{"annotations":[],"default":{"kind":"nothing"},"name":"season_id","serializedName":"season_id","typeExpr":{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"mycscores.db","name":"SeasonId"}}}},{"annotations":[],"default":{"kind":"nothing"},"name":"name","serializedName":"name","typeExpr":{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"common.strings","name":"StringNE"}}}},{"annotations":[],"default":{"kind":"nothing"},"name":"abbreviation","serializedName":"abbreviation","typeExpr":{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"common.strings","name":"StringNE"}}}},{"annotations":[],"default":{"kind":"nothing"},"name":"is_handicap","serializedName":"is_handicap","typeExpr":{"parameters":[],"typeRef":{"kind":"primitive","value":"Bool"}}},{"annotations":[],"default":{"kind":"nothing"},"name":"handicap_system","serializedName":"handicap_system","typeExpr":{"parameters":[{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"mycscores.db","name":"HandicapSystem"}}}],"typeRef":{"kind":"primitive","value":"Nullable"}}},{"annotations":[],"default":{"kind":"nothing"},"name":"num_drops","serializedName":"num_drops","typeExpr":{"parameters":[],"typeRef":{"kind":"primitive","value":"Word8"}}}],"typeParams":[]}},"version":{"kind":"nothing"}},"moduleName":"mycscores.db"};

export const snSeries: ADL.ScopedName = {moduleName:"mycscores.db", name:"Series"};

export function texprSeries(): ADL.ATypeExpr<Series> {
  return {value : {typeRef : {kind: "reference", value : snSeries}, parameters : []}};
}

export type HandicapSystem = 'v1' | 'v2';
export const valuesHandicapSystem : HandicapSystem[] = ['v1', 'v2'];

const HandicapSystem_AST : ADL.ScopedDecl =
  {"decl":{"annotations":[],"name":"HandicapSystem","type_":{"kind":"union_","value":{"fields":[{"annotations":[],"default":{"kind":"nothing"},"name":"v1","serializedName":"v1","typeExpr":{"parameters":[],"typeRef":{"kind":"primitive","value":"Void"}}},{"annotations":[],"default":{"kind":"nothing"},"name":"v2","serializedName":"v2","typeExpr":{"parameters":[],"typeRef":{"kind":"primitive","value":"Void"}}}],"typeParams":[]}},"version":{"kind":"nothing"}},"moduleName":"mycscores.db"};

export const snHandicapSystem: ADL.ScopedName = {moduleName:"mycscores.db", name:"HandicapSystem"};

export function texprHandicapSystem(): ADL.ATypeExpr<HandicapSystem> {
  return {value : {typeRef : {kind: "reference", value : snHandicapSystem}, parameters : []}};
}

export type SeriesTable = common_db.WithId<Series>;

const SeriesTable_AST : ADL.ScopedDecl =
  {"decl":{"annotations":[{"key":{"moduleName":"common.db","name":"DbTable"},"value":{"id_prefix":"S-","label":["abbreviation"],"uniquenessConstraints":[["seasonId","name"],["seasonId","abbreviation"]]}}],"name":"SeriesTable","type_":{"kind":"newtype_","value":{"default":{"kind":"nothing"},"typeExpr":{"parameters":[{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"mycscores.db","name":"Series"}}}],"typeRef":{"kind":"reference","value":{"moduleName":"common.db","name":"WithId"}}},"typeParams":[]}},"version":{"kind":"nothing"}},"moduleName":"mycscores.db"};

export const snSeriesTable: ADL.ScopedName = {moduleName:"mycscores.db", name:"SeriesTable"};

export function texprSeriesTable(): ADL.ATypeExpr<SeriesTable> {
  return {value : {typeRef : {kind: "reference", value : snSeriesTable}, parameters : []}};
}

export type SeriesId = common_db.DbKey<SeriesTable>;

const SeriesId_AST : ADL.ScopedDecl =
  {"decl":{"annotations":[],"name":"SeriesId","type_":{"kind":"type_","value":{"typeExpr":{"parameters":[{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"mycscores.db","name":"SeriesTable"}}}],"typeRef":{"kind":"reference","value":{"moduleName":"common.db","name":"DbKey"}}},"typeParams":[]}},"version":{"kind":"nothing"}},"moduleName":"mycscores.db"};

export const snSeriesId: ADL.ScopedName = {moduleName:"mycscores.db", name:"SeriesId"};

export function texprSeriesId(): ADL.ATypeExpr<SeriesId> {
  return {value : {typeRef : {kind: "reference", value : snSeriesId}, parameters : []}};
}

/**
 * A Race 
 */
export interface Race {
  scheduled_date: common_time.LocalDate;
  race_number: number;
  duty_officer: string;
}

export function makeRace(
  input: {
    scheduled_date: common_time.LocalDate,
    race_number: number,
    duty_officer?: string,
  }
): Race {
  return {
    scheduled_date: input.scheduled_date,
    race_number: input.race_number,
    duty_officer: input.duty_officer === undefined ? "" : input.duty_officer,
  };
}

const Race_AST : ADL.ScopedDecl =
  {"decl":{"annotations":[{"key":{"moduleName":"sys.annotations","name":"Doc"},"value":"A Race \n"}],"name":"Race","type_":{"kind":"struct_","value":{"fields":[{"annotations":[],"default":{"kind":"nothing"},"name":"scheduled_date","serializedName":"scheduled_date","typeExpr":{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"common.time","name":"LocalDate"}}}},{"annotations":[],"default":{"kind":"nothing"},"name":"race_number","serializedName":"race_number","typeExpr":{"parameters":[],"typeRef":{"kind":"primitive","value":"Word8"}}},{"annotations":[],"default":{"kind":"just","value":""},"name":"duty_officer","serializedName":"duty_officer","typeExpr":{"parameters":[],"typeRef":{"kind":"primitive","value":"String"}}}],"typeParams":[]}},"version":{"kind":"nothing"}},"moduleName":"mycscores.db"};

export const snRace: ADL.ScopedName = {moduleName:"mycscores.db", name:"Race"};

export function texprRace(): ADL.ATypeExpr<Race> {
  return {value : {typeRef : {kind: "reference", value : snRace}, parameters : []}};
}

export type RaceTable = common_db.WithId<Race>;

const RaceTable_AST : ADL.ScopedDecl =
  {"decl":{"annotations":[{"key":{"moduleName":"common.db","name":"DbTable"},"value":{"id_prefix":"R-","label":["scheduledDate","raceNumber"],"withIdPrimaryKey":true}}],"name":"RaceTable","type_":{"kind":"newtype_","value":{"default":{"kind":"nothing"},"typeExpr":{"parameters":[{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"mycscores.db","name":"Race"}}}],"typeRef":{"kind":"reference","value":{"moduleName":"common.db","name":"WithId"}}},"typeParams":[]}},"version":{"kind":"nothing"}},"moduleName":"mycscores.db"};

export const snRaceTable: ADL.ScopedName = {moduleName:"mycscores.db", name:"RaceTable"};

export function texprRaceTable(): ADL.ATypeExpr<RaceTable> {
  return {value : {typeRef : {kind: "reference", value : snRaceTable}, parameters : []}};
}

export type RaceId = common_db.DbKey<RaceTable>;

const RaceId_AST : ADL.ScopedDecl =
  {"decl":{"annotations":[],"name":"RaceId","type_":{"kind":"type_","value":{"typeExpr":{"parameters":[{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"mycscores.db","name":"RaceTable"}}}],"typeRef":{"kind":"reference","value":{"moduleName":"common.db","name":"DbKey"}}},"typeParams":[]}},"version":{"kind":"nothing"}},"moduleName":"mycscores.db"};

export const snRaceId: ADL.ScopedName = {moduleName:"mycscores.db", name:"RaceId"};

export function texprRaceId(): ADL.ATypeExpr<RaceId> {
  return {value : {typeRef : {kind: "reference", value : snRaceId}, parameters : []}};
}

/**
 * A Calendar entry, shown in the schedule
 * but otherwise has no effect
 */
export interface CalendarEntry {
  season_id: SeasonId;
  date: common_time.LocalDate;
  description: common_strings.StringNE;
}

export function makeCalendarEntry(
  input: {
    season_id: SeasonId,
    date: common_time.LocalDate,
    description: common_strings.StringNE,
  }
): CalendarEntry {
  return {
    season_id: input.season_id,
    date: input.date,
    description: input.description,
  };
}

const CalendarEntry_AST : ADL.ScopedDecl =
  {"decl":{"annotations":[{"key":{"moduleName":"sys.annotations","name":"Doc"},"value":"A Calendar entry, shown in the schedule\nbut otherwise has no effect\n"}],"name":"CalendarEntry","type_":{"kind":"struct_","value":{"fields":[{"annotations":[],"default":{"kind":"nothing"},"name":"season_id","serializedName":"season_id","typeExpr":{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"mycscores.db","name":"SeasonId"}}}},{"annotations":[],"default":{"kind":"nothing"},"name":"date","serializedName":"date","typeExpr":{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"common.time","name":"LocalDate"}}}},{"annotations":[],"default":{"kind":"nothing"},"name":"description","serializedName":"description","typeExpr":{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"common.strings","name":"StringNE"}}}}],"typeParams":[]}},"version":{"kind":"nothing"}},"moduleName":"mycscores.db"};

export const snCalendarEntry: ADL.ScopedName = {moduleName:"mycscores.db", name:"CalendarEntry"};

export function texprCalendarEntry(): ADL.ATypeExpr<CalendarEntry> {
  return {value : {typeRef : {kind: "reference", value : snCalendarEntry}, parameters : []}};
}

export type CalendarEntryTable = common_db.WithId<CalendarEntry>;

const CalendarEntryTable_AST : ADL.ScopedDecl =
  {"decl":{"annotations":[{"key":{"moduleName":"common.db","name":"DbTable"},"value":{"id_prefix":"CE-","label":["description"]}}],"name":"CalendarEntryTable","type_":{"kind":"newtype_","value":{"default":{"kind":"nothing"},"typeExpr":{"parameters":[{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"mycscores.db","name":"CalendarEntry"}}}],"typeRef":{"kind":"reference","value":{"moduleName":"common.db","name":"WithId"}}},"typeParams":[]}},"version":{"kind":"nothing"}},"moduleName":"mycscores.db"};

export const snCalendarEntryTable: ADL.ScopedName = {moduleName:"mycscores.db", name:"CalendarEntryTable"};

export function texprCalendarEntryTable(): ADL.ATypeExpr<CalendarEntryTable> {
  return {value : {typeRef : {kind: "reference", value : snCalendarEntryTable}, parameters : []}};
}

export type CalendarEntryId = common_db.DbKey<CalendarEntryTable>;

const CalendarEntryId_AST : ADL.ScopedDecl =
  {"decl":{"annotations":[],"name":"CalendarEntryId","type_":{"kind":"type_","value":{"typeExpr":{"parameters":[{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"mycscores.db","name":"CalendarEntryTable"}}}],"typeRef":{"kind":"reference","value":{"moduleName":"common.db","name":"DbKey"}}},"typeParams":[]}},"version":{"kind":"nothing"}},"moduleName":"mycscores.db"};

export const snCalendarEntryId: ADL.ScopedName = {moduleName:"mycscores.db", name:"CalendarEntryId"};

export function texprCalendarEntryId(): ADL.ATypeExpr<CalendarEntryId> {
  return {value : {typeRef : {kind: "reference", value : snCalendarEntryId}, parameters : []}};
}

export interface RaceStart {
  race_id: RaceId;
  date: common_time.LocalDate;
  abandoned: boolean;
  start_time: common_time.LocalTime;
  conditions: common_strings.StringML;
  notes: common_strings.StringML;
}

export function makeRaceStart(
  input: {
    race_id: RaceId,
    date: common_time.LocalDate,
    abandoned: boolean,
    start_time: common_time.LocalTime,
    conditions: common_strings.StringML,
    notes: common_strings.StringML,
  }
): RaceStart {
  return {
    race_id: input.race_id,
    date: input.date,
    abandoned: input.abandoned,
    start_time: input.start_time,
    conditions: input.conditions,
    notes: input.notes,
  };
}

const RaceStart_AST : ADL.ScopedDecl =
  {"decl":{"annotations":[],"name":"RaceStart","type_":{"kind":"struct_","value":{"fields":[{"annotations":[],"default":{"kind":"nothing"},"name":"race_id","serializedName":"race_id","typeExpr":{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"mycscores.db","name":"RaceId"}}}},{"annotations":[],"default":{"kind":"nothing"},"name":"date","serializedName":"date","typeExpr":{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"common.time","name":"LocalDate"}}}},{"annotations":[],"default":{"kind":"nothing"},"name":"abandoned","serializedName":"abandoned","typeExpr":{"parameters":[],"typeRef":{"kind":"primitive","value":"Bool"}}},{"annotations":[],"default":{"kind":"nothing"},"name":"start_time","serializedName":"start_time","typeExpr":{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"common.time","name":"LocalTime"}}}},{"annotations":[],"default":{"kind":"nothing"},"name":"conditions","serializedName":"conditions","typeExpr":{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"common.strings","name":"StringML"}}}},{"annotations":[],"default":{"kind":"nothing"},"name":"notes","serializedName":"notes","typeExpr":{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"common.strings","name":"StringML"}}}}],"typeParams":[]}},"version":{"kind":"nothing"}},"moduleName":"mycscores.db"};

export const snRaceStart: ADL.ScopedName = {moduleName:"mycscores.db", name:"RaceStart"};

export function texprRaceStart(): ADL.ATypeExpr<RaceStart> {
  return {value : {typeRef : {kind: "reference", value : snRaceStart}, parameters : []}};
}

export type RaceStartTable = common_db.WithId<RaceStart>;

const RaceStartTable_AST : ADL.ScopedDecl =
  {"decl":{"annotations":[{"key":{"moduleName":"common.db","name":"DbTable"},"value":{"id_prefix":"RS-","uniquenessConstraints":[["raceId"]]}}],"name":"RaceStartTable","type_":{"kind":"newtype_","value":{"default":{"kind":"nothing"},"typeExpr":{"parameters":[{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"mycscores.db","name":"RaceStart"}}}],"typeRef":{"kind":"reference","value":{"moduleName":"common.db","name":"WithId"}}},"typeParams":[]}},"version":{"kind":"nothing"}},"moduleName":"mycscores.db"};

export const snRaceStartTable: ADL.ScopedName = {moduleName:"mycscores.db", name:"RaceStartTable"};

export function texprRaceStartTable(): ADL.ATypeExpr<RaceStartTable> {
  return {value : {typeRef : {kind: "reference", value : snRaceStartTable}, parameters : []}};
}

export type RaceStartId = common_db.DbKey<RaceStartTable>;

const RaceStartId_AST : ADL.ScopedDecl =
  {"decl":{"annotations":[],"name":"RaceStartId","type_":{"kind":"type_","value":{"typeExpr":{"parameters":[{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"mycscores.db","name":"RaceStartTable"}}}],"typeRef":{"kind":"reference","value":{"moduleName":"common.db","name":"DbKey"}}},"typeParams":[]}},"version":{"kind":"nothing"}},"moduleName":"mycscores.db"};

export const snRaceStartId: ADL.ScopedName = {moduleName:"mycscores.db", name:"RaceStartId"};

export function texprRaceStartId(): ADL.ATypeExpr<RaceStartId> {
  return {value : {typeRef : {kind: "reference", value : snRaceStartId}, parameters : []}};
}

/**
 * A race in a series
 */
export interface Event {
  abbreviation: common_strings.StringNE;
  series_id: SeriesId;
  race_id: RaceId;
  race_type: RaceType;
}

export function makeEvent(
  input: {
    abbreviation: common_strings.StringNE,
    series_id: SeriesId,
    race_id: RaceId,
    race_type: RaceType,
  }
): Event {
  return {
    abbreviation: input.abbreviation,
    series_id: input.series_id,
    race_id: input.race_id,
    race_type: input.race_type,
  };
}

const Event_AST : ADL.ScopedDecl =
  {"decl":{"annotations":[{"key":{"moduleName":"sys.annotations","name":"Doc"},"value":"A race in a series\n"}],"name":"Event","type_":{"kind":"struct_","value":{"fields":[{"annotations":[],"default":{"kind":"nothing"},"name":"abbreviation","serializedName":"abbreviation","typeExpr":{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"common.strings","name":"StringNE"}}}},{"annotations":[],"default":{"kind":"nothing"},"name":"series_id","serializedName":"series_id","typeExpr":{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"mycscores.db","name":"SeriesId"}}}},{"annotations":[],"default":{"kind":"nothing"},"name":"race_id","serializedName":"race_id","typeExpr":{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"mycscores.db","name":"RaceId"}}}},{"annotations":[],"default":{"kind":"nothing"},"name":"race_type","serializedName":"race_type","typeExpr":{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"mycscores.db","name":"RaceType"}}}}],"typeParams":[]}},"version":{"kind":"nothing"}},"moduleName":"mycscores.db"};

export const snEvent: ADL.ScopedName = {moduleName:"mycscores.db", name:"Event"};

export function texprEvent(): ADL.ATypeExpr<Event> {
  return {value : {typeRef : {kind: "reference", value : snEvent}, parameters : []}};
}

export type EventTable = common_db.WithId<Event>;

const EventTable_AST : ADL.ScopedDecl =
  {"decl":{"annotations":[{"key":{"moduleName":"common.db","name":"DbTable"},"value":{"id_prefix":"E-","label":["abbreviation"],"uniquenessConstraints":[["seriesId","raceId"]]}}],"name":"EventTable","type_":{"kind":"newtype_","value":{"default":{"kind":"nothing"},"typeExpr":{"parameters":[{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"mycscores.db","name":"Event"}}}],"typeRef":{"kind":"reference","value":{"moduleName":"common.db","name":"WithId"}}},"typeParams":[]}},"version":{"kind":"nothing"}},"moduleName":"mycscores.db"};

export const snEventTable: ADL.ScopedName = {moduleName:"mycscores.db", name:"EventTable"};

export function texprEventTable(): ADL.ATypeExpr<EventTable> {
  return {value : {typeRef : {kind: "reference", value : snEventTable}, parameters : []}};
}

export type EventId = common_db.DbKey<EventTable>;

const EventId_AST : ADL.ScopedDecl =
  {"decl":{"annotations":[],"name":"EventId","type_":{"kind":"type_","value":{"typeExpr":{"parameters":[{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"mycscores.db","name":"EventTable"}}}],"typeRef":{"kind":"reference","value":{"moduleName":"common.db","name":"DbKey"}}},"typeParams":[]}},"version":{"kind":"nothing"}},"moduleName":"mycscores.db"};

export const snEventId: ADL.ScopedName = {moduleName:"mycscores.db", name:"EventId"};

export function texprEventId(): ADL.ATypeExpr<EventId> {
  return {value : {typeRef : {kind: "reference", value : snEventId}, parameters : []}};
}

export type RaceType = 'scratch' | 'pursuit';
export const valuesRaceType : RaceType[] = ['scratch', 'pursuit'];

const RaceType_AST : ADL.ScopedDecl =
  {"decl":{"annotations":[],"name":"RaceType","type_":{"kind":"union_","value":{"fields":[{"annotations":[],"default":{"kind":"nothing"},"name":"scratch","serializedName":"scratch","typeExpr":{"parameters":[],"typeRef":{"kind":"primitive","value":"Void"}}},{"annotations":[],"default":{"kind":"nothing"},"name":"pursuit","serializedName":"pursuit","typeExpr":{"parameters":[],"typeRef":{"kind":"primitive","value":"Void"}}}],"typeParams":[]}},"version":{"kind":"nothing"}},"moduleName":"mycscores.db"};

export const snRaceType: ADL.ScopedName = {moduleName:"mycscores.db", name:"RaceType"};

export function texprRaceType(): ADL.ATypeExpr<RaceType> {
  return {value : {typeRef : {kind: "reference", value : snRaceType}, parameters : []}};
}

/**
 * Personal and boat details for an entrant
 */
export interface Entrant {
  season_id: SeasonId;
  entrant_name: common_strings.StringNE;
  boat_name: common_strings.StringNE;
  sail_number: common_strings.StringNE;
  yardstick: number;
  initial_handicap: number;
}

export function makeEntrant(
  input: {
    season_id: SeasonId,
    entrant_name: common_strings.StringNE,
    boat_name: common_strings.StringNE,
    sail_number: common_strings.StringNE,
    yardstick: number,
    initial_handicap: number,
  }
): Entrant {
  return {
    season_id: input.season_id,
    entrant_name: input.entrant_name,
    boat_name: input.boat_name,
    sail_number: input.sail_number,
    yardstick: input.yardstick,
    initial_handicap: input.initial_handicap,
  };
}

const Entrant_AST : ADL.ScopedDecl =
  {"decl":{"annotations":[{"key":{"moduleName":"sys.annotations","name":"Doc"},"value":"Personal and boat details for an entrant\n"}],"name":"Entrant","type_":{"kind":"struct_","value":{"fields":[{"annotations":[],"default":{"kind":"nothing"},"name":"season_id","serializedName":"season_id","typeExpr":{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"mycscores.db","name":"SeasonId"}}}},{"annotations":[],"default":{"kind":"nothing"},"name":"entrant_name","serializedName":"entrant_name","typeExpr":{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"common.strings","name":"StringNE"}}}},{"annotations":[],"default":{"kind":"nothing"},"name":"boat_name","serializedName":"boat_name","typeExpr":{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"common.strings","name":"StringNE"}}}},{"annotations":[],"default":{"kind":"nothing"},"name":"sail_number","serializedName":"sail_number","typeExpr":{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"common.strings","name":"StringNE"}}}},{"annotations":[],"default":{"kind":"nothing"},"name":"yardstick","serializedName":"yardstick","typeExpr":{"parameters":[],"typeRef":{"kind":"primitive","value":"Double"}}},{"annotations":[],"default":{"kind":"nothing"},"name":"initial_handicap","serializedName":"initial_handicap","typeExpr":{"parameters":[],"typeRef":{"kind":"primitive","value":"Double"}}}],"typeParams":[]}},"version":{"kind":"nothing"}},"moduleName":"mycscores.db"};

export const snEntrant: ADL.ScopedName = {moduleName:"mycscores.db", name:"Entrant"};

export function texprEntrant(): ADL.ATypeExpr<Entrant> {
  return {value : {typeRef : {kind: "reference", value : snEntrant}, parameters : []}};
}

export type EntrantTable = common_db.WithId<Entrant>;

const EntrantTable_AST : ADL.ScopedDecl =
  {"decl":{"annotations":[{"key":{"moduleName":"common.db","name":"DbTable"},"value":{"id_prefix":"E-","label":["entrantName"],"uniquenessConstraints":[["entrantName"]]}}],"name":"EntrantTable","type_":{"kind":"newtype_","value":{"default":{"kind":"nothing"},"typeExpr":{"parameters":[{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"mycscores.db","name":"Entrant"}}}],"typeRef":{"kind":"reference","value":{"moduleName":"common.db","name":"WithId"}}},"typeParams":[]}},"version":{"kind":"nothing"}},"moduleName":"mycscores.db"};

export const snEntrantTable: ADL.ScopedName = {moduleName:"mycscores.db", name:"EntrantTable"};

export function texprEntrantTable(): ADL.ATypeExpr<EntrantTable> {
  return {value : {typeRef : {kind: "reference", value : snEntrantTable}, parameters : []}};
}

export type EntrantId = common_db.DbKey<EntrantTable>;

const EntrantId_AST : ADL.ScopedDecl =
  {"decl":{"annotations":[],"name":"EntrantId","type_":{"kind":"type_","value":{"typeExpr":{"parameters":[{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"mycscores.db","name":"EntrantTable"}}}],"typeRef":{"kind":"reference","value":{"moduleName":"common.db","name":"DbKey"}}},"typeParams":[]}},"version":{"kind":"nothing"}},"moduleName":"mycscores.db"};

export const snEntrantId: ADL.ScopedName = {moduleName:"mycscores.db", name:"EntrantId"};

export function texprEntrantId(): ADL.ATypeExpr<EntrantId> {
  return {value : {typeRef : {kind: "reference", value : snEntrantId}, parameters : []}};
}

/**
 * An entrants results in a single race
 */
export interface RaceResult {
  race_id: RaceId;
  entrant_id: EntrantId;
  result: RResult<common_time.LocalTime>;
}

export function makeRaceResult(
  input: {
    race_id: RaceId,
    entrant_id: EntrantId,
    result: RResult<common_time.LocalTime>,
  }
): RaceResult {
  return {
    race_id: input.race_id,
    entrant_id: input.entrant_id,
    result: input.result,
  };
}

const RaceResult_AST : ADL.ScopedDecl =
  {"decl":{"annotations":[{"key":{"moduleName":"sys.annotations","name":"Doc"},"value":"An entrants results in a single race\n"}],"name":"RaceResult","type_":{"kind":"struct_","value":{"fields":[{"annotations":[],"default":{"kind":"nothing"},"name":"race_id","serializedName":"race_id","typeExpr":{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"mycscores.db","name":"RaceId"}}}},{"annotations":[],"default":{"kind":"nothing"},"name":"entrant_id","serializedName":"entrant_id","typeExpr":{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"mycscores.db","name":"EntrantId"}}}},{"annotations":[],"default":{"kind":"nothing"},"name":"result","serializedName":"result","typeExpr":{"parameters":[{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"common.time","name":"LocalTime"}}}],"typeRef":{"kind":"reference","value":{"moduleName":"mycscores.db","name":"RResult"}}}}],"typeParams":[]}},"version":{"kind":"nothing"}},"moduleName":"mycscores.db"};

export const snRaceResult: ADL.ScopedName = {moduleName:"mycscores.db", name:"RaceResult"};

export function texprRaceResult(): ADL.ATypeExpr<RaceResult> {
  return {value : {typeRef : {kind: "reference", value : snRaceResult}, parameters : []}};
}

export type RaceResultTable = common_db.WithId<RaceResult>;

const RaceResultTable_AST : ADL.ScopedDecl =
  {"decl":{"annotations":[{"key":{"moduleName":"common.db","name":"DbTable"},"value":{"id_prefix":"RR-","uniquenessConstraints":[["raceId","entrantId"]]}}],"name":"RaceResultTable","type_":{"kind":"newtype_","value":{"default":{"kind":"nothing"},"typeExpr":{"parameters":[{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"mycscores.db","name":"RaceResult"}}}],"typeRef":{"kind":"reference","value":{"moduleName":"common.db","name":"WithId"}}},"typeParams":[]}},"version":{"kind":"nothing"}},"moduleName":"mycscores.db"};

export const snRaceResultTable: ADL.ScopedName = {moduleName:"mycscores.db", name:"RaceResultTable"};

export function texprRaceResultTable(): ADL.ATypeExpr<RaceResultTable> {
  return {value : {typeRef : {kind: "reference", value : snRaceResultTable}, parameters : []}};
}

export type RaceResultId = common_db.DbKey<RaceResultTable>;

const RaceResultId_AST : ADL.ScopedDecl =
  {"decl":{"annotations":[],"name":"RaceResultId","type_":{"kind":"type_","value":{"typeExpr":{"parameters":[{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"mycscores.db","name":"RaceResultTable"}}}],"typeRef":{"kind":"reference","value":{"moduleName":"common.db","name":"DbKey"}}},"typeParams":[]}},"version":{"kind":"nothing"}},"moduleName":"mycscores.db"};

export const snRaceResultId: ADL.ScopedName = {moduleName:"mycscores.db", name:"RaceResultId"};

export function texprRaceResultId(): ADL.ATypeExpr<RaceResultId> {
  return {value : {typeRef : {kind: "reference", value : snRaceResultId}, parameters : []}};
}

/**
 * An entrants result in a single event
 */
export interface EventResult {
  entrant_id: EntrantId;
  event_id: EventId;
  entrant_name: common_strings.StringNE;
  boat_name: common_strings.StringNE;
  sail_number: common_strings.StringNE;
  yardstick: number;
  handicap: number;
  handicap_secs: number;
  finish_time: RResult<common_time.LocalTime>;
  elapsed_time: RResult<Duration>;
  elapsed_time_yardstick: RResult<Duration>;
  elapsed_time_handicap: RResult<Duration>;
  score: number;
  handicap_change: number;
  handicap_new: number;
}

export function makeEventResult(
  input: {
    entrant_id: EntrantId,
    event_id: EventId,
    entrant_name: common_strings.StringNE,
    boat_name: common_strings.StringNE,
    sail_number: common_strings.StringNE,
    yardstick: number,
    handicap: number,
    handicap_secs: number,
    finish_time: RResult<common_time.LocalTime>,
    elapsed_time: RResult<Duration>,
    elapsed_time_yardstick: RResult<Duration>,
    elapsed_time_handicap: RResult<Duration>,
    score: number,
    handicap_change: number,
    handicap_new: number,
  }
): EventResult {
  return {
    entrant_id: input.entrant_id,
    event_id: input.event_id,
    entrant_name: input.entrant_name,
    boat_name: input.boat_name,
    sail_number: input.sail_number,
    yardstick: input.yardstick,
    handicap: input.handicap,
    handicap_secs: input.handicap_secs,
    finish_time: input.finish_time,
    elapsed_time: input.elapsed_time,
    elapsed_time_yardstick: input.elapsed_time_yardstick,
    elapsed_time_handicap: input.elapsed_time_handicap,
    score: input.score,
    handicap_change: input.handicap_change,
    handicap_new: input.handicap_new,
  };
}

const EventResult_AST : ADL.ScopedDecl =
  {"decl":{"annotations":[{"key":{"moduleName":"sys.annotations","name":"Doc"},"value":"An entrants result in a single event\n"}],"name":"EventResult","type_":{"kind":"struct_","value":{"fields":[{"annotations":[],"default":{"kind":"nothing"},"name":"entrant_id","serializedName":"entrant_id","typeExpr":{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"mycscores.db","name":"EntrantId"}}}},{"annotations":[],"default":{"kind":"nothing"},"name":"event_id","serializedName":"event_id","typeExpr":{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"mycscores.db","name":"EventId"}}}},{"annotations":[],"default":{"kind":"nothing"},"name":"entrant_name","serializedName":"entrant_name","typeExpr":{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"common.strings","name":"StringNE"}}}},{"annotations":[],"default":{"kind":"nothing"},"name":"boat_name","serializedName":"boat_name","typeExpr":{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"common.strings","name":"StringNE"}}}},{"annotations":[],"default":{"kind":"nothing"},"name":"sail_number","serializedName":"sail_number","typeExpr":{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"common.strings","name":"StringNE"}}}},{"annotations":[],"default":{"kind":"nothing"},"name":"yardstick","serializedName":"yardstick","typeExpr":{"parameters":[],"typeRef":{"kind":"primitive","value":"Double"}}},{"annotations":[],"default":{"kind":"nothing"},"name":"handicap","serializedName":"handicap","typeExpr":{"parameters":[],"typeRef":{"kind":"primitive","value":"Double"}}},{"annotations":[],"default":{"kind":"nothing"},"name":"handicap_secs","serializedName":"handicap_secs","typeExpr":{"parameters":[],"typeRef":{"kind":"primitive","value":"Double"}}},{"annotations":[],"default":{"kind":"nothing"},"name":"finish_time","serializedName":"finish_time","typeExpr":{"parameters":[{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"common.time","name":"LocalTime"}}}],"typeRef":{"kind":"reference","value":{"moduleName":"mycscores.db","name":"RResult"}}}},{"annotations":[],"default":{"kind":"nothing"},"name":"elapsed_time","serializedName":"elapsed_time","typeExpr":{"parameters":[{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"mycscores.db","name":"Duration"}}}],"typeRef":{"kind":"reference","value":{"moduleName":"mycscores.db","name":"RResult"}}}},{"annotations":[],"default":{"kind":"nothing"},"name":"elapsed_time_yardstick","serializedName":"elapsed_time_yardstick","typeExpr":{"parameters":[{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"mycscores.db","name":"Duration"}}}],"typeRef":{"kind":"reference","value":{"moduleName":"mycscores.db","name":"RResult"}}}},{"annotations":[],"default":{"kind":"nothing"},"name":"elapsed_time_handicap","serializedName":"elapsed_time_handicap","typeExpr":{"parameters":[{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"mycscores.db","name":"Duration"}}}],"typeRef":{"kind":"reference","value":{"moduleName":"mycscores.db","name":"RResult"}}}},{"annotations":[],"default":{"kind":"nothing"},"name":"score","serializedName":"score","typeExpr":{"parameters":[],"typeRef":{"kind":"primitive","value":"Word16"}}},{"annotations":[],"default":{"kind":"nothing"},"name":"handicap_change","serializedName":"handicap_change","typeExpr":{"parameters":[],"typeRef":{"kind":"primitive","value":"Double"}}},{"annotations":[],"default":{"kind":"nothing"},"name":"handicap_new","serializedName":"handicap_new","typeExpr":{"parameters":[],"typeRef":{"kind":"primitive","value":"Double"}}}],"typeParams":[]}},"version":{"kind":"nothing"}},"moduleName":"mycscores.db"};

export const snEventResult: ADL.ScopedName = {moduleName:"mycscores.db", name:"EventResult"};

export function texprEventResult(): ADL.ATypeExpr<EventResult> {
  return {value : {typeRef : {kind: "reference", value : snEventResult}, parameters : []}};
}

export type EventResultTable = common_db.WithId<EventResult>;

const EventResultTable_AST : ADL.ScopedDecl =
  {"decl":{"annotations":[{"key":{"moduleName":"common.db","name":"DbTable"},"value":{"id_prefix":"ER-","uniquenessConstraints":[["eventId","entrantId"]]}}],"name":"EventResultTable","type_":{"kind":"newtype_","value":{"default":{"kind":"nothing"},"typeExpr":{"parameters":[{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"mycscores.db","name":"EventResult"}}}],"typeRef":{"kind":"reference","value":{"moduleName":"common.db","name":"WithId"}}},"typeParams":[]}},"version":{"kind":"nothing"}},"moduleName":"mycscores.db"};

export const snEventResultTable: ADL.ScopedName = {moduleName:"mycscores.db", name:"EventResultTable"};

export function texprEventResultTable(): ADL.ATypeExpr<EventResultTable> {
  return {value : {typeRef : {kind: "reference", value : snEventResultTable}, parameters : []}};
}

export type EventResultId = common_db.DbKey<EventResultTable>;

const EventResultId_AST : ADL.ScopedDecl =
  {"decl":{"annotations":[],"name":"EventResultId","type_":{"kind":"type_","value":{"typeExpr":{"parameters":[{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"mycscores.db","name":"EventResultTable"}}}],"typeRef":{"kind":"reference","value":{"moduleName":"common.db","name":"DbKey"}}},"typeParams":[]}},"version":{"kind":"nothing"}},"moduleName":"mycscores.db"};

export const snEventResultId: ADL.ScopedName = {moduleName:"mycscores.db", name:"EventResultId"};

export function texprEventResultId(): ADL.ATypeExpr<EventResultId> {
  return {value : {typeRef : {kind: "reference", value : snEventResultId}, parameters : []}};
}

/**
 * Overide a handicap before a specifed race
 */
export interface HandicapOverride {
  race_id: RaceId;
  entrant_id: EntrantId;
  handicap_new: number;
}

export function makeHandicapOverride(
  input: {
    race_id: RaceId,
    entrant_id: EntrantId,
    handicap_new: number,
  }
): HandicapOverride {
  return {
    race_id: input.race_id,
    entrant_id: input.entrant_id,
    handicap_new: input.handicap_new,
  };
}

const HandicapOverride_AST : ADL.ScopedDecl =
  {"decl":{"annotations":[{"key":{"moduleName":"sys.annotations","name":"Doc"},"value":"Overide a handicap before a specifed race\n"}],"name":"HandicapOverride","type_":{"kind":"struct_","value":{"fields":[{"annotations":[],"default":{"kind":"nothing"},"name":"race_id","serializedName":"race_id","typeExpr":{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"mycscores.db","name":"RaceId"}}}},{"annotations":[],"default":{"kind":"nothing"},"name":"entrant_id","serializedName":"entrant_id","typeExpr":{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"mycscores.db","name":"EntrantId"}}}},{"annotations":[],"default":{"kind":"nothing"},"name":"handicap_new","serializedName":"handicap_new","typeExpr":{"parameters":[],"typeRef":{"kind":"primitive","value":"Double"}}}],"typeParams":[]}},"version":{"kind":"nothing"}},"moduleName":"mycscores.db"};

export const snHandicapOverride: ADL.ScopedName = {moduleName:"mycscores.db", name:"HandicapOverride"};

export function texprHandicapOverride(): ADL.ATypeExpr<HandicapOverride> {
  return {value : {typeRef : {kind: "reference", value : snHandicapOverride}, parameters : []}};
}

export type HandicapOverrideTable = common_db.WithId<HandicapOverride>;

const HandicapOverrideTable_AST : ADL.ScopedDecl =
  {"decl":{"annotations":[{"key":{"moduleName":"common.db","name":"DbTable"},"value":{"id_prefix":"HO-","uniquenessConstraints":[["raceId","entrantId"]]}}],"name":"HandicapOverrideTable","type_":{"kind":"newtype_","value":{"default":{"kind":"nothing"},"typeExpr":{"parameters":[{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"mycscores.db","name":"HandicapOverride"}}}],"typeRef":{"kind":"reference","value":{"moduleName":"common.db","name":"WithId"}}},"typeParams":[]}},"version":{"kind":"nothing"}},"moduleName":"mycscores.db"};

export const snHandicapOverrideTable: ADL.ScopedName = {moduleName:"mycscores.db", name:"HandicapOverrideTable"};

export function texprHandicapOverrideTable(): ADL.ATypeExpr<HandicapOverrideTable> {
  return {value : {typeRef : {kind: "reference", value : snHandicapOverrideTable}, parameters : []}};
}

export type HandicapOverrideId = common_db.DbKey<HandicapOverrideTable>;

const HandicapOverrideId_AST : ADL.ScopedDecl =
  {"decl":{"annotations":[],"name":"HandicapOverrideId","type_":{"kind":"type_","value":{"typeExpr":{"parameters":[{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"mycscores.db","name":"HandicapOverrideTable"}}}],"typeRef":{"kind":"reference","value":{"moduleName":"common.db","name":"DbKey"}}},"typeParams":[]}},"version":{"kind":"nothing"}},"moduleName":"mycscores.db"};

export const snHandicapOverrideId: ADL.ScopedName = {moduleName:"mycscores.db", name:"HandicapOverrideId"};

export function texprHandicapOverrideId(): ADL.ATypeExpr<HandicapOverrideId> {
  return {value : {typeRef : {kind: "reference", value : snHandicapOverrideId}, parameters : []}};
}

export interface RResult_Finished<T> {
  kind: 'finished';
  value: T;
}
export interface RResult_Dnc<_T> {
  kind: 'dnc';
}
export interface RResult_Dns<_T> {
  kind: 'dns';
}
export interface RResult_Dnf<_T> {
  kind: 'dnf';
}
export interface RResult_Dsq<_T> {
  kind: 'dsq';
}
export interface RResult_Avg<_T> {
  kind: 'avg';
}

export type RResult<T> = RResult_Finished<T> | RResult_Dnc<T> | RResult_Dns<T> | RResult_Dnf<T> | RResult_Dsq<T> | RResult_Avg<T>;

export interface RResultOpts<T> {
  finished: T;
  dnc: null;
  dns: null;
  dnf: null;
  dsq: null;
  avg: null;
}

export function makeRResult<T, K extends keyof RResultOpts<T>>(kind: K, value: RResultOpts<T>[K]) { return {kind, value}; }

const RResult_AST : ADL.ScopedDecl =
  {"decl":{"annotations":[],"name":"RResult","type_":{"kind":"union_","value":{"fields":[{"annotations":[],"default":{"kind":"nothing"},"name":"finished","serializedName":"finished","typeExpr":{"parameters":[],"typeRef":{"kind":"typeParam","value":"T"}}},{"annotations":[],"default":{"kind":"nothing"},"name":"dnc","serializedName":"dnc","typeExpr":{"parameters":[],"typeRef":{"kind":"primitive","value":"Void"}}},{"annotations":[],"default":{"kind":"nothing"},"name":"dns","serializedName":"dns","typeExpr":{"parameters":[],"typeRef":{"kind":"primitive","value":"Void"}}},{"annotations":[],"default":{"kind":"nothing"},"name":"dnf","serializedName":"dnf","typeExpr":{"parameters":[],"typeRef":{"kind":"primitive","value":"Void"}}},{"annotations":[],"default":{"kind":"nothing"},"name":"dsq","serializedName":"dsq","typeExpr":{"parameters":[],"typeRef":{"kind":"primitive","value":"Void"}}},{"annotations":[],"default":{"kind":"nothing"},"name":"avg","serializedName":"avg","typeExpr":{"parameters":[],"typeRef":{"kind":"primitive","value":"Void"}}}],"typeParams":["T"]}},"version":{"kind":"nothing"}},"moduleName":"mycscores.db"};

export const snRResult: ADL.ScopedName = {moduleName:"mycscores.db", name:"RResult"};

export function texprRResult<T>(texprT : ADL.ATypeExpr<T>): ADL.ATypeExpr<RResult<T>> {
  return {value : {typeRef : {kind: "reference", value : {moduleName : "mycscores.db",name : "RResult"}}, parameters : [texprT.value]}};
}

/**
 * Time duration in seconds
 */
export type Duration = number;

const Duration_AST : ADL.ScopedDecl =
  {"decl":{"annotations":[{"key":{"moduleName":"sys.annotations","name":"Doc"},"value":"Time duration in seconds\n"}],"name":"Duration","type_":{"kind":"type_","value":{"typeExpr":{"parameters":[],"typeRef":{"kind":"primitive","value":"Double"}},"typeParams":[]}},"version":{"kind":"nothing"}},"moduleName":"mycscores.db"};

export const snDuration: ADL.ScopedName = {moduleName:"mycscores.db", name:"Duration"};

export function texprDuration(): ADL.ATypeExpr<Duration> {
  return {value : {typeRef : {kind: "reference", value : snDuration}, parameters : []}};
}

export const _AST_MAP: { [key: string]: ADL.ScopedDecl } = {
  "mycscores.db.AppUser" : AppUser_AST,
  "mycscores.db.AppUserTable" : AppUserTable_AST,
  "mycscores.db.AppUserId" : AppUserId_AST,
  "mycscores.db.Season" : Season_AST,
  "mycscores.db.SeasonTable" : SeasonTable_AST,
  "mycscores.db.SeasonId" : SeasonId_AST,
  "mycscores.db.Series" : Series_AST,
  "mycscores.db.HandicapSystem" : HandicapSystem_AST,
  "mycscores.db.SeriesTable" : SeriesTable_AST,
  "mycscores.db.SeriesId" : SeriesId_AST,
  "mycscores.db.Race" : Race_AST,
  "mycscores.db.RaceTable" : RaceTable_AST,
  "mycscores.db.RaceId" : RaceId_AST,
  "mycscores.db.CalendarEntry" : CalendarEntry_AST,
  "mycscores.db.CalendarEntryTable" : CalendarEntryTable_AST,
  "mycscores.db.CalendarEntryId" : CalendarEntryId_AST,
  "mycscores.db.RaceStart" : RaceStart_AST,
  "mycscores.db.RaceStartTable" : RaceStartTable_AST,
  "mycscores.db.RaceStartId" : RaceStartId_AST,
  "mycscores.db.Event" : Event_AST,
  "mycscores.db.EventTable" : EventTable_AST,
  "mycscores.db.EventId" : EventId_AST,
  "mycscores.db.RaceType" : RaceType_AST,
  "mycscores.db.Entrant" : Entrant_AST,
  "mycscores.db.EntrantTable" : EntrantTable_AST,
  "mycscores.db.EntrantId" : EntrantId_AST,
  "mycscores.db.RaceResult" : RaceResult_AST,
  "mycscores.db.RaceResultTable" : RaceResultTable_AST,
  "mycscores.db.RaceResultId" : RaceResultId_AST,
  "mycscores.db.EventResult" : EventResult_AST,
  "mycscores.db.EventResultTable" : EventResultTable_AST,
  "mycscores.db.EventResultId" : EventResultId_AST,
  "mycscores.db.HandicapOverride" : HandicapOverride_AST,
  "mycscores.db.HandicapOverrideTable" : HandicapOverrideTable_AST,
  "mycscores.db.HandicapOverrideId" : HandicapOverrideId_AST,
  "mycscores.db.RResult" : RResult_AST,
  "mycscores.db.Duration" : Duration_AST
};
