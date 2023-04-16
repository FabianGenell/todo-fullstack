module.exports = async (req, res, Task) => {
    try {
        const taskInfo = { title: req.body.title, UserId: req.local.id };
        console.log(taskInfo);
        const task = await Task.create(taskInfo);
        res.send(task.toJSON());
    } catch (err) {
        res.status(400).send(err.errors);
    }
}