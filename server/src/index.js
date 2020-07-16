const express = require('express');

const app = express();

// settings
app.set('port', process.env.PORT || 3000);

// middlewares
app.use(express.json());

// Routes
app.use(require('./routes/taksRoutes'));

module.exports = app;