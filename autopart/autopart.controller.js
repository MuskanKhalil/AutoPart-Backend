const autopartService = require('./autopart.service');

exports.createAutoPart = async (req, res) => {
  try {
    const autopart = await autopartService.createAutoPart(req.body);
    res.status(201).json(autopart);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAllAutoParts = async (req, res) => {
  try {
    const autoparts = await autopartService.getAllAutoParts();
    res.json(autoparts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAutoPartById = async (req, res) => {
  try {
    const autopart = await autopartService.getAutoPartById(req.params.id);
    if (!autopart) return res.status(404).json({ error: 'AutoPart not found' });
    res.json(autopart);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateAutoPart = async (req, res) => {
  try {
    const autopart = await autopartService.updateAutoPart(req.params.id, req.body);
    if (!autopart) return res.status(404).json({ error: 'AutoPart not found' });
    res.json(autopart);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteAutoPart = async (req, res) => {
  try {
    const autopart = await autopartService.deleteAutoPart(req.params.id);
    if (!autopart) return res.status(404).json({ error: 'AutoPart not found' });
    res.json({ message: 'AutoPart deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
