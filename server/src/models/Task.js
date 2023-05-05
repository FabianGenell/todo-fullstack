const { DataTypes, Model } = require('sequelize')
const { sequelize } = require('../utils/database');
const User = require('./User')

class Task extends Model {
    static async fields({ showAll = false } = {}) {
        const description = await this.describe();
        const fields = Object.keys(description);
        if (!showAll) return (fields.filter(p => !['id', 'createdAt', 'updatedAt'].includes(p)))
        return fields;
    }
}

Task.init({
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1, 1024],
        }
    },
    completed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    description: {
        type: DataTypes.STRING
    },
    categories: {
        type: DataTypes.ARRAY(DataTypes.STRING),
    }
}, {
    sequelize,
    modelName: 'Task'
});

Task.belongsTo(User, {
    foreignKey: { allowNull: false }
})
User.hasMany(Task)


// User.sync({ force: true })
// Task.sync({ force: true })

module.exports = Task;