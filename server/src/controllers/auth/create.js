const jwt = require('jsonwebtoken')


module.exports = async (req, res, User) => {
    if (req.local) return res.status(401).send('You are already logged in')

    try {
        const { email, password } = req.body;
        const user = await User.create({ email, password });

        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: "5m" });
        res.cookie('auth', token);

        res.status(201).send('User created');

    } catch (err) {
        console.log(err);
        res.status(400).send(err.errors);
    }
}