module.exports = async (req, res, User) => {
    if (!req.local) return res.status(404).send('No user specified')

    const { email, password } = req.body;
    const update = { email, password };
    const user = await User.findOne({ where: { id: req.local.id } });
    await user.update(update);

    res.send({ updated: update });
}