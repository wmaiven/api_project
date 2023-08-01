const Sequelize = require('sequelize');
const connection = new Sequelize('mercadolivre_database', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql',
    timezone: "-03:00"

})

//connection.sync({force: true})

module.exports = connection;