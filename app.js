const express = require('express');
const fs = require("fs");
const http = require('http');
const bodyParser = require('body-parser');
const AdminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();


app.use(bodyParser.urlencoded({extended: false}));
app.use('/admin',AdminRoutes);
app.use('/shop',shopRoutes);

app.use((req,res, next) =>{
   // res.sendStatus(404);
});

app.listen(3000);