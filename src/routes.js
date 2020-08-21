const express = require('express')
const routes = express.Router()
const loginController = require('./Authentication_controller');

routes.post('/login', loginController.login);
module.exports = routes;