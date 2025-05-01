// @generated from adl module mycscores.db

use crate::custom::common::db::DbKey;
use crate::custom::common::time::LocalDate;
use crate::custom::common::time::LocalTime;
use crate::gen::common::db::WithId;
use crate::gen::common::strings::StringML;
use crate::gen::common::strings::StringNE;
use serde::Deserialize;
use serde::Deserializer;
use serde::Serialize;
use serde::Serializer;

#[derive(Clone,Deserialize,Eq,Hash,PartialEq,Serialize)]
pub struct AppUser {
  pub fullname: StringNE,

  pub email: StringNE,

  pub is_admin: bool,

  #[serde(default="AppUser::def_hashed_password")]
  pub hashed_password: StringNE,
}

impl AppUser {
  pub fn new(fullname: StringNE, email: StringNE, is_admin: bool) -> AppUser {
    AppUser {
      fullname: fullname,
      email: email,
      is_admin: is_admin,
      hashed_password: AppUser::def_hashed_password(),
    }
  }

  pub fn def_hashed_password() -> StringNE {
    "".to_string()
  }
}

#[derive(Clone,Eq,Hash,PartialEq)]
pub struct AppUserTable(pub WithId<AppUser>);

impl Serialize for AppUserTable
{
  fn serialize<S>(&self, serializer: S) -> Result<S::Ok, S::Error>
  where
      S: Serializer,
  {
      self.0.serialize(serializer)
  }
}

impl<'de> Deserialize<'de> for AppUserTable
{
  fn deserialize<D>(deserializer: D) -> Result<AppUserTable, D::Error>
  where
      D: Deserializer<'de>,
  {
      let v = WithId::<AppUser>::deserialize(deserializer)?;
      Ok(AppUserTable(v))
  }
}

pub type AppUserId = DbKey<AppUserTable>;

/**
 * Each season is a collection of series
 */
#[derive(Clone,Deserialize,Eq,Hash,PartialEq,Serialize)]
pub struct Season {
  pub name: StringNE,
}

impl Season {
  pub fn new(name: StringNE) -> Season {
    Season {
      name: name,
    }
  }
}

#[derive(Clone,Eq,Hash,PartialEq)]
pub struct SeasonTable(pub WithId<Season>);

impl Serialize for SeasonTable
{
  fn serialize<S>(&self, serializer: S) -> Result<S::Ok, S::Error>
  where
      S: Serializer,
  {
      self.0.serialize(serializer)
  }
}

impl<'de> Deserialize<'de> for SeasonTable
{
  fn deserialize<D>(deserializer: D) -> Result<SeasonTable, D::Error>
  where
      D: Deserializer<'de>,
  {
      let v = WithId::<Season>::deserialize(deserializer)?;
      Ok(SeasonTable(v))
  }
}

pub type SeasonId = DbKey<SeasonTable>;

/**
 * Each series is a collection of races
 */
#[derive(Clone,Deserialize,Eq,Hash,PartialEq,Serialize)]
pub struct Series {
  #[serde(rename="seasonId")]
  pub season_id: SeasonId,

  pub name: StringNE,

  pub abbreviation: StringNE,

  #[serde(rename="isHandicap")]
  pub is_handicap: bool,

  #[serde(rename="handicapSystem")]
  pub handicap_system: Option<HandicapSystem>,

  #[serde(rename="numDrops")]
  pub num_drops: u8,
}

impl Series {
  pub fn new(season_id: SeasonId, name: StringNE, abbreviation: StringNE, is_handicap: bool, handicap_system: Option<HandicapSystem>, num_drops: u8) -> Series {
    Series {
      season_id: season_id,
      name: name,
      abbreviation: abbreviation,
      is_handicap: is_handicap,
      handicap_system: handicap_system,
      num_drops: num_drops,
    }
  }
}

#[derive(Clone,Deserialize,Eq,Hash,PartialEq,Serialize)]
pub enum HandicapSystem {
  #[serde(rename="v1")]
  V1,

  #[serde(rename="v2")]
  V2,
}

#[derive(Clone,Eq,Hash,PartialEq)]
pub struct SeriesTable(pub WithId<Series>);

impl Serialize for SeriesTable
{
  fn serialize<S>(&self, serializer: S) -> Result<S::Ok, S::Error>
  where
      S: Serializer,
  {
      self.0.serialize(serializer)
  }
}

impl<'de> Deserialize<'de> for SeriesTable
{
  fn deserialize<D>(deserializer: D) -> Result<SeriesTable, D::Error>
  where
      D: Deserializer<'de>,
  {
      let v = WithId::<Series>::deserialize(deserializer)?;
      Ok(SeriesTable(v))
  }
}

pub type SeriesId = DbKey<SeriesTable>;

/**
 * A Race 
 */
#[derive(Clone,Deserialize,Eq,Hash,PartialEq,Serialize)]
pub struct Race {
  #[serde(rename="scheduledDate")]
  pub scheduled_date: LocalDate,

  #[serde(rename="raceNumber")]
  pub race_number: u8,

  #[serde(default="Race::def_duty_officer")]
  #[serde(rename="dutyOfficer")]
  pub duty_officer: String,
}

impl Race {
  pub fn new(scheduled_date: LocalDate, race_number: u8) -> Race {
    Race {
      scheduled_date: scheduled_date,
      race_number: race_number,
      duty_officer: Race::def_duty_officer(),
    }
  }

  pub fn def_duty_officer() -> String {
    "".to_string()
  }
}

#[derive(Clone,Eq,Hash,PartialEq)]
pub struct RaceTable(pub WithId<Race>);

impl Serialize for RaceTable
{
  fn serialize<S>(&self, serializer: S) -> Result<S::Ok, S::Error>
  where
      S: Serializer,
  {
      self.0.serialize(serializer)
  }
}

impl<'de> Deserialize<'de> for RaceTable
{
  fn deserialize<D>(deserializer: D) -> Result<RaceTable, D::Error>
  where
      D: Deserializer<'de>,
  {
      let v = WithId::<Race>::deserialize(deserializer)?;
      Ok(RaceTable(v))
  }
}

pub type RaceId = DbKey<RaceTable>;

/**
 * A Calendar entry, shown in the schedule
 * but otherwise has no effect
 */
#[derive(Clone,Deserialize,Eq,Hash,PartialEq,Serialize)]
pub struct CalendarEntry {
  #[serde(rename="seasonId")]
  pub season_id: SeasonId,

  pub date: LocalDate,

  pub description: StringNE,
}

impl CalendarEntry {
  pub fn new(season_id: SeasonId, date: LocalDate, description: StringNE) -> CalendarEntry {
    CalendarEntry {
      season_id: season_id,
      date: date,
      description: description,
    }
  }
}

#[derive(Clone,Eq,Hash,PartialEq)]
pub struct CalendarEntryTable(pub WithId<CalendarEntry>);

impl Serialize for CalendarEntryTable
{
  fn serialize<S>(&self, serializer: S) -> Result<S::Ok, S::Error>
  where
      S: Serializer,
  {
      self.0.serialize(serializer)
  }
}

impl<'de> Deserialize<'de> for CalendarEntryTable
{
  fn deserialize<D>(deserializer: D) -> Result<CalendarEntryTable, D::Error>
  where
      D: Deserializer<'de>,
  {
      let v = WithId::<CalendarEntry>::deserialize(deserializer)?;
      Ok(CalendarEntryTable(v))
  }
}

pub type CalendarEntryId = DbKey<CalendarEntryTable>;

#[derive(Clone,Deserialize,Eq,Hash,PartialEq,Serialize)]
pub struct RaceStart {
  #[serde(rename="raceId")]
  pub race_id: RaceId,

  pub date: LocalDate,

  pub abandoned: bool,

  #[serde(rename="startTime")]
  pub start_time: LocalTime,

  pub conditions: StringML,

  pub notes: StringML,
}

impl RaceStart {
  pub fn new(race_id: RaceId, date: LocalDate, abandoned: bool, start_time: LocalTime, conditions: StringML, notes: StringML) -> RaceStart {
    RaceStart {
      race_id: race_id,
      date: date,
      abandoned: abandoned,
      start_time: start_time,
      conditions: conditions,
      notes: notes,
    }
  }
}

#[derive(Clone,Eq,Hash,PartialEq)]
pub struct RaceStartTable(pub WithId<RaceStart>);

impl Serialize for RaceStartTable
{
  fn serialize<S>(&self, serializer: S) -> Result<S::Ok, S::Error>
  where
      S: Serializer,
  {
      self.0.serialize(serializer)
  }
}

impl<'de> Deserialize<'de> for RaceStartTable
{
  fn deserialize<D>(deserializer: D) -> Result<RaceStartTable, D::Error>
  where
      D: Deserializer<'de>,
  {
      let v = WithId::<RaceStart>::deserialize(deserializer)?;
      Ok(RaceStartTable(v))
  }
}

pub type RaceStartId = DbKey<RaceStartTable>;

/**
 * A race in a series
 */
#[derive(Clone,Deserialize,Eq,Hash,PartialEq,Serialize)]
pub struct Event {
  pub abbreviation: StringNE,

  #[serde(rename="seriesId")]
  pub series_id: SeriesId,

  #[serde(rename="raceId")]
  pub race_id: RaceId,

  #[serde(rename="raceType")]
  pub race_type: RaceType,
}

impl Event {
  pub fn new(abbreviation: StringNE, series_id: SeriesId, race_id: RaceId, race_type: RaceType) -> Event {
    Event {
      abbreviation: abbreviation,
      series_id: series_id,
      race_id: race_id,
      race_type: race_type,
    }
  }
}

#[derive(Clone,Eq,Hash,PartialEq)]
pub struct EventTable(pub WithId<Event>);

impl Serialize for EventTable
{
  fn serialize<S>(&self, serializer: S) -> Result<S::Ok, S::Error>
  where
      S: Serializer,
  {
      self.0.serialize(serializer)
  }
}

impl<'de> Deserialize<'de> for EventTable
{
  fn deserialize<D>(deserializer: D) -> Result<EventTable, D::Error>
  where
      D: Deserializer<'de>,
  {
      let v = WithId::<Event>::deserialize(deserializer)?;
      Ok(EventTable(v))
  }
}

pub type EventId = DbKey<EventTable>;

#[derive(Clone,Deserialize,Eq,Hash,PartialEq,Serialize)]
pub enum RaceType {
  #[serde(rename="scratch")]
  Scratch,

  #[serde(rename="pursuit")]
  Pursuit,
}

/**
 * Personal and boat details for an entrant
 */
#[derive(Clone,Deserialize,PartialEq,Serialize)]
pub struct Entrant {
  #[serde(rename="seasonId")]
  pub season_id: SeasonId,

  #[serde(rename="entrantName")]
  pub entrant_name: StringNE,

  #[serde(rename="boatName")]
  pub boat_name: StringNE,

  #[serde(rename="sailNumber")]
  pub sail_number: StringNE,

  pub yardstick: f64,

  #[serde(rename="initialHandicap")]
  pub initial_handicap: f64,
}

impl Entrant {
  pub fn new(season_id: SeasonId, entrant_name: StringNE, boat_name: StringNE, sail_number: StringNE, yardstick: f64, initial_handicap: f64) -> Entrant {
    Entrant {
      season_id: season_id,
      entrant_name: entrant_name,
      boat_name: boat_name,
      sail_number: sail_number,
      yardstick: yardstick,
      initial_handicap: initial_handicap,
    }
  }
}

#[derive(Clone,PartialEq)]
pub struct EntrantTable(pub WithId<Entrant>);

impl Serialize for EntrantTable
{
  fn serialize<S>(&self, serializer: S) -> Result<S::Ok, S::Error>
  where
      S: Serializer,
  {
      self.0.serialize(serializer)
  }
}

impl<'de> Deserialize<'de> for EntrantTable
{
  fn deserialize<D>(deserializer: D) -> Result<EntrantTable, D::Error>
  where
      D: Deserializer<'de>,
  {
      let v = WithId::<Entrant>::deserialize(deserializer)?;
      Ok(EntrantTable(v))
  }
}

pub type EntrantId = DbKey<EntrantTable>;

/**
 * An entrants results in a single race
 */
#[derive(Clone,Deserialize,PartialEq,Serialize)]
pub struct RaceResult {
  #[serde(rename="raceId")]
  pub race_id: RaceId,

  #[serde(rename="entrantId")]
  pub entrant_id: EntrantId,

  pub result: RResult<LocalTime>,
}

impl RaceResult {
  pub fn new(race_id: RaceId, entrant_id: EntrantId, result: RResult<LocalTime>) -> RaceResult {
    RaceResult {
      race_id: race_id,
      entrant_id: entrant_id,
      result: result,
    }
  }
}

#[derive(Clone,PartialEq)]
pub struct RaceResultTable(pub WithId<RaceResult>);

impl Serialize for RaceResultTable
{
  fn serialize<S>(&self, serializer: S) -> Result<S::Ok, S::Error>
  where
      S: Serializer,
  {
      self.0.serialize(serializer)
  }
}

impl<'de> Deserialize<'de> for RaceResultTable
{
  fn deserialize<D>(deserializer: D) -> Result<RaceResultTable, D::Error>
  where
      D: Deserializer<'de>,
  {
      let v = WithId::<RaceResult>::deserialize(deserializer)?;
      Ok(RaceResultTable(v))
  }
}

pub type RaceResultId = DbKey<RaceResultTable>;

/**
 * An entrants result in a single event
 */
#[derive(Clone,Deserialize,PartialEq,Serialize)]
pub struct EventResult {
  #[serde(rename="entrantId")]
  pub entrant_id: EntrantId,

  #[serde(rename="eventId")]
  pub event_id: EventId,

  #[serde(rename="entrantName")]
  pub entrant_name: StringNE,

  #[serde(rename="boatName")]
  pub boat_name: StringNE,

  #[serde(rename="sailNumber")]
  pub sail_number: StringNE,

  pub yardstick: f64,

  pub handicap: f64,

  #[serde(rename="handicapSecs")]
  pub handicap_secs: f64,

  #[serde(rename="finishTime")]
  pub finish_time: RResult<LocalTime>,

  #[serde(rename="elapsedTime")]
  pub elapsed_time: RResult<Duration>,

  #[serde(rename="elapsedTimeYardstick")]
  pub elapsed_time_yardstick: RResult<Duration>,

  #[serde(rename="elapsedTimeHandicap")]
  pub elapsed_time_handicap: RResult<Duration>,

  pub score: u16,

  #[serde(rename="handicapChange")]
  pub handicap_change: f64,

  #[serde(rename="handicapNew")]
  pub handicap_new: f64,
}

impl EventResult {
  pub fn new(entrant_id: EntrantId, event_id: EventId, entrant_name: StringNE, boat_name: StringNE, sail_number: StringNE, yardstick: f64, handicap: f64, handicap_secs: f64, finish_time: RResult<LocalTime>, elapsed_time: RResult<Duration>, elapsed_time_yardstick: RResult<Duration>, elapsed_time_handicap: RResult<Duration>, score: u16, handicap_change: f64, handicap_new: f64) -> EventResult {
    EventResult {
      entrant_id: entrant_id,
      event_id: event_id,
      entrant_name: entrant_name,
      boat_name: boat_name,
      sail_number: sail_number,
      yardstick: yardstick,
      handicap: handicap,
      handicap_secs: handicap_secs,
      finish_time: finish_time,
      elapsed_time: elapsed_time,
      elapsed_time_yardstick: elapsed_time_yardstick,
      elapsed_time_handicap: elapsed_time_handicap,
      score: score,
      handicap_change: handicap_change,
      handicap_new: handicap_new,
    }
  }
}

#[derive(Clone,PartialEq)]
pub struct EventResultTable(pub WithId<EventResult>);

impl Serialize for EventResultTable
{
  fn serialize<S>(&self, serializer: S) -> Result<S::Ok, S::Error>
  where
      S: Serializer,
  {
      self.0.serialize(serializer)
  }
}

impl<'de> Deserialize<'de> for EventResultTable
{
  fn deserialize<D>(deserializer: D) -> Result<EventResultTable, D::Error>
  where
      D: Deserializer<'de>,
  {
      let v = WithId::<EventResult>::deserialize(deserializer)?;
      Ok(EventResultTable(v))
  }
}

pub type EventResultId = DbKey<EventResultTable>;

/**
 * Overide a handicap before a specifed race
 */
#[derive(Clone,Deserialize,PartialEq,Serialize)]
pub struct HandicapOverride {
  #[serde(rename="raceId")]
  pub race_id: RaceId,

  #[serde(rename="entrantId")]
  pub entrant_id: EntrantId,

  #[serde(rename="handicapNew")]
  pub handicap_new: f64,
}

impl HandicapOverride {
  pub fn new(race_id: RaceId, entrant_id: EntrantId, handicap_new: f64) -> HandicapOverride {
    HandicapOverride {
      race_id: race_id,
      entrant_id: entrant_id,
      handicap_new: handicap_new,
    }
  }
}

#[derive(Clone,PartialEq)]
pub struct HandicapOverrideTable(pub WithId<HandicapOverride>);

impl Serialize for HandicapOverrideTable
{
  fn serialize<S>(&self, serializer: S) -> Result<S::Ok, S::Error>
  where
      S: Serializer,
  {
      self.0.serialize(serializer)
  }
}

impl<'de> Deserialize<'de> for HandicapOverrideTable
{
  fn deserialize<D>(deserializer: D) -> Result<HandicapOverrideTable, D::Error>
  where
      D: Deserializer<'de>,
  {
      let v = WithId::<HandicapOverride>::deserialize(deserializer)?;
      Ok(HandicapOverrideTable(v))
  }
}

pub type HandicapOverrideId = DbKey<HandicapOverrideTable>;

#[derive(Clone,Deserialize,Eq,Hash,PartialEq,Serialize)]
pub enum RResult<T> {
  #[serde(rename="finished")]
  Finished(T),

  #[serde(rename="dnc")]
  Dnc,

  #[serde(rename="dns")]
  Dns,

  #[serde(rename="dnf")]
  Dnf,

  #[serde(rename="dsq")]
  Dsq,

  #[serde(rename="avg")]
  Avg,
}

/**
 * Time duration in seconds
 */
pub type Duration = f64;
