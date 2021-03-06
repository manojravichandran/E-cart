var express = require('express');
var router = express.Router();

var csrf=require('csurf');

var passport=require('passport');
var Product=require('../models/product');
var csrfprotection=csrf();
router.use(csrfprotection);


/* GET home page. */
router.get('/', function(req, res, next) {
Product.find(function(err,docs){
 var productchunk=[];
var chunksize=3;
for (var i=0;i<docs.length;i+=chunksize){
  productchunk.push(docs.slice(i, i + chunksize));
}
  res.render('shop/index', { title: 'Shopping',products: productchunk });
});
});   

router.get('/user/signup',function(req,res,next){
res.render('../user/signup',{csrfToken:req.csrfToken()});
});

router.post('/user/signup',passport.authenticate('local.signup',{
  successRedirect:'/user/profile',
  failureRedirect:'/user/signup',
  failureFlash:true
}));

router.get('/user/profile',function(req,res,next){
  res.render('user/profile');
})
module.exports = router;
