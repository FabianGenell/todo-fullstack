const { Task } = require('../models/Task');

const getAllTasks = async (req, res) => {
    const tasks = await Task.findAll();
    res.send(tasks.map(t => t.toJSON()));

}
const getAllCompletedTasks = async (req, res) => {

}
const getAllPendingTasks = async (req, res) => {

}
const createNewTask = async (req, res) => {

}
const changeTaskCompleted = async (req, res) => {

}
const changeTaskTitle = async (req, res) => {

}
const deleteTask = async (req, res) => {

}


module.exports = { getAllTasks, getAllCompletedTasks, getAllPendingTasks, createNewTask, changeTaskCompleted, changeTaskTitle, deleteTask };