const Sequelize = require("sequelize");
module.exports = new Sequelize('imdb', 'postgres', 'Anonymous', {
    host: 'localhost',
    dialect: 'postgres',

    pool: {
        max: 5,
        min: 0,
        acquire: 3000,
        idle: 10000
    }
});