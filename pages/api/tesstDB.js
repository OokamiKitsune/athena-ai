const mysql = require('mysql2')
const dotenv = require('dotenv');
const path = require('path');

// Get .env from root.
dotenv.config( {path: path.resolve(__dirname, '../../.env') });


const dbAuth = {
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_ENDPOINT,
    database: process.env.DB,
};

console.log(dbAuth)

// Setup database connection pool
const pool = mysql.createPool({
    host: dbAuth.host,
    user: dbAuth.user,
    password: dbAuth.password,
    database: dbAuth.database,
    connectionLimit: 10
});

pool.query('SELECT * FROM users', (err, res) => {

    if (err){
        return console.log('Some error:', {err});
    }
    return console.log(res)
})


