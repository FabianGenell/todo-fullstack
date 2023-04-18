const { Router } = require('express');
const routes = Router();
const TaskController = require('../controllers/tasks')

//!FOr some reason it applies to ALL (including authRoutes.js) routes?!?!?
// routes.use((req, res, next) => {
//     if (!req.local) {
//         return res.status(401).send('No user found');
//     }
//     next();
// })


routes.get('/tasks', TaskController.getTasks);
routes.get('/task/:id', TaskController.get)
routes.post('/task', TaskController.create);
routes.patch('/task/:id', TaskController.update);
routes.delete('/task/:id', TaskController.delete);

routes.get('/teapot', (req, res) => {
    res.status(418).send("Status 418 - I'm a teapot");
})



module.exports = routes;