const express = require("express");
const app = express();
const routers = require('./routers/router')

app.set("views", __dirname+'/views');
app.set("view engine", "ejs");
app.set(express.urlencoded({ extended: false }));
// app.use(express.static('public'));

app.use(routers);
app.listen(8000);
