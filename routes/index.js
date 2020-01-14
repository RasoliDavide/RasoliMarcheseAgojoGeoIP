var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let userIP = req.ip;

  res.render('index', { title: 'Express', ip : userIP });
});

module.exports = router;
