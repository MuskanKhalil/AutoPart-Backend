const express = require('express');
const router = express.Router();
const autopartController = require('./autopart.controller');

router.post('/', autopartController.createAutoPart);
router.get('/', autopartController.getAllAutoParts);
router.get('/:id', autopartController.getAutoPartById);
router.put('/:id', autopartController.updateAutoPart);
router.delete('/:id', autopartController.deleteAutoPart);

module.exports = router;
