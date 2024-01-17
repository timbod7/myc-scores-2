use argon2::{
    password_hash::{rand_core::OsRng, PasswordHash, PasswordHasher, PasswordVerifier, SaltString},
    Argon2,
};

pub fn verify_password(password_cleartext: &str, password_hashed: &str) -> bool {
    let parsed_hash = PasswordHash::new(password_hashed).expect("valid hashed password");
    Argon2::default()
        .verify_password(password_cleartext.as_bytes(), &parsed_hash)
        .is_ok()
}
