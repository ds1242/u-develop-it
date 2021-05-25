const mysql = require('mysql2');


const db = mysql.createConnection(
    {
        host:'localhost',
        // Your MySQL username,
        user: 'root',
        // SQL Password
        password: 'SurfaceSkis12!!',
        database: 'election'
    },
    console.log('Connected to the election database')
);


module.exports = db;