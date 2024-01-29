/* Common Settings for Auth-api */
const DB_URI = (process.env.NODE_ENV === 'test') 
    ? 'express_auth_test_db' 
    : 'express_auth_db';

const SECRET_KEY = process.env.SECRET_KEY || 'thousandSunny17';

const BCRYPT_WORK_FACTOR = 12;

module.exports = {
    DB_URI,
    SECRET_KEY,
    BCRYPT_WORK_FACTOR
}