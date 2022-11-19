const express = require("express");
const path = require('path');
const rootDir = require("../util/path");
const AdminData= require('./admin');

const router = express.Router();

router.use("/", (req, res, next) => {
  console.log(AdminData.products);
  res.sendFile(path.join(rootDir,'views','shop.html'));
  //next();
});


module.exports = router;
