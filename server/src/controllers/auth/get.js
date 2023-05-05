module.exports = async (req, res, User) => {
    if (!req.local) return res.status(404).send('No user specified')
    const { email, id } = await User.findOne({ where: { id: req.local.id } });

    res.json({ email, id });
}