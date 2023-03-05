const { Stock } = require('./config/db');

const stocks = [
  {
    barcode: 'T0000002',
    sku: 'DRO-MOT',
    itemName: 'Drone Motor',
    quantity: 50,
  },
  {
    barcode: 'T0000003',
    sku: 'DRO-PRO',
    itemName: 'Drone Propeller',
    quantity: 100,
  },
  {
    barcode: 'T0000004',
    sku: 'DRO-CAM',
    itemName: 'Drone Camera',
    quantity: 20,
  },
];

const populateStock = async () => {
  await Stock.bulkCreate(stocks);
};

populateStock();
