const express = require("express");
const app = express();

app.set("views", __dirname+'/views');
app.set("view engine", "ejs");
app.set(express.urlencoded({ extended: false }));
app.use(express.urlencoded({extended:false}))
app.use(express.static('public'))

app.use("/", function (req, res) {
  res.render("main");
});

app.use("/other", function (req, res) {
  res.render("other");
});

app.listen(8000);
