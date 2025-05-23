// This file is generated from the schema definition
#![allow(unused)]

use super::types::ColumnSpec;
use sea_query::{Alias, DynIden, IntoIden};

use crate::custom::common::db::DbKey;
use crate::gen as adlgen;
use crate::rt as adlrt;

pub struct AppUser {}

impl AppUser {
    pub fn table_str() -> &'static str {
        "app_user"
    }

    pub fn id_prefix() -> &'static str {
        "U-"
    }

    pub fn table() -> DynIden {
        Alias::new(Self::table_str()).into_iden()
    }

    pub fn id() -> ColumnSpec<DbKey<adlgen::mycscores::db::AppUserTable>> {
        ColumnSpec::new(Self::table_str(), "id")
    }

    pub fn fullname() -> ColumnSpec<adlgen::common::strings::StringNE> {
        ColumnSpec::new(Self::table_str(), "fullname")
    }

    pub fn email() -> ColumnSpec<adlgen::common::strings::StringNE> {
        ColumnSpec::new(Self::table_str(), "email")
    }

    pub fn is_admin() -> ColumnSpec<bool> {
        ColumnSpec::new(Self::table_str(), "is_admin")
    }

    pub fn hashed_password() -> ColumnSpec<adlgen::common::strings::StringNE> {
        ColumnSpec::new(Self::table_str(), "hashed_password")
    }
}

pub struct CalendarEntry {}

impl CalendarEntry {
    pub fn table_str() -> &'static str {
        "calendar_entry"
    }

    pub fn id_prefix() -> &'static str {
        "CE-"
    }

    pub fn table() -> DynIden {
        Alias::new(Self::table_str()).into_iden()
    }

    pub fn id() -> ColumnSpec<DbKey<adlgen::mycscores::db::CalendarEntryTable>> {
        ColumnSpec::new(Self::table_str(), "id")
    }

    pub fn season_id() -> ColumnSpec<adlgen::mycscores::db::SeasonId> {
        ColumnSpec::new(Self::table_str(), "season_id")
    }

    pub fn date() -> ColumnSpec<crate::custom::common::time::LocalDate> {
        ColumnSpec::new(Self::table_str(), "date")
    }

    pub fn description() -> ColumnSpec<adlgen::common::strings::StringNE> {
        ColumnSpec::new(Self::table_str(), "description")
    }
}

pub struct Entrant {}

impl Entrant {
    pub fn table_str() -> &'static str {
        "entrant"
    }

    pub fn id_prefix() -> &'static str {
        "E-"
    }

    pub fn table() -> DynIden {
        Alias::new(Self::table_str()).into_iden()
    }

    pub fn id() -> ColumnSpec<DbKey<adlgen::mycscores::db::EntrantTable>> {
        ColumnSpec::new(Self::table_str(), "id")
    }

    pub fn season_id() -> ColumnSpec<adlgen::mycscores::db::SeasonId> {
        ColumnSpec::new(Self::table_str(), "season_id")
    }

    pub fn entrant_name() -> ColumnSpec<adlgen::common::strings::StringNE> {
        ColumnSpec::new(Self::table_str(), "entrant_name")
    }

    pub fn boat_name() -> ColumnSpec<adlgen::common::strings::StringNE> {
        ColumnSpec::new(Self::table_str(), "boat_name")
    }

    pub fn sail_number() -> ColumnSpec<adlgen::common::strings::StringNE> {
        ColumnSpec::new(Self::table_str(), "sail_number")
    }

    pub fn yardstick() -> ColumnSpec<f64> {
        ColumnSpec::new(Self::table_str(), "yardstick")
    }

    pub fn initial_handicap() -> ColumnSpec<f64> {
        ColumnSpec::new(Self::table_str(), "initial_handicap")
    }
}

pub struct Event {}

impl Event {
    pub fn table_str() -> &'static str {
        "event"
    }

    pub fn id_prefix() -> &'static str {
        "E-"
    }

    pub fn table() -> DynIden {
        Alias::new(Self::table_str()).into_iden()
    }

    pub fn id() -> ColumnSpec<DbKey<adlgen::mycscores::db::EventTable>> {
        ColumnSpec::new(Self::table_str(), "id")
    }

    pub fn abbreviation() -> ColumnSpec<adlgen::common::strings::StringNE> {
        ColumnSpec::new(Self::table_str(), "abbreviation")
    }

    pub fn series_id() -> ColumnSpec<adlgen::mycscores::db::SeriesId> {
        ColumnSpec::new(Self::table_str(), "series_id")
    }

    pub fn race_id() -> ColumnSpec<adlgen::mycscores::db::RaceId> {
        ColumnSpec::new(Self::table_str(), "race_id")
    }

    pub fn race_type() -> ColumnSpec<adlgen::mycscores::db::RaceType> {
        ColumnSpec::new(Self::table_str(), "race_type")
    }
}

pub struct EventResult {}

impl EventResult {
    pub fn table_str() -> &'static str {
        "event_result"
    }

    pub fn id_prefix() -> &'static str {
        "ER-"
    }

    pub fn table() -> DynIden {
        Alias::new(Self::table_str()).into_iden()
    }

    pub fn id() -> ColumnSpec<DbKey<adlgen::mycscores::db::EventResultTable>> {
        ColumnSpec::new(Self::table_str(), "id")
    }

    pub fn entrant_id() -> ColumnSpec<adlgen::mycscores::db::EntrantId> {
        ColumnSpec::new(Self::table_str(), "entrant_id")
    }

    pub fn event_id() -> ColumnSpec<adlgen::mycscores::db::EventId> {
        ColumnSpec::new(Self::table_str(), "event_id")
    }

    pub fn entrant_name() -> ColumnSpec<adlgen::common::strings::StringNE> {
        ColumnSpec::new(Self::table_str(), "entrant_name")
    }

    pub fn boat_name() -> ColumnSpec<adlgen::common::strings::StringNE> {
        ColumnSpec::new(Self::table_str(), "boat_name")
    }

    pub fn sail_number() -> ColumnSpec<adlgen::common::strings::StringNE> {
        ColumnSpec::new(Self::table_str(), "sail_number")
    }

    pub fn yardstick() -> ColumnSpec<f64> {
        ColumnSpec::new(Self::table_str(), "yardstick")
    }

    pub fn handicap() -> ColumnSpec<f64> {
        ColumnSpec::new(Self::table_str(), "handicap")
    }

    pub fn handicap_secs() -> ColumnSpec<f64> {
        ColumnSpec::new(Self::table_str(), "handicap_secs")
    }

    pub fn finish_time() -> ColumnSpec<adlgen::mycscores::db::RResult<crate::custom::common::time::LocalTime>> {
        ColumnSpec::new(Self::table_str(), "finish_time")
    }

    pub fn elapsed_time() -> ColumnSpec<adlgen::mycscores::db::RResult<adlgen::mycscores::db::Duration>> {
        ColumnSpec::new(Self::table_str(), "elapsed_time")
    }

    pub fn elapsed_time_yardstick() -> ColumnSpec<adlgen::mycscores::db::RResult<adlgen::mycscores::db::Duration>> {
        ColumnSpec::new(Self::table_str(), "elapsed_time_yardstick")
    }

    pub fn elapsed_time_handicap() -> ColumnSpec<adlgen::mycscores::db::RResult<adlgen::mycscores::db::Duration>> {
        ColumnSpec::new(Self::table_str(), "elapsed_time_handicap")
    }

    pub fn score() -> ColumnSpec<u16> {
        ColumnSpec::new(Self::table_str(), "score")
    }

    pub fn handicap_change() -> ColumnSpec<f64> {
        ColumnSpec::new(Self::table_str(), "handicap_change")
    }

    pub fn handicap_new() -> ColumnSpec<f64> {
        ColumnSpec::new(Self::table_str(), "handicap_new")
    }
}

pub struct HandicapOverride {}

impl HandicapOverride {
    pub fn table_str() -> &'static str {
        "handicap_override"
    }

    pub fn id_prefix() -> &'static str {
        "HO-"
    }

    pub fn table() -> DynIden {
        Alias::new(Self::table_str()).into_iden()
    }

    pub fn id() -> ColumnSpec<DbKey<adlgen::mycscores::db::HandicapOverrideTable>> {
        ColumnSpec::new(Self::table_str(), "id")
    }

    pub fn race_id() -> ColumnSpec<adlgen::mycscores::db::RaceId> {
        ColumnSpec::new(Self::table_str(), "race_id")
    }

    pub fn entrant_id() -> ColumnSpec<adlgen::mycscores::db::EntrantId> {
        ColumnSpec::new(Self::table_str(), "entrant_id")
    }

    pub fn handicap_new() -> ColumnSpec<f64> {
        ColumnSpec::new(Self::table_str(), "handicap_new")
    }
}

pub struct Race {}

impl Race {
    pub fn table_str() -> &'static str {
        "race"
    }

    pub fn id_prefix() -> &'static str {
        "R-"
    }

    pub fn table() -> DynIden {
        Alias::new(Self::table_str()).into_iden()
    }

    pub fn id() -> ColumnSpec<DbKey<adlgen::mycscores::db::RaceTable>> {
        ColumnSpec::new(Self::table_str(), "id")
    }

    pub fn scheduled_date() -> ColumnSpec<crate::custom::common::time::LocalDate> {
        ColumnSpec::new(Self::table_str(), "scheduled_date")
    }

    pub fn race_number() -> ColumnSpec<u8> {
        ColumnSpec::new(Self::table_str(), "race_number")
    }

    pub fn duty_officer() -> ColumnSpec<String> {
        ColumnSpec::new(Self::table_str(), "duty_officer")
    }
}

pub struct RaceResult {}

impl RaceResult {
    pub fn table_str() -> &'static str {
        "race_result"
    }

    pub fn id_prefix() -> &'static str {
        "RR-"
    }

    pub fn table() -> DynIden {
        Alias::new(Self::table_str()).into_iden()
    }

    pub fn id() -> ColumnSpec<DbKey<adlgen::mycscores::db::RaceResultTable>> {
        ColumnSpec::new(Self::table_str(), "id")
    }

    pub fn race_id() -> ColumnSpec<adlgen::mycscores::db::RaceId> {
        ColumnSpec::new(Self::table_str(), "race_id")
    }

    pub fn entrant_id() -> ColumnSpec<adlgen::mycscores::db::EntrantId> {
        ColumnSpec::new(Self::table_str(), "entrant_id")
    }

    pub fn result() -> ColumnSpec<adlgen::mycscores::db::RResult<crate::custom::common::time::LocalTime>> {
        ColumnSpec::new(Self::table_str(), "result")
    }
}

pub struct RaceStart {}

impl RaceStart {
    pub fn table_str() -> &'static str {
        "race_start"
    }

    pub fn id_prefix() -> &'static str {
        "RS-"
    }

    pub fn table() -> DynIden {
        Alias::new(Self::table_str()).into_iden()
    }

    pub fn id() -> ColumnSpec<DbKey<adlgen::mycscores::db::RaceStartTable>> {
        ColumnSpec::new(Self::table_str(), "id")
    }

    pub fn race_id() -> ColumnSpec<adlgen::mycscores::db::RaceId> {
        ColumnSpec::new(Self::table_str(), "race_id")
    }

    pub fn date() -> ColumnSpec<crate::custom::common::time::LocalDate> {
        ColumnSpec::new(Self::table_str(), "date")
    }

    pub fn abandoned() -> ColumnSpec<bool> {
        ColumnSpec::new(Self::table_str(), "abandoned")
    }

    pub fn start_time() -> ColumnSpec<crate::custom::common::time::LocalTime> {
        ColumnSpec::new(Self::table_str(), "start_time")
    }

    pub fn conditions() -> ColumnSpec<adlgen::common::strings::StringML> {
        ColumnSpec::new(Self::table_str(), "conditions")
    }

    pub fn notes() -> ColumnSpec<adlgen::common::strings::StringML> {
        ColumnSpec::new(Self::table_str(), "notes")
    }
}

pub struct Season {}

impl Season {
    pub fn table_str() -> &'static str {
        "season"
    }

    pub fn id_prefix() -> &'static str {
        "S-"
    }

    pub fn table() -> DynIden {
        Alias::new(Self::table_str()).into_iden()
    }

    pub fn id() -> ColumnSpec<DbKey<adlgen::mycscores::db::SeasonTable>> {
        ColumnSpec::new(Self::table_str(), "id")
    }

    pub fn name() -> ColumnSpec<adlgen::common::strings::StringNE> {
        ColumnSpec::new(Self::table_str(), "name")
    }
}

pub struct Series {}

impl Series {
    pub fn table_str() -> &'static str {
        "series"
    }

    pub fn id_prefix() -> &'static str {
        "S-"
    }

    pub fn table() -> DynIden {
        Alias::new(Self::table_str()).into_iden()
    }

    pub fn id() -> ColumnSpec<DbKey<adlgen::mycscores::db::SeriesTable>> {
        ColumnSpec::new(Self::table_str(), "id")
    }

    pub fn season_id() -> ColumnSpec<adlgen::mycscores::db::SeasonId> {
        ColumnSpec::new(Self::table_str(), "season_id")
    }

    pub fn name() -> ColumnSpec<adlgen::common::strings::StringNE> {
        ColumnSpec::new(Self::table_str(), "name")
    }

    pub fn abbreviation() -> ColumnSpec<adlgen::common::strings::StringNE> {
        ColumnSpec::new(Self::table_str(), "abbreviation")
    }

    pub fn is_handicap() -> ColumnSpec<bool> {
        ColumnSpec::new(Self::table_str(), "is_handicap")
    }

    pub fn handicap_system() -> ColumnSpec<std::option::Option<adlgen::mycscores::db::HandicapSystem>> {
        ColumnSpec::new(Self::table_str(), "handicap_system")
    }

    pub fn num_drops() -> ColumnSpec<u8> {
        ColumnSpec::new(Self::table_str(), "num_drops")
    }
}


derive_db_conversions_adl_enum!(adlgen::mycscores::db::HandicapSystem);
derive_db_conversions_adl_1!(adlgen::mycscores::db::RResult);
derive_db_conversions_adl_enum!(adlgen::mycscores::db::RaceType);
