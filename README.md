# 1 Overview

This repo implement V2 of the MYC Lasers Scoring System

# 2 Local setup

Currently linux and macos are supported.

Install docker and rust/cargo for your platform. Then install the appropriate versions of deno, node, pnpm, and
adl locally using the [proto](https://moonrepo.dev/proto) tool.

```
cd <repo root>
proto install
```

Check installed tool versions with:

```
deno --version
node --version
adlc show --version 
```

# 3 Local development

When you've changed any ADL, regenerate rust/typescript/sql code with

```bash
deno task genadl
```

## 3.1 Start postgres


```bash
(cd platform/dev; docker compose up -d db)
```

## 3.2 Run the unit tests

```bash
(
cd rust/server
export DB_CONNECTION_URL=postgresql://postgres:xyzzy@localhost:5432/appdb
cargo test -- --test-threads=1
)
```

## 3.3 Start the server

```bash
(
cd rust/server
export MYCSCORES_SERVER_CONFIG='{
  "http_bind_addr": "0.0.0.0:8081",
  "db": {
    "host": "localhost",
    "port": 5432,
    "dbname": "appdb",
    "user": "postgres",
    "password": "xyzzy"
  },
  "jwt_access_secret": "shouldbetrulysecretbutnotrightnow",
  "jwt_refresh_secret": "nottomentionthisone"
 }'
export RUST_LOG=info
cargo run --bin mycscores-server
)
```

This will create the db schema and/or apply any necessary migrations

## 3.4 Create some test users

```bash
(
cd rust/server
export DB_CONNECTION_URL=postgresql://postgres:xyzzy@localhost:5432/appdb
cargo run --bin mycscores-tools -- create-user joe@test.com Joe xyzzy1
cargo run --bin mycscores-tools -- create-user --is-admin sarah@test.com Sarah abcdef
)
```

## 3.5 Start the api workbench in dev mode
```bash
(
cd ts/api-workbench
# note pnpm is installed by proto
pnpm install
pnpm run dev
)


The api workbench will be accessible at: http://localhost:5174
