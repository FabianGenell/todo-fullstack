const { Task } = require('../models/Task');

const getAllTasks = async (req, res) => {
    //!What is the proper way to handle errors here? Should something be sent to the client?
    try {
        const tasks = await Task.findAll({ where: req.query });
        res.send(tasks/* .map(t => t.toJSON()) */);

    } catch (err) {
        console.log(err);
        res.status(404).send('Not Found');
    }
}

const getTask = async (req, res) => {
    try {
        const task = await Task.findByPk(req.params.id);
        res.send(task);

    } catch (err) {
        console.log(err);
        res.status(404).send('Not Found');
    }
}

const createNewTask = async (req, res) => {
    try {
        const task = await Task.create({ ...req.body });
        res.send(task.toJSON());
    } catch (err) {
        console.log(err);
        const fields = await Task.fields()
        res.status(400).send('Bad request. You can only pass ' + fields);
    }
}

const changeTask = async (req, res) => {
    try {
        const task = await Task.findByPk(req.params.id);
        await task.update({ ...req.body })
        res.send(task);

    } catch (err) {
        console.log(err);
        const fields = await Task.fields()
        res.status(400).send('Bad request. You can only pass ' + fields);
    }
}


const deleteTask = async (req, res) => {
    try {
        const task = await Task.findByPk(req.params.id);
        await task.destroy();
        res.send("Task deleted.")
    } catch (err) {
        console.log(err);
        res.status(404).send('Not Found');
    }
}


module.exports = { getAllTasks, getTask, createNewTask, changeTask, deleteTask };