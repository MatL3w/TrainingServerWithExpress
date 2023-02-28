const express = require("express");
const path = require('path');
const rootDir = require("../util/path");
const AdminData= require('./admin');

const router = express.Router();

router.use("/", (req, res, next) => {
  console.log(AdminData.products);
  res.render('shop',{prods:AdminData.products,docTitle:"Shoppy"});
  //next();
});


module.exports = router;
