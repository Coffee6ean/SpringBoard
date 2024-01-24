DROP DATABASE IF EXISTS express_auth_test_db;

CREATE DATABASE express_auth_test_db;

\c express_auth_test_db;

DROP TABLE IF EXISTS users;

CREATE TABLE users (
    username TEXT NOT NULL PRIMARY KEY,
    password TEXT
);
