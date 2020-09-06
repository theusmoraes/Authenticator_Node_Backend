const express = require('express')
const routes = express.Router()
const loginController = require('./Authentication_controller');

routes.post('/login', loginController.login);
routes.post('/register', loginController.register)
module.exports = routes;