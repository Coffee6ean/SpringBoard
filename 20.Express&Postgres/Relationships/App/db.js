/** Database client for pg-relationships-demo. */
const {Client} = require('pg');

const DB_URI = (process.env.NODE_ENV === 'test') 
    ? 'users_test_db'
    : 'pg_relationships_db';

const DB_PASSWORD = process.env.DB_PASSWORD;

let db = new Client({
    host: "/var/run/postgresql",
    database: DB_URI,
    password: DB_PASSWORD
});

db.connect();

module.exports = db;
