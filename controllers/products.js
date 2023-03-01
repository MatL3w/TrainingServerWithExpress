const products = [];

exports.getAddProduct = (req, res, next) => {
  res.render("add-product", {
    pageTitle: "Shoppy",
    path: "/admin/add-product",
  });
};
exports.postAddProduct = (req, res) => {
  products.push({ title: req.body.title });
  console.log(req.body);
  res.redirect("/shop");
};
