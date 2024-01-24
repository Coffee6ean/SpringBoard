const {Client} = require('pg');
const {DB_URI} = require('./config')

const DB_PASSWORD = process.env.DB_PASSWORD;

let db = new Client({
    host: "/var/run/postgresql",
    database: DB_URI,
    password: DB_PASSWORD
});

db.connect();

module.exports = db;
