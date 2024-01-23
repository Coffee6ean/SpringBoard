DROP DATABASE IF EXISTS users_db;

CREATE DATABASE users_db;

\c users_db;

DROP TABLE IF EXISTS users;

CREATE TABLE users (
    if SERIAL PRIMARY KEY,
    name text NOT NULL,
    type text NOT NULL
);

INSERT INTO users (name, type) VALUES 
('Reachel', 'admin'),
('Blake', 'admin'),
('Jesse', 'staff'),
('Michael', 'staff'),
('Jeff', 'user'),
('Jasmine', 'user');
