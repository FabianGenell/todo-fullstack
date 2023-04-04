const TaskController = require('../controllers/TaskController')

const routes = (app) => {
    app.get('/tasks', TaskController.getAllTasks)
}


module.exports = { routes }