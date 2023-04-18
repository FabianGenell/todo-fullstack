const User = require('../../models/User');

const create = require('./create');
const update = require('./update');
const deleteFunc = require('./delete'); //delete is not allowed as variable name
const login = require('./login');
const get = require('./get');
const logout = require('./logout');

module.exports = {
    create: (req, res) => create(req, res, User),
    update: (req, res) => update(req, res, User),
    delete: (req, res) => deleteFunc(req, res, User),
    get: (req, res) => get(req, res, User),
    login: (req, res) => login(req, res, User),
    logout: (req, res) => logout(req, res, User),
};