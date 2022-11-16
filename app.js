const path = require('path');
const express = require('express');
const fs = require("fs");
const http = require('http');
const bodyParser = require('body-parser');
const AdminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const rootDir = require('./util/path')

const app = express();


app.use(bodyParser.urlencoded({extended: false}));
app.use('/admin',AdminRoutes);
app.use('/shop',shopRoutes);
app.use(express.static(path.join(rootDir,'public')));

app.use((req,res, next) =>{reliesdummy
    res.status(404).sendFile(path.join(rootDir,'views','404.html'));
});

app.listen(3000);