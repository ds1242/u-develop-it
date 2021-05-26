const mysql = require('mysql2');
const secret = require('../secrets');


const db = mysql.createConnection(
    {
        host:'localhost',
        // Your MySQL username,
        user: 'root',
        // SQL Password
        password: secret,
        database: 'election'
    },
    console.log('Connected to the election database')
);


module.exports = db;