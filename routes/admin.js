const express =require('express');
const path = require("path");
const rootDir = require("../util/path");

const router = express.Router();

router.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "add-product.html"));

});

router.post("/product", (req, res) => {
 // res.redirect("/add-product");
  console.log(req.body);
});

module.exports = router;