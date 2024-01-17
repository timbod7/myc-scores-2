use jsonwebtoken::{DecodingKey, EncodingKey, Header, Validation};
use serde::{Deserialize, Serialize};
use std::time::{Duration, SystemTime, UNIX_EPOCH};

use super::ServerConfig;

#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct Claims {
    pub iss: String,
    pub sub: String,
    pub exp: usize,
    pub role: String,
}

pub const ROLE_ADMIN: &str = "admin";
pub const ROLE_USER: &str = "user";

pub fn create_admin(cfg: &ServerConfig, sub: String) -> String {
    create(cfg, ROLE_ADMIN, sub)
}

pub fn create_user(cfg: &ServerConfig, sub: String) -> String {
    create(cfg, ROLE_USER, sub)
}

fn create(cfg: &ServerConfig, role: &str, sub: String) -> String {
    let exp = calc_exp(&cfg);

    let claims = Claims {
        iss: cfg.jwt_issuer.clone(),
        sub,
        exp,
        role: role.to_owned(),
    };

    let key = EncodingKey::from_secret(&cfg.jwt_secret.as_bytes());
    jsonwebtoken::encode(&Header::default(), &claims, &key).expect("jwt encode should succeed")
}

fn calc_exp(cfg: &ServerConfig) -> usize {
    SystemTime::now()
        .duration_since(UNIX_EPOCH)
        .expect("Time went backwards")
        .checked_add(Duration::from_secs(cfg.jwt_expiry_secs as u64))
        .expect("duration should not overflow")
        .as_secs() as usize
}

pub fn decode(cfg: &ServerConfig, jwt: &str) -> anyhow::Result<Claims> {
    let key = DecodingKey::from_secret(&cfg.jwt_secret.as_bytes());
    let token = jsonwebtoken::decode::<Claims>(jwt, &key, &Validation::default())?;
    Ok(token.claims)
}
