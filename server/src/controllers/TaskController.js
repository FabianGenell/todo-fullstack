const { Task } = require('../models/Task');

const getAllTasks = async (req, res) => {
    //!What is the proper way to handle errors here? Should something be sent to the client?

    try {
        const tasks = await Task.findAll({ where: req.query });
        res.send(tasks.map(t => t.toJSON()));

    } catch (err) {
        res.send(err);
    }
}

const createNewTask = async (req, res) => {
    console.log(req.body)
    if (!req.body.title) return res.send('Error, title needed')

    const task = await Task.create({
        title: req.body.title
    });

    res.send(task.toJSON());
}

const changeTask = async (req, res) => {
    try {

        const task = await Task.findByPk(req.params.id);

        if (req.body.completed) {
            if (req.body.completed == "true" || req.body.completed == "false") {

                await task.update({ completed: req.body.completed });

            } else res.status(400).send('Error, completed must be boolean');
        }

        if (req.body.title.length > 0) {

            await task.update({ title: req.body.title });

        } else res.status(400).send('Error, body must contain title');

        res.send(task);

    } catch (err) {
        res.status(404).send('Invalid id');
    }
}




const deleteTask = async (req, res) => {
    try {
        const task = await Task.findByPk(req.params.id);
        await task.destroy();
        res.send("Task deleted.")
    } catch (err) {
        res.status(404).send('Invalid id');
    }
}


module.exports = { getAllTasks, createNewTask, changeTask, deleteTask };