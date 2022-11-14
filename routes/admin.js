const express =require('express');

const router = express.Router();

router.get("/add-product", (req, res, next) => {
  console.log("im in middleware");
  res.send(
    '<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add</button></form>'
  );
});

router.post("/product", (req, res) => {
  res.redirect("/shop");
  console.log(req.body);
});

module.exports = router;