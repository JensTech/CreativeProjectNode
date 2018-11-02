var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile('index.html', { root:  'public' });
});

router.get('/joke',function(req,res,next){
  req.headers['Content-Type']='application/json';
  var url = "https://icanhazdadjoke.com/";
  req.pipe(request(url)).pipe(res);
});

router.get('/search',function(req,res,next){
  req.headers['Content-Type']='application/json';
  var url = "https://icanhazdadjoke.com/search/";
  url += "?term=";
  req.pipe(request(url)).pipe(res);
});

module.exports = router;
