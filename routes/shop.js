const express = require("express");
const path = require('path');
const AdminData= require('./admin');

const router = express.Router();

router.use("/", (req, res, next) => {
  console.log(AdminData.products);
  res.render('shop',{
    prods:AdminData.products,
    pageTitle:"Shoppy",
    path: '/shop'
  });
  //next();
});


module.exports = router;
