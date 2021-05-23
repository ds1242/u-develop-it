const e = require('express');
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const mysql = require('mysql2');

// Express Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

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

app.get('/', (req, res) => {
    res.json({
        message: 'Hello World'
    });
});
app.use((req, res) => {
    res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});