DROP DATABASE IF EXISTS users_test_db;

CREATE DATABASE users_test_db;

\c users_test_db;

DROP TABLE IF EXISTS user_tests;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name text NOT NULL,
    type text NOT NULL
);
