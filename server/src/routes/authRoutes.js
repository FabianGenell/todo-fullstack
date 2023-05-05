const { Router } = require('express');
const AuthController = require('../controllers/auth')
const routes = Router();

routes.post('/login', AuthController.login)
routes.post('/user', AuthController.create)
routes.patch('/user', AuthController.update)
routes.delete('/user', AuthController.delete)
routes.get('/user', AuthController.get)

module.exports = routes;