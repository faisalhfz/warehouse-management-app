const { DataTypes } = require('sequelize');

const stockSchema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  barcode: {
    type: DataTypes.STRING(20),
    allowNull: false,
    unique: true,
  },
  sku: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  itemName: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
};

module.exports = stockSchema;
