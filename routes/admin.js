const express =require('express');
const path = require("path");
const productController = require('../controllers/products');

const router = express.Router();

const products = [];

router.get("/add-product",productController.getAddProduct);

router.post("/add-product", (req, res) => {
  products.push({title: req.body.title})
  console.log(req.body);
  res.redirect('/shop');
});

exports.router = router;
exports.products = products;