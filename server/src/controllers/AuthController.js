const jwt = require('jsonwebtoken')

const User = require('../models/User')

//util function
function createToken(id) {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "30m" });
}

//controllers
const authLogin = async (req, res) => {
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

const getUser = async (req, res) => {
    if (!req.local.id) return res.status(404).send('No user specified')
    const { email, id } = await User.findOne({ where: { id: req.local.id } });

    res.json({ email, id });

}

//?temp admin
const getAllUsers = async (req, res) => {
    const users = await User.findAll();
    res.json(users);
}

const deleteUser = async (req, res) => {
    if (!req.local.id) return res.status(404).send('No user specified')

    const user = await User.findOne({ where: { id: req.local.id } });
    user.destroy();
    res.send('User deleted')
}

const changeUser = async (req, res) => {
    if (!req.local.id) return res.status(404).send('No user specified')

    const { email, password } = req.body;
    const update = { email, password };
    const user = await User.findOne({ where: { id: req.local.id } });
    await user.update(update);

    res.send({ updated: update });

}

module.exports = { authLogin, getUser, createUser, deleteUser, changeUser, getAllUsers }