// @generated from adl module mycscores.apis.ui

use crate::custom::common::time::LocalDate;
use crate::custom::common::time::LocalTime;
use crate::gen::common::db_api::CrudApi;
use crate::gen::common::db_api::Paginated;
use crate::gen::common::db_api::TabularQueryReq;
use crate::gen::common::db_api::WithId;
use crate::gen::common::http::HttpMethod;
use crate::gen::common::http::HttpReq;
use crate::gen::common::http::HttpSecurity;
use crate::gen::common::http::Unit;
use crate::gen::common::strings::EmailAddress;
use crate::gen::common::strings::Password;
use crate::gen::common::strings::StringML;
use crate::gen::common::strings::StringNE;
use crate::gen::mycscores::db::AppUserId;
use crate::gen::mycscores::db::CalendarEntry;
use crate::gen::mycscores::db::Entrant;
use crate::gen::mycscores::db::EntrantId;
use crate::gen::mycscores::db::Event;
use crate::gen::mycscores::db::EventId;
use crate::gen::mycscores::db::EventResult;
use crate::gen::mycscores::db::RResult;
use crate::gen::mycscores::db::RaceId;
use crate::gen::mycscores::db::RaceType;
use crate::gen::mycscores::db::Season;
use crate::gen::mycscores::db::SeasonId;
use crate::gen::mycscores::db::Series;
use crate::gen::mycscores::db::SeriesId;
use serde::Deserialize;
use serde::Serialize;

#[derive(Clone,Deserialize,PartialEq,Serialize)]
pub struct ApiRequests {
  /**
   * AWS default compatible health check
   */
  #[serde(default="ApiRequests::def_healthy")]
  pub healthy: HttpReq<(), ()>,

  /**
   * Login a user
   * The response will set an httpOnly cookie containing the refresh token
   */
  #[serde(default="ApiRequests::def_login")]
  pub login: HttpReq<LoginReq, LoginResp>,

  /**
   * Get a refreshed access token
   * If the refresh token is not provided in the request body, then it will
   * be read from the refrestToken cookie in the request.
   */
  #[serde(default="ApiRequests::def_refresh")]
  pub refresh: HttpReq<RefreshReq, RefreshResp>,

  /**
   * Clear the `refreshToken` cookie.
   */
  #[serde(default="ApiRequests::def_logout")]
  pub logout: HttpReq<Unit, Unit>,

  /**
   * Gets info about the logged in user
   */
  #[serde(default="ApiRequests::def_who_am_i")]
  pub who_am_i: HttpReq<(), UserWithId>,

  #[serde(default="ApiRequests::def_seasons")]
  pub seasons: HttpReq<(), Vec<SeasonDetails>>,

  #[serde(default="ApiRequests::def_race_schedule")]
  #[serde(rename="raceSchedule")]
  pub race_schedule: HttpReq<SeasonId, RaceScheduleResp>,

  /**
   * Fetch the entrants for a race
   */
  #[serde(default="ApiRequests::def_get_race_entrants")]
  #[serde(rename="getRaceEntrants")]
  pub get_race_entrants: HttpReq<RaceId, Vec<RaceEntrant>>,

  /**
   * Fetch the results for a race
   */
  #[serde(default="ApiRequests::def_get_race_results")]
  #[serde(rename="getRaceResults")]
  pub get_race_results: HttpReq<RaceId, GetRaceResultsResp>,

  /**
   * Set/update the results for a race
   */
  #[serde(default="ApiRequests::def_update_race_results")]
  #[serde(rename="updateRaceResults")]
  pub update_race_results: HttpReq<UpdateRaceResultsReq, Unit>,

  /**
   * Fetch results for an event
   */
  #[serde(default="ApiRequests::def_get_event_results")]
  #[serde(rename="getEventResults")]
  pub get_event_results: HttpReq<EventId, GetEventResultsResp>,

  /**
   * Fetch results for all events in a season
   */
  #[serde(default="ApiRequests::def_get_season_event_results")]
  #[serde(rename="getSeasonEventResults")]
  pub get_season_event_results: HttpReq<SeasonId, Vec<EventResults>>,

  /**
   * Fetch results for a series
   */
  #[serde(default="ApiRequests::def_get_series_results")]
  #[serde(rename="getSeriesResults")]
  pub get_series_results: HttpReq<SeriesId, GetSeriesResultsResp>,

  /**
   * Create a new user
   */
  #[serde(default="ApiRequests::def_create_user")]
  pub create_user: HttpReq<UserDetails, AppUserId>,

  /**
   * Update a user
   */
  #[serde(default="ApiRequests::def_update_user")]
  pub update_user: HttpReq<WithId<AppUserId, UserDetails>, Unit>,

  /**
   * Delete a user
   */
  #[serde(default="ApiRequests::def_delete_user")]
  pub delete_user: HttpReq<AppUserId, Unit>,

  /**
   * Query users
   */
  #[serde(default="ApiRequests::def_query_users")]
  pub query_users: HttpReq<UserQueryReq, Paginated<UserWithId>>,

  #[serde(default="ApiRequests::def_crud_seasons")]
  pub crud_seasons: CrudApi<SeasonId, Season, SeasonSorting, SeasonFilter>,
}

impl ApiRequests {
  pub fn new() -> ApiRequests {
    ApiRequests {
      healthy: ApiRequests::def_healthy(),
      login: ApiRequests::def_login(),
      refresh: ApiRequests::def_refresh(),
      logout: ApiRequests::def_logout(),
      who_am_i: ApiRequests::def_who_am_i(),
      seasons: ApiRequests::def_seasons(),
      race_schedule: ApiRequests::def_race_schedule(),
      get_race_entrants: ApiRequests::def_get_race_entrants(),
      get_race_results: ApiRequests::def_get_race_results(),
      update_race_results: ApiRequests::def_update_race_results(),
      get_event_results: ApiRequests::def_get_event_results(),
      get_season_event_results: ApiRequests::def_get_season_event_results(),
      get_series_results: ApiRequests::def_get_series_results(),
      create_user: ApiRequests::def_create_user(),
      update_user: ApiRequests::def_update_user(),
      delete_user: ApiRequests::def_delete_user(),
      query_users: ApiRequests::def_query_users(),
      crud_seasons: ApiRequests::def_crud_seasons(),
    }
  }

  pub fn def_healthy() -> HttpReq<(), ()> {
    HttpReq::<(), ()>{method : HttpMethod::Get, path : "/".to_string(), security : HttpSecurity::Public, req_type : std::marker::PhantomData, resp_type : std::marker::PhantomData}
  }

  pub fn def_login() -> HttpReq<LoginReq, LoginResp> {
    HttpReq::<LoginReq, LoginResp>{method : HttpMethod::Post, path : "/login".to_string(), security : HttpSecurity::Public, req_type : std::marker::PhantomData, resp_type : std::marker::PhantomData}
  }

  pub fn def_refresh() -> HttpReq<RefreshReq, RefreshResp> {
    HttpReq::<RefreshReq, RefreshResp>{method : HttpMethod::Post, path : "/refresh".to_string(), security : HttpSecurity::Public, req_type : std::marker::PhantomData, resp_type : std::marker::PhantomData}
  }

  pub fn def_logout() -> HttpReq<Unit, Unit> {
    HttpReq::<Unit, Unit>{method : HttpMethod::Post, path : "/logout".to_string(), security : HttpSecurity::Public, req_type : std::marker::PhantomData, resp_type : std::marker::PhantomData}
  }

  pub fn def_who_am_i() -> HttpReq<(), UserWithId> {
    HttpReq::<(), UserWithId>{method : HttpMethod::Get, path : "/whoami".to_string(), security : HttpSecurity::Token, req_type : std::marker::PhantomData, resp_type : std::marker::PhantomData}
  }

  pub fn def_seasons() -> HttpReq<(), Vec<SeasonDetails>> {
    HttpReq::<(), Vec<SeasonDetails>>{method : HttpMethod::Post, path : "/seasons".to_string(), security : HttpSecurity::Public, req_type : std::marker::PhantomData, resp_type : std::marker::PhantomData}
  }

  pub fn def_race_schedule() -> HttpReq<SeasonId, RaceScheduleResp> {
    HttpReq::<SeasonId, RaceScheduleResp>{method : HttpMethod::Post, path : "/race-schedule".to_string(), security : HttpSecurity::Public, req_type : std::marker::PhantomData, resp_type : std::marker::PhantomData}
  }

  pub fn def_get_race_entrants() -> HttpReq<RaceId, Vec<RaceEntrant>> {
    HttpReq::<RaceId, Vec<RaceEntrant>>{method : HttpMethod::Post, path : "/raceentrants-get".to_string(), security : HttpSecurity::Public, req_type : std::marker::PhantomData, resp_type : std::marker::PhantomData}
  }

  pub fn def_get_race_results() -> HttpReq<RaceId, GetRaceResultsResp> {
    HttpReq::<RaceId, GetRaceResultsResp>{method : HttpMethod::Post, path : "/results/race".to_string(), security : HttpSecurity::Public, req_type : std::marker::PhantomData, resp_type : std::marker::PhantomData}
  }

  pub fn def_update_race_results() -> HttpReq<UpdateRaceResultsReq, Unit> {
    HttpReq::<UpdateRaceResultsReq, Unit>{method : HttpMethod::Post, path : "/results/race/update".to_string(), security : HttpSecurity::Token, req_type : std::marker::PhantomData, resp_type : std::marker::PhantomData}
  }

  pub fn def_get_event_results() -> HttpReq<EventId, GetEventResultsResp> {
    HttpReq::<EventId, GetEventResultsResp>{method : HttpMethod::Post, path : "/results/event".to_string(), security : HttpSecurity::Public, req_type : std::marker::PhantomData, resp_type : std::marker::PhantomData}
  }

  pub fn def_get_season_event_results() -> HttpReq<SeasonId, Vec<EventResults>> {
    HttpReq::<SeasonId, Vec<EventResults>>{method : HttpMethod::Post, path : "/results/season-events".to_string(), security : HttpSecurity::Public, req_type : std::marker::PhantomData, resp_type : std::marker::PhantomData}
  }

  pub fn def_get_series_results() -> HttpReq<SeriesId, GetSeriesResultsResp> {
    HttpReq::<SeriesId, GetSeriesResultsResp>{method : HttpMethod::Post, path : "/results/series".to_string(), security : HttpSecurity::Public, req_type : std::marker::PhantomData, resp_type : std::marker::PhantomData}
  }

  pub fn def_create_user() -> HttpReq<UserDetails, AppUserId> {
    HttpReq::<UserDetails, AppUserId>{method : HttpMethod::Post, path : "/crud/users/create".to_string(), security : HttpSecurity::TokenWithRole("admin".to_string()), req_type : std::marker::PhantomData, resp_type : std::marker::PhantomData}
  }

  pub fn def_update_user() -> HttpReq<WithId<AppUserId, UserDetails>, Unit> {
    HttpReq::<WithId<AppUserId, UserDetails>, Unit>{method : HttpMethod::Post, path : "/crud/users/update".to_string(), security : HttpSecurity::TokenWithRole("admin".to_string()), req_type : std::marker::PhantomData, resp_type : std::marker::PhantomData}
  }

  pub fn def_delete_user() -> HttpReq<AppUserId, Unit> {
    HttpReq::<AppUserId, Unit>{method : HttpMethod::Post, path : "/crud/users/delete".to_string(), security : HttpSecurity::TokenWithRole("admin".to_string()), req_type : std::marker::PhantomData, resp_type : std::marker::PhantomData}
  }

  pub fn def_query_users() -> HttpReq<UserQueryReq, Paginated<UserWithId>> {
    HttpReq::<UserQueryReq, Paginated<UserWithId>>{method : HttpMethod::Get, path : "/crud/users/query".to_string(), security : HttpSecurity::TokenWithRole("admin".to_string()), req_type : std::marker::PhantomData, resp_type : std::marker::PhantomData}
  }

  pub fn def_crud_seasons() -> CrudApi<SeasonId, Season, SeasonSorting, SeasonFilter> {
    CrudApi::<SeasonId, Season, SeasonSorting, SeasonFilter>{create : HttpReq::<Season, SeasonId>{method : HttpMethod::Post, path : "/crud/seasons/create".to_string(), security : HttpSecurity::TokenWithRole("admin".to_string()), req_type : std::marker::PhantomData, resp_type : std::marker::PhantomData}, update : HttpReq::<WithId<SeasonId, Season>, Unit>{method : HttpMethod::Post, path : "/crud/seasons/update".to_string(), security : HttpSecurity::TokenWithRole("admin".to_string()), req_type : std::marker::PhantomData, resp_type : std::marker::PhantomData}, delete : HttpReq::<SeasonId, Unit>{method : HttpMethod::Post, path : "/crud/seasons/delete".to_string(), security : HttpSecurity::TokenWithRole("admin".to_string()), req_type : std::marker::PhantomData, resp_type : std::marker::PhantomData}, query : HttpReq::<TabularQueryReq<SeasonSorting, SeasonFilter>, Paginated<WithId<SeasonId, Season>>>{method : HttpMethod::Get, path : "/crud/seasons/query".to_string(), security : HttpSecurity::TokenWithRole("admin".to_string()), req_type : std::marker::PhantomData, resp_type : std::marker::PhantomData}}
  }
}

#[derive(Clone,Deserialize,Eq,Hash,PartialEq,Serialize)]
pub struct LoginReq {
  pub email: StringNE,

  pub password: Password,
}

impl LoginReq {
  pub fn new(email: StringNE, password: Password) -> LoginReq {
    LoginReq {
      email: email,
      password: password,
    }
  }
}

#[derive(Clone,Deserialize,Eq,Hash,PartialEq,Serialize)]
pub enum LoginResp {
  #[serde(rename="tokens")]
  Tokens(LoginTokens),

  #[serde(rename="invalid_credentials")]
  InvalidCredentials,
}

#[derive(Clone,Deserialize,Eq,Hash,PartialEq,Serialize)]
pub struct RefreshReq {
  #[serde(default="RefreshReq::def_refresh_token")]
  pub refresh_token: Option<StringNE>,
}

impl RefreshReq {
  pub fn new() -> RefreshReq {
    RefreshReq {
      refresh_token: RefreshReq::def_refresh_token(),
    }
  }

  pub fn def_refresh_token() -> Option<StringNE> {
    None
  }
}

#[derive(Clone,Deserialize,Eq,Hash,PartialEq,Serialize)]
pub enum RefreshResp {
  #[serde(rename="access_token")]
  AccessToken(StringNE),

  #[serde(rename="invalid_refresh_token")]
  InvalidRefreshToken,
}

#[derive(Clone,Deserialize,Eq,Hash,PartialEq,Serialize)]
pub struct LoginTokens {
  pub access_jwt: StringNE,

  pub refresh_jwt: StringNE,
}

impl LoginTokens {
  pub fn new(access_jwt: StringNE, refresh_jwt: StringNE) -> LoginTokens {
    LoginTokens {
      access_jwt: access_jwt,
      refresh_jwt: refresh_jwt,
    }
  }
}

#[derive(Clone,Deserialize,Eq,Hash,PartialEq,Serialize)]
pub struct SeasonDetails {
  pub season: WithId<SeasonId, Season>,

  pub series: Vec<WithId<SeriesId, Series>>,
}

impl SeasonDetails {
  pub fn new(season: WithId<SeasonId, Season>, series: Vec<WithId<SeriesId, Series>>) -> SeasonDetails {
    SeasonDetails {
      season: season,
      series: series,
    }
  }
}

#[derive(Clone,Deserialize,Eq,Hash,PartialEq,Serialize)]
pub struct RaceScheduleEntry {
  pub race_id: RaceId,

  pub date: LocalDate,

  pub race_number: u8,

  pub events: Vec<WithId<EventId, Event>>,

  pub duty_officer: String,
}

impl RaceScheduleEntry {
  pub fn new(race_id: RaceId, date: LocalDate, race_number: u8, events: Vec<WithId<EventId, Event>>, duty_officer: String) -> RaceScheduleEntry {
    RaceScheduleEntry {
      race_id: race_id,
      date: date,
      race_number: race_number,
      events: events,
      duty_officer: duty_officer,
    }
  }
}

#[derive(Clone,Deserialize,PartialEq,Serialize)]
pub struct RaceEntrant {
  pub entrant: WithId<EntrantId, Entrant>,

  pub handicap: f64,

  pub handicap_secs: f64,
}

impl RaceEntrant {
  pub fn new(entrant: WithId<EntrantId, Entrant>, handicap: f64, handicap_secs: f64) -> RaceEntrant {
    RaceEntrant {
      entrant: entrant,
      handicap: handicap,
      handicap_secs: handicap_secs,
    }
  }
}

#[derive(Clone,Deserialize,Eq,Hash,PartialEq,Serialize)]
pub struct RaceScheduleResp {
  pub season: Season,

  pub races: Vec<RaceScheduleEntry>,

  pub calendar_entries: Vec<CalendarEntry>,
}

impl RaceScheduleResp {
  pub fn new(season: Season, races: Vec<RaceScheduleEntry>, calendar_entries: Vec<CalendarEntry>) -> RaceScheduleResp {
    RaceScheduleResp {
      season: season,
      races: races,
      calendar_entries: calendar_entries,
    }
  }
}

#[derive(Clone,Deserialize,PartialEq,Serialize)]
pub struct EntrantRaceResult {
  pub entrant_id: EntrantId,

  pub result: RResult<LocalTime>,
}

impl EntrantRaceResult {
  pub fn new(entrant_id: EntrantId, result: RResult<LocalTime>) -> EntrantRaceResult {
    EntrantRaceResult {
      entrant_id: entrant_id,
      result: result,
    }
  }
}

#[derive(Clone,Deserialize,Eq,Hash,PartialEq,Serialize)]
pub struct RaceStartDetails {
  pub date: LocalDate,

  pub start_time: LocalTime,

  pub conditions: StringML,

  pub notes: StringML,

  pub abandoned: bool,
}

impl RaceStartDetails {
  pub fn new(date: LocalDate, start_time: LocalTime, conditions: StringML, notes: StringML, abandoned: bool) -> RaceStartDetails {
    RaceStartDetails {
      date: date,
      start_time: start_time,
      conditions: conditions,
      notes: notes,
      abandoned: abandoned,
    }
  }
}

#[derive(Clone,Deserialize,PartialEq,Serialize)]
pub struct GetRaceResultsResp {
  pub scheduled_date: LocalDate,

  pub events: Vec<WithId<EventId, Event>>,

  pub start_details: Option<RaceStartDetails>,

  pub results: Vec<EntrantRaceResult>,
}

impl GetRaceResultsResp {
  pub fn new(scheduled_date: LocalDate, events: Vec<WithId<EventId, Event>>, start_details: Option<RaceStartDetails>, results: Vec<EntrantRaceResult>) -> GetRaceResultsResp {
    GetRaceResultsResp {
      scheduled_date: scheduled_date,
      events: events,
      start_details: start_details,
      results: results,
    }
  }
}

#[derive(Clone,Deserialize,PartialEq,Serialize)]
pub struct EventResults {
  pub date: LocalDate,

  pub start_time: LocalTime,

  pub abbreviation: StringNE,

  pub conditions: StringML,

  pub is_handicap: bool,

  pub abandoned: bool,

  pub race_type: RaceType,

  pub results: Vec<EventResult>,
}

impl EventResults {
  pub fn new(date: LocalDate, start_time: LocalTime, abbreviation: StringNE, conditions: StringML, is_handicap: bool, abandoned: bool, race_type: RaceType, results: Vec<EventResult>) -> EventResults {
    EventResults {
      date: date,
      start_time: start_time,
      abbreviation: abbreviation,
      conditions: conditions,
      is_handicap: is_handicap,
      abandoned: abandoned,
      race_type: race_type,
      results: results,
    }
  }
}

pub type GetEventResultsResp = Option<EventResults>;

#[derive(Clone,Deserialize,PartialEq,Serialize)]
pub struct EntrantSeriesResult {
  pub entrant_id: EntrantId,

  pub event_id: EventId,

  pub score: u16,
}

impl EntrantSeriesResult {
  pub fn new(entrant_id: EntrantId, event_id: EventId, score: u16) -> EntrantSeriesResult {
    EntrantSeriesResult {
      entrant_id: entrant_id,
      event_id: event_id,
      score: score,
    }
  }
}

#[derive(Clone,Deserialize,PartialEq,Serialize)]
pub struct GetSeriesResultsResp {
  pub season: WithId<SeasonId, Season>,

  pub series: WithId<SeriesId, Series>,

  pub events: Vec<WithId<EventId, Event>>,

  pub entrants: Vec<WithId<EntrantId, Entrant>>,

  pub results: Vec<EntrantSeriesResult>,
}

impl GetSeriesResultsResp {
  pub fn new(season: WithId<SeasonId, Season>, series: WithId<SeriesId, Series>, events: Vec<WithId<EventId, Event>>, entrants: Vec<WithId<EntrantId, Entrant>>, results: Vec<EntrantSeriesResult>) -> GetSeriesResultsResp {
    GetSeriesResultsResp {
      season: season,
      series: series,
      events: events,
      entrants: entrants,
      results: results,
    }
  }
}

#[derive(Clone,Deserialize,PartialEq,Serialize)]
pub struct UpdateRaceResultsReq {
  pub race_id: RaceId,

  pub start_details: RaceStartDetails,

  pub results: Vec<EntrantRaceResult>,
}

impl UpdateRaceResultsReq {
  pub fn new(race_id: RaceId, start_details: RaceStartDetails, results: Vec<EntrantRaceResult>) -> UpdateRaceResultsReq {
    UpdateRaceResultsReq {
      race_id: race_id,
      start_details: start_details,
      results: results,
    }
  }
}

#[derive(Clone,Deserialize,Eq,Hash,PartialEq,Serialize)]
pub struct User {
  pub fullname: StringNE,

  pub email: EmailAddress,

  pub is_admin: bool,
}

impl User {
  pub fn new(fullname: StringNE, email: EmailAddress, is_admin: bool) -> User {
    User {
      fullname: fullname,
      email: email,
      is_admin: is_admin,
    }
  }
}

pub type UserWithId = WithId<AppUserId, User>;

#[derive(Clone,Deserialize,Eq,Hash,PartialEq,Serialize)]
pub enum UserSorting {
  #[serde(rename="fullname")]
  Fullname,

  #[serde(rename="email")]
  Email,
}

#[derive(Clone,Deserialize,Eq,Hash,PartialEq,Serialize)]
pub enum UserFilter {
  #[serde(rename="fullname_matches")]
  FullnameMatches(String),
}

pub type UserQueryReq = TabularQueryReq<UserSorting, UserFilter>;

#[derive(Clone,Deserialize,Eq,Hash,PartialEq,Serialize)]
pub struct UserDetails {
  pub fullname: StringNE,

  pub email: EmailAddress,

  pub is_admin: bool,

  pub password: Password,
}

impl UserDetails {
  pub fn new(fullname: StringNE, email: EmailAddress, is_admin: bool, password: Password) -> UserDetails {
    UserDetails {
      fullname: fullname,
      email: email,
      is_admin: is_admin,
      password: password,
    }
  }
}

#[derive(Clone,Deserialize,Eq,Hash,PartialEq,Serialize)]
pub enum SeasonSorting {
  #[serde(rename="name")]
  Name,
}

#[derive(Clone,Deserialize,Eq,Hash,PartialEq,Serialize)]
pub enum SeasonFilter {
  #[serde(rename="name_matches")]
  NameMatches(String),
}
