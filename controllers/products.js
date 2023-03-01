//const products = ['a'];
const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  res.render("add-product", {
    pageTitle: "Shoppy",
    path: "/admin/add-product",
  });
};
exports.postAddProduct = (req, res) => {
  //products.push({ title: req.body.title });
  const product = new Product(req.body.title);
  product.save();
  console.log(req.body);
  res.redirect("/shop");
};
exports.getProducts = (req, res, next) => {
  const products = Product.fetchAll();
  console.log(products);
  res.render("shop", {
    prods: products,
    pageTitle: "Shoppy",
    path: "/shop",
  });
  //next();
};
//module.exports.products = products;