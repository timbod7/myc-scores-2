use adl::gen::common::db_api::{BoolExpr, SortColumn, SortOrder};
use sea_query::{ColumnRef, Cond, Order, SimpleExpr, Value};

pub trait DbTabular {
    type S;
    type F;
    type R;

    fn cref_from_sorting(s: &Self::S) -> ColumnRef;

    fn filter_prim(f: &Self::F) -> SimpleExpr;

    fn filter(v0: &BoolExpr<Self::F>) -> SimpleExpr {
        match v0 {
            BoolExpr::Const(v) => SimpleExpr::Constant(Value::Bool(Some(*v))),
            BoolExpr::Prim(v) => Self::filter_prim(v),
            BoolExpr::Not(v) => SimpleExpr::not(Self::filter(v)),
            BoolExpr::And(vs) => {
                let mut cond = Cond::all();
                for v in vs {
                    cond = cond.add(Self::filter(v));
                }
                SimpleExpr::from(cond)
            }
            BoolExpr::Or(vs) => {
                let mut cond = Cond::any();
                for v in vs {
                    cond = cond.add(Self::filter(v));
                }
                SimpleExpr::from(cond)
            }
        }
    }

    fn sort_cols(sorting: &Vec<SortColumn<Self::S>>) -> Vec<(ColumnRef, Order)> {
        let cols: Vec<(ColumnRef, Order)> = sorting
            .iter()
            .map(|s| {
                (
                    Self::cref_from_sorting(&s.column),
                    match s.order {
                        SortOrder::Asc => Order::Asc,
                        SortOrder::Desc => Order::Desc,
                    },
                )
            })
            .collect();
        cols
    }
}
