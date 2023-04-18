const jwt = require('jsonwebtoken')

module.exports = async (req, res, User) => {
    if (req.local) return res.status(401).send('You are already logged in')

    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });

    if (!user) return res.status(401).send('Email not found')

    const isValid = await user.login(password);

    if (isValid) {
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: "5m" });

        //!Once fixed cooke bug - remember to add maxAge here
        res.cookie('auth', token);
    }

    res.send(isValid);
}