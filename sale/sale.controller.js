const saleService = require('./sale.service');

exports.createSale = async (req, res) => {
  try {
    const sale = await saleService.createSale(req.body);
    res.status(201).json(sale);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAllSales = async (req, res) => {
  try {
    const sales = await saleService.getAllSales();
    res.json(sales);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getSaleById = async (req, res) => {
  try {
    const sale = await saleService.getSaleById(req.params.id);
    if (!sale) return res.status(404).json({ error: 'Sale not found' });
    res.json(sale);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateSale = async (req, res) => {
  try {
    const sale = await saleService.updateSale(req.params.id, req.body);
    if (!sale) return res.status(404).json({ error: 'Sale not found' });
    res.json(sale);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteSale = async (req, res) => {
  try {
    const sale = await saleService.deleteSale(req.params.id);
    if (!sale) return res.status(404).json({ error: 'Sale not found' });
    res.json({ message: 'Sale deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
