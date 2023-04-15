const jwt = require('jsonwebtoken')

const User = require('../models/User')


function createToken(id) {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "30m" });
}

const authLogin = async (req, res) => {
    console.log(req.local)
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });

    if (!user) return res.status(401).send('Email not found')

    const isValid = await user.login(password);

    if (isValid) {
        const token = createToken(user.id)
        res.cookie('auth', token);
    }

    res.send(isValid);
}

const createUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.create({ email, password });

        const token = createToken(user.id)
        res.cookie('auth', token);

        res.status(201).send('User created');

    } catch (err) {
        console.log(err);
        res.status(400).send(err.errors);
    }
}

const getUser = (req, res) => {

}

//temp admin
const getAllUsers = async (req, res) => {
    const users = await User.findAll();
    res.json(users);
}

const deleteUser = (req, res) => {

}

const changeUser = (req, res) => {

}

module.exports = { authLogin, getUser, createUser, deleteUser, changeUser, getAllUsers }