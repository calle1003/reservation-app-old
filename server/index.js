const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/dev');
const FakeDb = require('./fake-db');
const productRoutes = require('./routes/products');

mongoose.connect(config.DB_URI).then(() => {
  const fakeDb = new FakeDb();
  fakeDb.seeDb();
});

const app = express();
const PORT = process.env.port || '3001';

app.use('/app/v1/products', productRoutes);

app.get('/products', (req, res) => {
  res.json({ success: true });
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
