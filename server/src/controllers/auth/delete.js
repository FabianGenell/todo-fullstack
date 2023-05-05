module.exports = async (req, res, User) => {
    if (!req.local) return res.status(404).send('No user specified')

    const user = await User.findOne({ where: { id: req.local.id } });
    user.destroy();
    res.send('User deleted')
}