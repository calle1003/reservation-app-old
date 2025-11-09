const express = require('express');
const router = express.Router();
const Product = require('../model/product');

router.get('', async (req, res) => {
  try {
    const foundProducts = await Product.find({});
    res.json(foundProducts);
  } catch (err) {
    res.status(500).json({ message: 'データ取得エラー', error: err.message });
  }
});

router.get('/:productId', async (req, res) => {
  try {
    const product = await Product.findById(req.params.productId); // ← 修正！
    if (!product) {
      return res.status(404).json({ message: '該当データが見つかりません' });
    }
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: 'データ取得エラー', error: err.message });
  }
});

module.exports = router;
