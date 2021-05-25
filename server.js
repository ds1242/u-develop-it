const e = require('express');
const express = require('express');
const { rest } = require('lodash');
const PORT = process.env.PORT || 3001;
const app = express();
const db = require('./db/connection');
const inputCheck = require('./utils/inputCheck');

const apiRoutes = require('./routes/apiRoutes');
// Express Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/api', apiRoutes);


// app.get('/', (req, res) => {
//     res.json({
//         message: 'Hello World'
//     });
// });





app.use((req, res) => {
    res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});