use adl::gen::common::db_api::{Paginated, TabularQueryReq, WithId};
use adl::gen::common::http::Unit;
use adl::gen::mycscores::apis::ui::{SeasonFilter, SeasonSorting};
use adl::gen::mycscores::db::{Season, SeasonId};

use crate::server::db;
use crate::server::middleware::adl_interop::HandlerResult;

use super::ReqContext;

pub async fn create_season(ctx: ReqContext, i: Season) -> HandlerResult<SeasonId> {
    let mut tx = ctx.state.db_pool.begin().await?;
    let id = db::utils::create(&mut tx, i).await?;
    Ok(id)
}

pub async fn update_season(ctx: ReqContext, i: WithId<SeasonId, Season>) -> HandlerResult<Unit> {
    let mut tx = ctx.state.db_pool.begin().await?;
    db::utils::update(&mut tx, &i.id, &i.value).await?;
    Ok(Unit {})
}

pub async fn delete_season(ctx: ReqContext, i: SeasonId) -> HandlerResult<Unit> {
    let mut tx = ctx.state.db_pool.begin().await?;
    db::utils::delete::<Season>(&mut tx, &i).await?;
    Ok(Unit {})
}

pub async fn query_seasons(
    ctx: ReqContext,
    i: TabularQueryReq<SeasonSorting, SeasonFilter>,
) -> HandlerResult<Paginated<WithId<SeasonId, Season>>> {
    let mut tx = ctx.state.db_pool.begin().await?;
    let page = db::utils::query_paginated::<Season>(&mut tx, &i).await?;
    Ok(page)
}
