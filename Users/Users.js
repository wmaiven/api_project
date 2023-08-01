const { DataTypes } = require('sequelize');
const connection = require('../database/database');

const Users = connection.define('users', {
    email: { 
        type: DataTypes.STRING, 
        allowNull: false 
    },
	senha: {
		type: DataTypes.STRING,
		allowNull: false
		},
    admin:{
        type: DataTypes.BOOLEAN,
        defaultValue: true,
        allowNull: false
    }
})
module.exports = Users;