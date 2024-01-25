const {Client} = require('pg');

let DB_URI = (process.env.NODE_ENV === 'test') 
    ? 'users_test_db' 
    : 'express_pg_oo';

const DB_PASSWORD = process.env.DB_PASSWORD;

let db = new Client({
    host: "/var/run/postgresql",
    database: DB_URI,
    password: DB_PASSWORD
});

db.connect();

module.exports = db;
