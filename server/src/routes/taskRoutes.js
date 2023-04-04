const TaskController = require('../controllers/TaskController')

const routes = (app) => {
    app.get('/tasks', TaskController.getAllTasks);
    app.post('/task', TaskController.createNewTask);
    app.patch('/task/:id', TaskController.changeTask);
    app.delete('/task/:id', TaskController.deleteTask);

    app.get('/teapot', (req, res) => {
        res.status(418).send("ERROR 418: I'm a teapot");
    })
}


module.exports = { routes }