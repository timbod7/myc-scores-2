use adl::gen::common::db_api::{Paginated, TabularQueryReq, WithId};
use adl::gen::common::http::Unit;
use adl::gen::mycscores::apis::ui::{EntrantFilter, EntrantSorting};
use adl::gen::mycscores::db::{Entrant, EntrantId};

use crate::server::db;
use crate::server::middleware::adl_interop::HandlerResult;

use super::ReqContext;

pub async fn create_entrant(ctx: ReqContext, i: Entrant) -> HandlerResult<EntrantId> {
    let mut tx = ctx.state.db_pool.begin().await?;
    let id = db::utils::create(&mut tx, i).await?;
    Ok(id)
}

pub async fn update_entrant(ctx: ReqContext, i: WithId<EntrantId, Entrant>) -> HandlerResult<Unit> {
    let mut tx = ctx.state.db_pool.begin().await?;
    db::utils::update(&mut tx, &i.id, &i.value).await?;
    Ok(Unit {})
}

pub async fn delete_entrant(ctx: ReqContext, i: EntrantId) -> HandlerResult<Unit> {
    let mut tx = ctx.state.db_pool.begin().await?;
    db::utils::delete::<Entrant>(&mut tx, &i).await?;
    Ok(Unit {})
}

pub async fn query_entrants(
    ctx: ReqContext,
    i: TabularQueryReq<EntrantSorting, EntrantFilter>,
) -> HandlerResult<Paginated<WithId<EntrantId, Entrant>>> {
    let mut tx = ctx.state.db_pool.begin().await?;
    let page = db::utils::query_paginated::<Entrant>(&mut tx, &i).await?;
    Ok(page)
}
