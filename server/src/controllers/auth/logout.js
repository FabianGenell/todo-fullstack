module.exports = async (req, res, User) => {
    if (!req.local) return res.status(401).send('You are not logged in')

    res.clearCookie('auth');
    res.send('Logged out')
}