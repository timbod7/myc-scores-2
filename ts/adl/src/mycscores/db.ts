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
  seasonId: SeasonId;
  name: common_strings.StringNE;
  abbreviation: common_strings.StringNE;
  isHandicap: boolean;
  handicapSystem: (HandicapSystem|null);
  numDrops: number;
}

export function makeSeries(
  input: {
    seasonId: SeasonId,
    name: common_strings.StringNE,
    abbreviation: common_strings.StringNE,
    isHandicap: boolean,
    handicapSystem: (HandicapSystem|null),
    numDrops: number,
  }
): Series {
  return {
    seasonId: input.seasonId,
    name: input.name,
    abbreviation: input.abbreviation,
    isHandicap: input.isHandicap,
    handicapSystem: input.handicapSystem,
    numDrops: input.numDrops,
  };
}

const Series_AST : ADL.ScopedDecl =
  {"decl":{"annotations":[{"key":{"moduleName":"sys.annotations","name":"Doc"},"value":"Each series is a collection of races\n"}],"name":"Series","type_":{"kind":"struct_","value":{"fields":[{"annotations":[],"default":{"kind":"nothing"},"name":"seasonId","serializedName":"seasonId","typeExpr":{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"mycscores.db","name":"SeasonId"}}}},{"annotations":[],"default":{"kind":"nothing"},"name":"name","serializedName":"name","typeExpr":{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"common.strings","name":"StringNE"}}}},{"annotations":[],"default":{"kind":"nothing"},"name":"abbreviation","serializedName":"abbreviation","typeExpr":{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"common.strings","name":"StringNE"}}}},{"annotations":[],"default":{"kind":"nothing"},"name":"isHandicap","serializedName":"isHandicap","typeExpr":{"parameters":[],"typeRef":{"kind":"primitive","value":"Bool"}}},{"annotations":[],"default":{"kind":"nothing"},"name":"handicapSystem","serializedName":"handicapSystem","typeExpr":{"parameters":[{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"mycscores.db","name":"HandicapSystem"}}}],"typeRef":{"kind":"primitive","value":"Nullable"}}},{"annotations":[],"default":{"kind":"nothing"},"name":"numDrops","serializedName":"numDrops","typeExpr":{"parameters":[],"typeRef":{"kind":"primitive","value":"Word8"}}}],"typeParams":[]}},"version":{"kind":"nothing"}},"moduleName":"mycscores.db"};

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
  scheduledDate: common_time.LocalDate;
  raceNumber: number;
  dutyOfficer: string;
}

export function makeRace(
  input: {
    scheduledDate: common_time.LocalDate,
    raceNumber: number,
    dutyOfficer?: string,
  }
): Race {
  return {
    scheduledDate: input.scheduledDate,
    raceNumber: input.raceNumber,
    dutyOfficer: input.dutyOfficer === undefined ? "" : input.dutyOfficer,
  };
}

const Race_AST : ADL.ScopedDecl =
  {"decl":{"annotations":[{"key":{"moduleName":"sys.annotations","name":"Doc"},"value":"A Race \n"}],"name":"Race","type_":{"kind":"struct_","value":{"fields":[{"annotations":[],"default":{"kind":"nothing"},"name":"scheduledDate","serializedName":"scheduledDate","typeExpr":{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"common.time","name":"LocalDate"}}}},{"annotations":[],"default":{"kind":"nothing"},"name":"raceNumber","serializedName":"raceNumber","typeExpr":{"parameters":[],"typeRef":{"kind":"primitive","value":"Word8"}}},{"annotations":[],"default":{"kind":"just","value":""},"name":"dutyOfficer","serializedName":"dutyOfficer","typeExpr":{"parameters":[],"typeRef":{"kind":"primitive","value":"String"}}}],"typeParams":[]}},"version":{"kind":"nothing"}},"moduleName":"mycscores.db"};

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
  seasonId: SeasonId;
  date: common_time.LocalDate;
  description: common_strings.StringNE;
}

export function makeCalendarEntry(
  input: {
    seasonId: SeasonId,
    date: common_time.LocalDate,
    description: common_strings.StringNE,
  }
): CalendarEntry {
  return {
    seasonId: input.seasonId,
    date: input.date,
    description: input.description,
  };
}

const CalendarEntry_AST : ADL.ScopedDecl =
  {"decl":{"annotations":[{"key":{"moduleName":"sys.annotations","name":"Doc"},"value":"A Calendar entry, shown in the schedule\nbut otherwise has no effect\n"}],"name":"CalendarEntry","type_":{"kind":"struct_","value":{"fields":[{"annotations":[],"default":{"kind":"nothing"},"name":"seasonId","serializedName":"seasonId","typeExpr":{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"mycscores.db","name":"SeasonId"}}}},{"annotations":[],"default":{"kind":"nothing"},"name":"date","serializedName":"date","typeExpr":{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"common.time","name":"LocalDate"}}}},{"annotations":[],"default":{"kind":"nothing"},"name":"description","serializedName":"description","typeExpr":{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"common.strings","name":"StringNE"}}}}],"typeParams":[]}},"version":{"kind":"nothing"}},"moduleName":"mycscores.db"};

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
  raceId: RaceId;
  date: common_time.LocalDate;
  abandoned: boolean;
  startTime: common_time.LocalTime;
  conditions: common_strings.StringML;
  notes: common_strings.StringML;
}

export function makeRaceStart(
  input: {
    raceId: RaceId,
    date: common_time.LocalDate,
    abandoned: boolean,
    startTime: common_time.LocalTime,
    conditions: common_strings.StringML,
    notes: common_strings.StringML,
  }
): RaceStart {
  return {
    raceId: input.raceId,
    date: input.date,
    abandoned: input.abandoned,
    startTime: input.startTime,
    conditions: input.conditions,
    notes: input.notes,
  };
}

const RaceStart_AST : ADL.ScopedDecl =
  {"decl":{"annotations":[],"name":"RaceStart","type_":{"kind":"struct_","value":{"fields":[{"annotations":[],"default":{"kind":"nothing"},"name":"raceId","serializedName":"raceId","typeExpr":{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"mycscores.db","name":"RaceId"}}}},{"annotations":[],"default":{"kind":"nothing"},"name":"date","serializedName":"date","typeExpr":{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"common.time","name":"LocalDate"}}}},{"annotations":[],"default":{"kind":"nothing"},"name":"abandoned","serializedName":"abandoned","typeExpr":{"parameters":[],"typeRef":{"kind":"primitive","value":"Bool"}}},{"annotations":[],"default":{"kind":"nothing"},"name":"startTime","serializedName":"startTime","typeExpr":{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"common.time","name":"LocalTime"}}}},{"annotations":[],"default":{"kind":"nothing"},"name":"conditions","serializedName":"conditions","typeExpr":{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"common.strings","name":"StringML"}}}},{"annotations":[],"default":{"kind":"nothing"},"name":"notes","serializedName":"notes","typeExpr":{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"common.strings","name":"StringML"}}}}],"typeParams":[]}},"version":{"kind":"nothing"}},"moduleName":"mycscores.db"};

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
  seriesId: SeriesId;
  raceId: RaceId;
  raceType: RaceType;
}

export function makeEvent(
  input: {
    abbreviation: common_strings.StringNE,
    seriesId: SeriesId,
    raceId: RaceId,
    raceType: RaceType,
  }
): Event {
  return {
    abbreviation: input.abbreviation,
    seriesId: input.seriesId,
    raceId: input.raceId,
    raceType: input.raceType,
  };
}

const Event_AST : ADL.ScopedDecl =
  {"decl":{"annotations":[{"key":{"moduleName":"sys.annotations","name":"Doc"},"value":"A race in a series\n"}],"name":"Event","type_":{"kind":"struct_","value":{"fields":[{"annotations":[],"default":{"kind":"nothing"},"name":"abbreviation","serializedName":"abbreviation","typeExpr":{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"common.strings","name":"StringNE"}}}},{"annotations":[],"default":{"kind":"nothing"},"name":"seriesId","serializedName":"seriesId","typeExpr":{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"mycscores.db","name":"SeriesId"}}}},{"annotations":[],"default":{"kind":"nothing"},"name":"raceId","serializedName":"raceId","typeExpr":{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"mycscores.db","name":"RaceId"}}}},{"annotations":[],"default":{"kind":"nothing"},"name":"raceType","serializedName":"raceType","typeExpr":{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"mycscores.db","name":"RaceType"}}}}],"typeParams":[]}},"version":{"kind":"nothing"}},"moduleName":"mycscores.db"};

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
  seasonId: SeasonId;
  entrantName: common_strings.StringNE;
  boatName: common_strings.StringNE;
  sailNumber: common_strings.StringNE;
  yardstick: number;
  initialHandicap: number;
}

export function makeEntrant(
  input: {
    seasonId: SeasonId,
    entrantName: common_strings.StringNE,
    boatName: common_strings.StringNE,
    sailNumber: common_strings.StringNE,
    yardstick: number,
    initialHandicap: number,
  }
): Entrant {
  return {
    seasonId: input.seasonId,
    entrantName: input.entrantName,
    boatName: input.boatName,
    sailNumber: input.sailNumber,
    yardstick: input.yardstick,
    initialHandicap: input.initialHandicap,
  };
}

const Entrant_AST : ADL.ScopedDecl =
  {"decl":{"annotations":[{"key":{"moduleName":"sys.annotations","name":"Doc"},"value":"Personal and boat details for an entrant\n"}],"name":"Entrant","type_":{"kind":"struct_","value":{"fields":[{"annotations":[],"default":{"kind":"nothing"},"name":"seasonId","serializedName":"seasonId","typeExpr":{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"mycscores.db","name":"SeasonId"}}}},{"annotations":[],"default":{"kind":"nothing"},"name":"entrantName","serializedName":"entrantName","typeExpr":{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"common.strings","name":"StringNE"}}}},{"annotations":[],"default":{"kind":"nothing"},"name":"boatName","serializedName":"boatName","typeExpr":{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"common.strings","name":"StringNE"}}}},{"annotations":[],"default":{"kind":"nothing"},"name":"sailNumber","serializedName":"sailNumber","typeExpr":{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"common.strings","name":"StringNE"}}}},{"annotations":[],"default":{"kind":"nothing"},"name":"yardstick","serializedName":"yardstick","typeExpr":{"parameters":[],"typeRef":{"kind":"primitive","value":"Double"}}},{"annotations":[],"default":{"kind":"nothing"},"name":"initialHandicap","serializedName":"initialHandicap","typeExpr":{"parameters":[],"typeRef":{"kind":"primitive","value":"Double"}}}],"typeParams":[]}},"version":{"kind":"nothing"}},"moduleName":"mycscores.db"};

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
  raceId: RaceId;
  entrantId: EntrantId;
  result: Result<common_time.LocalTime>;
}

export function makeRaceResult(
  input: {
    raceId: RaceId,
    entrantId: EntrantId,
    result: Result<common_time.LocalTime>,
  }
): RaceResult {
  return {
    raceId: input.raceId,
    entrantId: input.entrantId,
    result: input.result,
  };
}

const RaceResult_AST : ADL.ScopedDecl =
  {"decl":{"annotations":[{"key":{"moduleName":"sys.annotations","name":"Doc"},"value":"An entrants results in a single race\n"}],"name":"RaceResult","type_":{"kind":"struct_","value":{"fields":[{"annotations":[],"default":{"kind":"nothing"},"name":"raceId","serializedName":"raceId","typeExpr":{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"mycscores.db","name":"RaceId"}}}},{"annotations":[],"default":{"kind":"nothing"},"name":"entrantId","serializedName":"entrantId","typeExpr":{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"mycscores.db","name":"EntrantId"}}}},{"annotations":[],"default":{"kind":"nothing"},"name":"result","serializedName":"result","typeExpr":{"parameters":[{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"common.time","name":"LocalTime"}}}],"typeRef":{"kind":"reference","value":{"moduleName":"mycscores.db","name":"Result"}}}}],"typeParams":[]}},"version":{"kind":"nothing"}},"moduleName":"mycscores.db"};

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
  entrantId: EntrantId;
  eventId: EventId;
  entrantName: common_strings.StringNE;
  boatName: common_strings.StringNE;
  sailNumber: common_strings.StringNE;
  yardstick: number;
  handicap: number;
  handicapSecs: number;
  finishTime: Result<common_time.LocalTime>;
  elapsedTime: Result<Duration>;
  elapsedTimeYardstick: Result<Duration>;
  elapsedTimeHandicap: Result<Duration>;
  score: number;
  handicapChange: number;
  handicapNew: number;
}

export function makeEventResult(
  input: {
    entrantId: EntrantId,
    eventId: EventId,
    entrantName: common_strings.StringNE,
    boatName: common_strings.StringNE,
    sailNumber: common_strings.StringNE,
    yardstick: number,
    handicap: number,
    handicapSecs: number,
    finishTime: Result<common_time.LocalTime>,
    elapsedTime: Result<Duration>,
    elapsedTimeYardstick: Result<Duration>,
    elapsedTimeHandicap: Result<Duration>,
    score: number,
    handicapChange: number,
    handicapNew: number,
  }
): EventResult {
  return {
    entrantId: input.entrantId,
    eventId: input.eventId,
    entrantName: input.entrantName,
    boatName: input.boatName,
    sailNumber: input.sailNumber,
    yardstick: input.yardstick,
    handicap: input.handicap,
    handicapSecs: input.handicapSecs,
    finishTime: input.finishTime,
    elapsedTime: input.elapsedTime,
    elapsedTimeYardstick: input.elapsedTimeYardstick,
    elapsedTimeHandicap: input.elapsedTimeHandicap,
    score: input.score,
    handicapChange: input.handicapChange,
    handicapNew: input.handicapNew,
  };
}

const EventResult_AST : ADL.ScopedDecl =
  {"decl":{"annotations":[{"key":{"moduleName":"sys.annotations","name":"Doc"},"value":"An entrants result in a single event\n"}],"name":"EventResult","type_":{"kind":"struct_","value":{"fields":[{"annotations":[],"default":{"kind":"nothing"},"name":"entrantId","serializedName":"entrantId","typeExpr":{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"mycscores.db","name":"EntrantId"}}}},{"annotations":[],"default":{"kind":"nothing"},"name":"eventId","serializedName":"eventId","typeExpr":{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"mycscores.db","name":"EventId"}}}},{"annotations":[],"default":{"kind":"nothing"},"name":"entrantName","serializedName":"entrantName","typeExpr":{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"common.strings","name":"StringNE"}}}},{"annotations":[],"default":{"kind":"nothing"},"name":"boatName","serializedName":"boatName","typeExpr":{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"common.strings","name":"StringNE"}}}},{"annotations":[],"default":{"kind":"nothing"},"name":"sailNumber","serializedName":"sailNumber","typeExpr":{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"common.strings","name":"StringNE"}}}},{"annotations":[],"default":{"kind":"nothing"},"name":"yardstick","serializedName":"yardstick","typeExpr":{"parameters":[],"typeRef":{"kind":"primitive","value":"Double"}}},{"annotations":[],"default":{"kind":"nothing"},"name":"handicap","serializedName":"handicap","typeExpr":{"parameters":[],"typeRef":{"kind":"primitive","value":"Double"}}},{"annotations":[],"default":{"kind":"nothing"},"name":"handicapSecs","serializedName":"handicapSecs","typeExpr":{"parameters":[],"typeRef":{"kind":"primitive","value":"Double"}}},{"annotations":[],"default":{"kind":"nothing"},"name":"finishTime","serializedName":"finishTime","typeExpr":{"parameters":[{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"common.time","name":"LocalTime"}}}],"typeRef":{"kind":"reference","value":{"moduleName":"mycscores.db","name":"Result"}}}},{"annotations":[],"default":{"kind":"nothing"},"name":"elapsedTime","serializedName":"elapsedTime","typeExpr":{"parameters":[{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"mycscores.db","name":"Duration"}}}],"typeRef":{"kind":"reference","value":{"moduleName":"mycscores.db","name":"Result"}}}},{"annotations":[],"default":{"kind":"nothing"},"name":"elapsedTimeYardstick","serializedName":"elapsedTimeYardstick","typeExpr":{"parameters":[{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"mycscores.db","name":"Duration"}}}],"typeRef":{"kind":"reference","value":{"moduleName":"mycscores.db","name":"Result"}}}},{"annotations":[],"default":{"kind":"nothing"},"name":"elapsedTimeHandicap","serializedName":"elapsedTimeHandicap","typeExpr":{"parameters":[{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"mycscores.db","name":"Duration"}}}],"typeRef":{"kind":"reference","value":{"moduleName":"mycscores.db","name":"Result"}}}},{"annotations":[],"default":{"kind":"nothing"},"name":"score","serializedName":"score","typeExpr":{"parameters":[],"typeRef":{"kind":"primitive","value":"Word16"}}},{"annotations":[],"default":{"kind":"nothing"},"name":"handicapChange","serializedName":"handicapChange","typeExpr":{"parameters":[],"typeRef":{"kind":"primitive","value":"Double"}}},{"annotations":[],"default":{"kind":"nothing"},"name":"handicapNew","serializedName":"handicapNew","typeExpr":{"parameters":[],"typeRef":{"kind":"primitive","value":"Double"}}}],"typeParams":[]}},"version":{"kind":"nothing"}},"moduleName":"mycscores.db"};

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
  raceId: RaceId;
  entrantId: EntrantId;
  handicapNew: number;
}

export function makeHandicapOverride(
  input: {
    raceId: RaceId,
    entrantId: EntrantId,
    handicapNew: number,
  }
): HandicapOverride {
  return {
    raceId: input.raceId,
    entrantId: input.entrantId,
    handicapNew: input.handicapNew,
  };
}

const HandicapOverride_AST : ADL.ScopedDecl =
  {"decl":{"annotations":[{"key":{"moduleName":"sys.annotations","name":"Doc"},"value":"Overide a handicap before a specifed race\n"}],"name":"HandicapOverride","type_":{"kind":"struct_","value":{"fields":[{"annotations":[],"default":{"kind":"nothing"},"name":"raceId","serializedName":"raceId","typeExpr":{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"mycscores.db","name":"RaceId"}}}},{"annotations":[],"default":{"kind":"nothing"},"name":"entrantId","serializedName":"entrantId","typeExpr":{"parameters":[],"typeRef":{"kind":"reference","value":{"moduleName":"mycscores.db","name":"EntrantId"}}}},{"annotations":[],"default":{"kind":"nothing"},"name":"handicapNew","serializedName":"handicapNew","typeExpr":{"parameters":[],"typeRef":{"kind":"primitive","value":"Double"}}}],"typeParams":[]}},"version":{"kind":"nothing"}},"moduleName":"mycscores.db"};

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

export interface Result_Finished<T> {
  kind: 'finished';
  value: T;
}
export interface Result_Dnc<_T> {
  kind: 'dnc';
}
export interface Result_Dns<_T> {
  kind: 'dns';
}
export interface Result_Dnf<_T> {
  kind: 'dnf';
}
export interface Result_Dsq<_T> {
  kind: 'dsq';
}
export interface Result_Avg<_T> {
  kind: 'avg';
}

export type Result<T> = Result_Finished<T> | Result_Dnc<T> | Result_Dns<T> | Result_Dnf<T> | Result_Dsq<T> | Result_Avg<T>;

export interface ResultOpts<T> {
  finished: T;
  dnc: null;
  dns: null;
  dnf: null;
  dsq: null;
  avg: null;
}

export function makeResult<T, K extends keyof ResultOpts<T>>(kind: K, value: ResultOpts<T>[K]) { return {kind, value}; }

const Result_AST : ADL.ScopedDecl =
  {"decl":{"annotations":[],"name":"Result","type_":{"kind":"union_","value":{"fields":[{"annotations":[],"default":{"kind":"nothing"},"name":"finished","serializedName":"finished","typeExpr":{"parameters":[],"typeRef":{"kind":"typeParam","value":"T"}}},{"annotations":[],"default":{"kind":"nothing"},"name":"dnc","serializedName":"dnc","typeExpr":{"parameters":[],"typeRef":{"kind":"primitive","value":"Void"}}},{"annotations":[],"default":{"kind":"nothing"},"name":"dns","serializedName":"dns","typeExpr":{"parameters":[],"typeRef":{"kind":"primitive","value":"Void"}}},{"annotations":[],"default":{"kind":"nothing"},"name":"dnf","serializedName":"dnf","typeExpr":{"parameters":[],"typeRef":{"kind":"primitive","value":"Void"}}},{"annotations":[],"default":{"kind":"nothing"},"name":"dsq","serializedName":"dsq","typeExpr":{"parameters":[],"typeRef":{"kind":"primitive","value":"Void"}}},{"annotations":[],"default":{"kind":"nothing"},"name":"avg","serializedName":"avg","typeExpr":{"parameters":[],"typeRef":{"kind":"primitive","value":"Void"}}}],"typeParams":["T"]}},"version":{"kind":"nothing"}},"moduleName":"mycscores.db"};

export const snResult: ADL.ScopedName = {moduleName:"mycscores.db", name:"Result"};

export function texprResult<T>(texprT : ADL.ATypeExpr<T>): ADL.ATypeExpr<Result<T>> {
  return {value : {typeRef : {kind: "reference", value : {moduleName : "mycscores.db",name : "Result"}}, parameters : [texprT.value]}};
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
  "mycscores.db.Result" : Result_AST,
  "mycscores.db.Duration" : Duration_AST
};
