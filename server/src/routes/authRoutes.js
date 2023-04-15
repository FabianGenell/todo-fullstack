const { Router } = require('express');
const AuthController = require('../controllers/AuthController')
const routes = Router();

routes.post('/login', AuthController.authLogin)
routes.post('/user', AuthController.createUser)
routes.patch('/user', AuthController.changeUser)
routes.delete('/user', AuthController.deleteUser)
routes.get('/user', AuthController.getUser)
routes.get('/users', AuthController.getAllUsers)


module.exports = routes;