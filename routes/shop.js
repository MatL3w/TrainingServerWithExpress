const express = require("express");

const router = express.Router();

router.use("/", (req, res, next) => {
  console.log("im in middleware");
  res.send("<h1>Hello</h1>");
  next();
});


module.exports = router;
