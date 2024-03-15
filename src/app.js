const express = require('express');
const userController = require('./controllers/userController');

const app = express();

app.use(express.json());

app.use('/api/users', userController);

module.exports = app;
