-- Schema auto-generated from adl modules: mycscores.db
--
-- column comments show original ADL types

create table app_user(
  id text not null,                    -- String
  fullname text not null,              -- StringNE
  email text not null,                 -- StringNE
  is_admin boolean not null,           -- Bool
  hashed_password text not null,       -- StringNE
  primary key(id)
);

create table calendar_entry(
  id text not null,                    -- String
  season_id text not null,             -- SeasonId
  date date not null,                  -- LocalDate
  description text not null,           -- StringNE
  primary key(id)
);

create table entrant(
  id text not null,                    -- String
  season_id text not null,             -- SeasonId
  entrant_name text not null,          -- StringNE
  boat_name text not null,             -- StringNE
  sail_number text not null,           -- StringNE
  yardstick double precision not null, -- Double
  initial_handicap double precision not null, -- Double
  primary key(id)
);

create table event(
  id text not null,                    -- String
  abbreviation text not null,          -- StringNE
  series_id text not null,             -- SeriesId
  race_id text not null,               -- RaceId
  race_type text not null,             -- RaceType
  primary key(id)
);

create table event_result(
  id text not null,                    -- String
  entrant_id text not null,            -- EntrantId
  event_id text not null,              -- EventId
  entrant_name text not null,          -- StringNE
  boat_name text not null,             -- StringNE
  sail_number text not null,           -- StringNE
  yardstick double precision not null, -- Double
  handicap double precision not null,  -- Double
  handicap_secs double precision not null, -- Double
  finish_time jsonb not null,          -- RResult<LocalTime>
  elapsed_time jsonb not null,         -- RResult<Duration>
  elapsed_time_yardstick jsonb not null, -- RResult<Duration>
  elapsed_time_handicap jsonb not null, -- RResult<Duration>
  score smallint not null,             -- Word16
  handicap_change double precision not null, -- Double
  handicap_new double precision not null, -- Double
  primary key(id)
);

create table handicap_override(
  id text not null,                    -- String
  race_id text not null,               -- RaceId
  entrant_id text not null,            -- EntrantId
  handicap_new double precision not null, -- Double
  primary key(id)
);

create table race(
  id text not null,                    -- String
  scheduled_date date not null,        -- LocalDate
  race_number smallint not null,       -- Word8
  duty_officer text not null,          -- String
  primary key(id)
);

create table race_result(
  id text not null,                    -- String
  race_id text not null,               -- RaceId
  entrant_id text not null,            -- EntrantId
  result jsonb not null,               -- RResult<LocalTime>
  primary key(id)
);

create table race_start(
  id text not null,                    -- String
  race_id text not null,               -- RaceId
  date date not null,                  -- LocalDate
  abandoned boolean not null,          -- Bool
  start_time time not null,            -- LocalTime
  conditions text not null,            -- StringML
  notes text not null,                 -- StringML
  primary key(id)
);

create table season(
  id text not null,                    -- String
  name text not null,                  -- StringNE
  primary key(id)
);

create table series(
  id text not null,                    -- String
  season_id text not null,             -- SeasonId
  name text not null,                  -- StringNE
  abbreviation text not null,          -- StringNE
  is_handicap boolean not null,        -- Bool
  handicap_system text,                -- Nullable<HandicapSystem>
  num_drops smallint not null,         -- Word8
  primary key(id)
);

create index app_user_1_idx on app_user(email);
alter table app_user add constraint app_user_1_con unique (email);
alter table calendar_entry add constraint calendar_entry_season_id_fk foreign key (season_id) references season(id);
alter table entrant add constraint entrant_season_id_fk foreign key (season_id) references season(id);
alter table event add constraint event_series_id_fk foreign key (series_id) references series(id);
alter table event add constraint event_race_id_fk foreign key (race_id) references race(id);
alter table event_result add constraint event_result_entrant_id_fk foreign key (entrant_id) references entrant(id);
alter table event_result add constraint event_result_event_id_fk foreign key (event_id) references event(id);
alter table handicap_override add constraint handicap_override_race_id_fk foreign key (race_id) references race(id);
alter table handicap_override add constraint handicap_override_entrant_id_fk foreign key (entrant_id) references entrant(id);
alter table race_result add constraint race_result_race_id_fk foreign key (race_id) references race(id);
alter table race_result add constraint race_result_entrant_id_fk foreign key (entrant_id) references entrant(id);
alter table race_start add constraint race_start_race_id_fk foreign key (race_id) references race(id);
alter table series add constraint series_season_id_fk foreign key (season_id) references season(id);
