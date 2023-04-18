import { createConnection } from 'net';
import { hostname } from 'os';
require('dotenv').config();
console.log(require('net'))
const mysql = require('mysql');
const bcryptjs = require('bcryptjs');
const net = require('net');


// Assign env variables for database access.
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
    connectionLimit: 10,
    createConnection: () => {
        const connection = mysql.createConnection({
            host: dbAuth.host,
            user: dbAuth.user,
            password: dbAuth.password,
            database: dbAuth.database,
            stream: net.connect({ path: '/cloudsql/' + dbAuth.host}),
        });
        return connection;
    }
});

export default async function createUser(data, res) {
    try {
        const { email, password } = data;
        
        const hashedPassword = await bcryptjs.hash(password, 4);

        const sqlQuery = 'INSERT INTO users (email, password) VALUES (?,?)';
        const accountValues = [email, hashedPassword];

        const [rows, fields] = await pool.query(sqlQuery, accountValues);

        console.log(rows);
        return res.status(200).json({ message: 'User created successfully' });
    } catch (error) {
        console.error('Error creating user', error);
        return res.status(500).json({ message: 'Error creating user' });
    }
}

