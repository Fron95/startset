const express = require('express')
const app = express()

app.set()
app.set('view engine', 'ejs')
app.set(express.urlencoded({extended : false}))

app.use('/', function(req,res){
    res.render('main.ejs')
})

app.listen(3000)