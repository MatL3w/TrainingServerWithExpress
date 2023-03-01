const path = require('path');
const express = require('express');
const fs = require("fs");
const http = require('http');
const bodyParser = require('body-parser');
const adminRoutes = require("./routes/admin");
const shopRoutes = require('./routes/shop');
const ejs = require("ejs");
const errorController = require('./controllers/error');
const productController = require('./controllers/products');

const app = express();

app.set('view engine','ejs');
app.set('views','views');

app.use(bodyParser.urlencoded({extended: false}));
app.use('/admin',adminRoutes);
app.use('/shop',shopRoutes);
app.use(express.static(path.join(__dirname,'public')));
app.use(errorController.get404);

app.listen(3000);

console.log(productController);