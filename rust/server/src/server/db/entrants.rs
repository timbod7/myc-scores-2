use adl::{
    db::{
        schema::{self},
        types::DbConversions,
    },
    gen::mycscores::{
        apis::ui::{EntrantFilter, EntrantSorting},
        db::{Entrant, EntrantTable},
    },
};
use sea_query::{extension::postgres::PgExpr, ColumnRef, IntoIden};

use super::utils::{Crudable, DbQueryable, DbReadable};

impl DbReadable for Entrant {
    type DbTable = EntrantTable;

    fn table() -> sea_query::DynIden {
        schema::Entrant::table().into_iden()
    }

    fn id_column() -> &'static str {
        schema::Entrant::id().column
    }

    fn value_columns() -> Vec<&'static str> {
        vec![
            schema::Entrant::season_id().column,
            schema::Entrant::entrant_name().column,
            schema::Entrant::boat_name().column,
            schema::Entrant::sail_number().column,
            schema::Entrant::yardstick().column,
            schema::Entrant::initial_handicap().column,
        ]
    }

    fn from_db(r: &sqlx::postgres::PgRow) -> Self {
        Entrant {
            season_id: schema::Entrant::season_id().from_row(r),
            entrant_name: schema::Entrant::entrant_name().from_row(r),
            boat_name: schema::Entrant::boat_name().from_row(r),
            sail_number: schema::Entrant::sail_number().from_row(r),
            yardstick: schema::Entrant::yardstick().from_row(r),
            initial_handicap: schema::Entrant::initial_handicap().from_row(r),
        }
    }
}

impl Crudable for Entrant {
    fn insert_values(&self) -> Vec<sea_query::SimpleExpr> {
        vec![
            self.season_id.to_db().into(),
            self.entrant_name.to_db().into(),
            self.boat_name.to_db().into(),
            self.sail_number.to_db().into(),
            self.yardstick.to_db().into(),
            self.initial_handicap.to_db().into(),
        ]
    }

    fn id_prefix() -> String {
        "E-".to_owned()
    }
}

impl DbQueryable for Entrant {
    type S = EntrantSorting;
    type F = EntrantFilter;

    fn cref_from_sorting(s: &Self::S) -> ColumnRef {
        match s {
            EntrantSorting::EntrantName => schema::Entrant::entrant_name().cref(),
            EntrantSorting::BoatName => schema::Entrant::boat_name().cref(),
            EntrantSorting::SailNumber => schema::Entrant::sail_number().cref(),
        }
    }

    fn filter_prim(f: &Self::F) -> sea_query::SimpleExpr {
        match f {
            EntrantFilter::EntrantNameMatches(s) => schema::Entrant::entrant_name()
                .expr()
                .ilike(format!("%{}%", s)),
            EntrantFilter::BoatNameMatches(s) => schema::Entrant::boat_name()
                .expr()
                .ilike(format!("%{}%", s)),
            EntrantFilter::SailNumberMatches(s) => schema::Entrant::sail_number()
                .expr()
                .ilike(format!("%{}%", s)),
        }
    }
}
