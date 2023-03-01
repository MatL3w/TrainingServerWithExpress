const path = require('path');
const express = require('express');
const fs = require("fs");
const http = require('http');
const bodyParser = require('body-parser');
const AdminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const ejs = require("ejs");

const app = express();

app.set('view engine','ejs');
app.set('views','views');

app.use(bodyParser.urlencoded({extended: false}));
app.use('/admin',AdminData.router);
app.use('/shop',shopRoutes);
app.use(express.static(path.join(__dirname,'public')));

app.use((req,res, next) =>{
    res.status(404).render('404',{pageTitle:"404",path: '/'});
});

app.listen(3000);