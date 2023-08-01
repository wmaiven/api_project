const { DataTypes } = require('sequelize');
const connection = require('../database/database');


const Products = connection.define('products', {
	id: {
		type: DataTypes.STRING,
		allowNull: false,
        primaryKey: true
	},
    category_id: {
        type: DataTypes.STRING,
		allowNull: false,
    },
    title: { 
        type: DataTypes.STRING, 
        allowNull: false 
    },
	slug: {
		type: DataTypes.STRING,
		allowNull: false
		},
    price: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    sold_quantity: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    available_quantity: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    permalink: {
        type: DataTypes.STRING,
        allowNull: true
    }
})
module.exports = Products;