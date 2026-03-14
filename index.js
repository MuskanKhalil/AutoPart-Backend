require('dotenv').config();
const express = require('express');
const app = express();
app.use(express.json());

// AutoPart routes
const autopartRoutes = require('./autopart/autopart.routes');
app.use('/autoparts', autopartRoutes);

// Sale routes
const saleRoutes = require('./sale/sale.routes');
app.use('/sales', saleRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
