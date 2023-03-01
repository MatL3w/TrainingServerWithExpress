const express = require("express");
const path = require('path');
const productController = require("../controllers/products");

const router = express.Router();

router.use("/", (req, res, next) => {
  console.log(productController.products);
  res.render('shop',{
    prods:productController.products,
    pageTitle:"Shoppy",
    path: '/shop'
  });
  //next();
});


module.exports = router;
