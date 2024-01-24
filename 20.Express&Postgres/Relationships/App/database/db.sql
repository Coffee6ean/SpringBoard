DROP DATABASE IF EXISTS express_auth_db;

CREATE DATABASE express_auth_db;

\c express_auth_db;

DROP TABLE IF EXISTS users;

CREATE TABLE users (
    username TEXT NOT NULL PRIMARY KEY,
    password TEXT
);
