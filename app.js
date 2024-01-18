const express = require("express");
const app = express();
const path = require('path')
const routers = require('./routers/router')

app.set("views", path.join(__dirname,'/views'));
app.set("view engine", "ejs");
app.set(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname,'public')));

app.use(routers);
app.listen(8000);
