const express = require('express');
const app = express();

// settings
app.set('port', process.env.PORT || 3000);

// middlewares
app.use(express.json());

// Routes
app.use('/api',require('./routes/tasksRoute'));
app.get('/', function (req, res) {
    res.send('server susscessfull')
})

module.exports = app;