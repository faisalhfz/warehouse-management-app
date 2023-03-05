const { Stock } = require('../config/db');

const createStock = async ({ barcode, sku, itemName, quantity }) => {
  try {
    const newStock = await Stock.create({
      barcode,
      sku,
      itemName,
      quantity,
    });

    return newStock.id;
  } catch (error) {
    return error;
  }
};

const getStocks = async () => {
  const stocks = await Stock.findAll({
    attributes: ['barcode', 'sku', 'itemName', 'quantity'],
  });

  return stocks;
};

const getStockByBarcode = async (barcode) => {
  const stock = await Stock.findOne({ where: { barcode: barcode } });

  if (!stock) {
    return error;
  }
  return stock;
};

const incrementStock = async (barcode) => {
  try {
    const stock = await getStockByBarcode(barcode);
    const updatedStock = await stock.increment('quantity');
    return updatedStock;
  } catch (error) {
    return error;
  }
};

module.exports = { createStock, getStocks, getStockByBarcode, incrementStock };
