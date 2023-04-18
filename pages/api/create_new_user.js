// Logic that handles writing new user to a MySql db.
require('dotenv').config();
const mysql = require('mysql2');
const bcryptjs = require('bcryptjs');

// Assign env variables for database access.
const user = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const host = process.env.DB_ENDPOINT;
const database = process.env.DB;

// Connect to database
const connection = mysql.createConnection({
    host: host,
    user: user,
    password: password,
    database: database,
    // authPlugin: 'caching_sha2_password'
});

try {
    connection.connect();
    console.log('Connected!')
    // console.log(connection);
} catch (error) {
    console.log('Error connecting to database endpoint.')
};

function createNewUser(username, email, password, callback) {
    
    // Check for duplicate
    const checkDup = 'SELECT * FROM users WHERE email = ?';
    const emailValue = [email];

    connection.query(checkDup, emailValue, (error, results, fields) => {
        // If there is an error, callback with the error.
        // else if the result from the sql query has a length more than 0, email is a dup
        if (error) {
            callback(error, null);
        } else if (results.length > 0) {
            console.log('A user with that email address already exists');
            connection.end();
            return;
        } else {

            // Hash user password.
            bcryptjs.hash(password, 4, function(err, hash){
                if (err) {
                    callback(err);
                    console.log(err);
                    return;
                }
                console.log(hash)
                console.log(username)
                console.log(email)

                // Sanitize inputs.
                const sqlQuery = 'INSERT INTO users (username, email, password) VALUES (?,?,?)';
                const accountValues = [username, email, hash];

                // Write to database.
                connection.query(sqlQuery, accountValues, function(err, result) {
                    if (err) {
                        callback(err);
                        console.log(err)
                        connection.end();
                        return;
                    }

                    callback(null, result);
                    console.log(result)
                    connection.end();
                });
            });
        }
    });
} // Add a closing bracket here

module.exports = createNewUser;
