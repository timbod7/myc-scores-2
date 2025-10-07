use adl::gen::common::db_api::Paginated;
use adl::gen::common::http::Unit;
use adl::gen::mycscores::apis::ui::{SeasonQueryReq, WithId};
use adl::gen::mycscores::db::{Season, SeasonId};

use crate::server::db;
use crate::server::middleware::adl_interop::HandlerResult;

use super::ReqContext;

pub async fn create_season(ctx: ReqContext, i: Season) -> HandlerResult<SeasonId> {
    let id = db::seasons::create_season(ctx.state.db_pool.as_ref(), &i).await?;
    Ok(id)
}

pub async fn update_season(ctx: ReqContext, i: WithId<SeasonId, Season>) -> HandlerResult<Unit> {
    db::seasons::update_season(&ctx.state.db_pool, &i.id, &i.value).await?;
    Ok(Unit {})
}

pub async fn delete_season(ctx: ReqContext, i: SeasonId) -> HandlerResult<Unit> {
    db::seasons::delete_season(&ctx.state.db_pool, &i).await?;
    Ok(Unit {})
}

pub async fn query_seasons(
    ctx: ReqContext,
    i: SeasonQueryReq,
) -> HandlerResult<Paginated<WithId<SeasonId, Season>>> {
    let users = db::seasons::query_seasons(&ctx.state.db_pool, &i).await?;
    let total_count = db::seasons::count_seasons(&ctx.state.db_pool, &i).await?;
    let page = Paginated {
        items: users.into_iter().map(with_id).collect(),
        current_offset: i.page.offset,
        total_count,
    };
    Ok(page)
}

fn with_id<I, V>(p: (I, V)) -> WithId<I, V> {
    WithId {
        id: p.0,
        value: p.1,
    }
}
