const express = require("express");
const path = require('path');
const productController = require("../controllers/products");

const router = express.Router();

router.use("/", productController.getProducts);

module.exports = router;
