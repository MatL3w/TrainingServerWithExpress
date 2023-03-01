exports.getAddProduct = (req, res, next) => {
  res.render("add-product", {
    pageTitle: "Shoppy",
    path: "/admin/add-product",
    });
}