const Task = require("../../models/Task");

module.exports = async (req, res, Task) => {
    try {
        const { title, completed, description, categories } = req.query;

        const where = {};
        title && (where.title = title);
        completed && (where.completed = completed);
        description && (where.description = description);
        categories && (where.categories = categories);

        const tasks = await Task.findAll({
            where:
            {
                ...where,
                UserId: req.local.id
            }
        });
        if (!tasks) res.status(404).send({ message: 'Task not found' });

        res.send(tasks);

    } catch (err) {
        console.log(err);
        res.status(400).send(err);
    }
}

