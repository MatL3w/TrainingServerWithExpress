const express = require('express');
const fs = require("fs");
const http = require('http');
const bodyParser = require('body-parser');

const app = express();


app.use(bodyParser.urlencoded());

app.use('/add',(req,res,next)=>{
    console.log("im in middleware");
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add</button></form>');

});

app.use("/product", (req, res) => {
  res.redirect('/');
  console.log(req.body);
});
app.use("/", (req, res, next) => {
  console.log("im in middleware");
  res.send("<h1>Hello</h1>");
  next();
});


app.listen(3000);