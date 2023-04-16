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
        if (!task) return res.status(404).send({ message: 'Task not found' });

        const { title, completed, description, categories } = req.body;

        await task.update({ title, completed, description, categories })
        res.send(task);


    } catch (err) {
        console.log(err);
        res.status(400).send(err);
    }
}

