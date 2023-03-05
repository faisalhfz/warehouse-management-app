const express = require('express');

const router = express.Router();

const {
  getStocks,
  getStockByBarcode,
  incrementStock,
} = require('../repository/stocks');

// router.get('/', async (req, res) => {
//   // const stocks = await getStocks();
//   // res.json(stocks);

//   const { barcode } = req.body;

//   console.log(req.body.barcode);

//   try {
//     const stock = await getStockByBarcode(barcode);
//     // res.json(stock);
//     console.log(stock);
//     res.render('index' /* { inputText: barcode, stock: stock } */);
//   } catch (error) {
//     res.status(404).json({ message: 'Cannot find stock' });
//   }
// });

router.get('/:barcode', async (req, res) => {
  const { barcode } = req.params;

  try {
    const stock = await getStockByBarcode(barcode);

    // res.json(stock);

    res.render('data', {
      barcode: stock.barcode,
      sku: stock.sku,
      itemName: stock.itemName,
      quantity: stock.quantity,
    });
  } catch (error) {
    // res.status(404).json({ message: 'Cannot find stock' });

    res.render('error');
  }
});

router.post('/:barcode', async (req, res) => {
  const { barcode } = req.body;
  console.log(barcode);

  res.redirect(`/stocks/${barcode}`);
});

router.get('/:barcode/sendInboundTask', async (req, res) => {
  const { barcode } = req.params;

  // console.log(barcode);

  try {
    await incrementStock(barcode);

    // res.json({
    //   message: 'Stock quantity updated',
    //   updatedStock,
    // });

    res.render('update', { barcode: barcode });
  } catch (error) {
    // res.status(400).json({ message: 'Invalid barcode' });
    res.render('error');
  }
});

router.post('/:barcode/sendInboundTask', async (req, res) => {
  const { barcode } = req.body;
  // console.log(barcode);

  res.redirect(`/stocks/${barcode}/sendInboundTask`);
});

module.exports = router;
