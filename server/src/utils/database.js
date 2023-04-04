const { Sequelize } = require('sequelize')
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.USER, process.env.PASSWORD, {
    host: process.env.HOST,
    dialect: 'postgres'
});

const main = async () => {
    try {
        await sequelize.authenticate();
        console.log(`Database connection to ${process.env.DB_NAME} has been established successfully.`);
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

main();


module.exports = { sequelize }