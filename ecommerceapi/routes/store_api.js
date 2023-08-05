const express = require('express');
const router = express.Router();

const storeApi = require('../controller/store_api');
router.post('/products/create', storeApi.create);
router.get('/products', storeApi.products);
router.delete('/products/:id', storeApi.delete);
router.post('/products/:id/update_quantity/?', storeApi.update);

module.exports = router;