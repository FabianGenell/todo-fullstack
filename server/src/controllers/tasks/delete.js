const Task = require("../../models/Task");

module.exports = async (req, res, Task) => {
    try {
        const task = await Task.findOne({
            where:
            {
                UserId: req.local.id,
                id: req.params.id
            }
        });
        if (!task) res.status(404).send({ message: 'Task not found' });
        await task.destroy();
        res.send("Task deleted.")

    } catch (err) {
        console.log(err);
        res.status(400).send(err);
    }
}

