
const express = require('express');

const route = express.Router();

const userController = require('../controllers/userControllers');



route.post('/login', userController.login);

module.exports = route;