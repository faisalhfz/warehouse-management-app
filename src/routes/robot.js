const express = require('express');

const router = express.Router();

const { incrementStock } = require('../repository/stocks');

router.get('/sendInboundTask', async (req, res) => {
  const { barcode } = req.body;

  console.log(barcode);

  try {
    const updatedStock = await incrementStock(barcode);

    res.json({
      message: 'Stock quantity updated',
      updatedStock,
    });
  } catch (error) {
    res.status(400).json({ message: 'Invalid barcode' });
  }
});

module.exports = router;
