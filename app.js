const express = require('express');
const fs = require("fs");
const http = require('http');
const bodyParser = require('body-parser');
const AdminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();


app.use(bodyParser.urlencoded({extended: false}));
app.use(AdminRoutes);
app.use(shopRoutes);


app.listen(3000);