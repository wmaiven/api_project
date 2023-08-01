const { DataTypes } = require('sequelize');
const connection = require('../database/database');
const Products = require('./Produto');

const Categorie = connection.define('categories', {
	id: {
		type: DataTypes.STRING,
		allowNull: false,
        primaryKey: true
	},
    name: { 
        type: DataTypes.STRING, 
        allowNull: false 
    },
	slug: {
		type: DataTypes.STRING,
		allowNull: false
		}
})
Categorie.hasMany(Products);
module.exports = Categorie;