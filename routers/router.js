router = require('express').Router()

router.get('/', function(req,res){
    res.render('main')
} )

router.get('/other', function(req,res){
    res.render('other')
} )

module.exports = router