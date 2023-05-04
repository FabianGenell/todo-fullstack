const { DataTypes, Model } = require('sequelize')
const bcrypt = require('bcrypt')

const { sequelize } = require('../utils/database');

class User extends Model {
    async login(pass) {
        return await bcrypt.compare(pass, this.password)

    }
}

User.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [6, 60]
        }
    }
}, {
    sequelize,
    modelName: 'User',
    hooks: {
        afterValidate: function (user, options) {
            return new Promise(async (resolve, reject) => {
                const salt = await bcrypt.genSalt();
                bcrypt.hash(user.password, salt, function (err, hash) {
                    if (err) throw (err)
                    user.password = hash;
                    resolve(user.password)
                });
            })
        }
    }
});

module.exports = User 