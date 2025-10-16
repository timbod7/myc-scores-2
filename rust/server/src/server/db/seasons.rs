use adl::{
    db::{
        schema::{self},
        types::DbConversions,
    },
    gen::mycscores::{
        apis::ui::{SeasonFilter, SeasonSorting},
        db::{Season, SeasonTable},
    },
};
use sea_query::{extension::postgres::PgExpr, ColumnRef, IntoIden};
use sqlx::Row;

use super::utils::{Crudable, DbQueryable, DbReadable};

impl DbReadable for Season {
    type DbTable = SeasonTable;

    fn table() -> sea_query::DynIden {
        schema::Season::table().into_iden()
    }

    fn id_column() -> sea_query::DynIden {
        schema::Season::id().iden()
    }

    fn value_columns() -> Vec<sea_query::DynIden> {
        vec![schema::Season::name().iden()]
    }

    fn from_db(r: &sqlx::postgres::PgRow) -> Self {
        Season {
            name: String::from_db(r.get(schema::Season::name().column)),
        }
    }
}

impl Crudable for Season {
    fn insert_values(&self) -> Vec<sea_query::SimpleExpr> {
        vec![self.name.to_db().into()]
    }

    fn id_prefix() -> String {
        "S-".to_owned()
    }
}

impl DbQueryable for Season {
    type S = SeasonSorting;
    type F = SeasonFilter;

    fn cref_from_sorting(s: &Self::S) -> ColumnRef {
        match s {
            SeasonSorting::Name => schema::Season::name().cref(),
        }
    }

    fn filter_prim(f: &Self::F) -> sea_query::SimpleExpr {
        match f {
            SeasonFilter::NameMatches(s) => schema::Season::name().expr().ilike(format!("%{}%", s)),
        }
    }
}
