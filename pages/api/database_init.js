const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'developer',
    auth_plugin: 'mysql_native_password'
});

connection.connect();

// Insert data into database
let dbTable = 'users';
const data = { name: 'John', email: 'jon@examp.com', age: 58 };
connection.query('INSERT INTO users SET ?', data, (error, results, fields) => {
    if (error) throw error;
    console.log('Data inserted. Nice.')
});

connection.end();