const Task = require('../../models/Task');

const create = require('./create');
const update = require('./update');
const deleteFunc = require('./delete'); //delete is not allowed as variable name
const getTasks = require('./getTasks');
const get = require('./get')

module.exports = {
    create: (req, res) => create(req, res, Task),
    update: (req, res) => update(req, res, Task),
    delete: (req, res) => deleteFunc(req, res, Task),
    get: (req, res) => get(req, res, Task),
    getTasks: (req, res) => getTasks(req, res, Task),
};