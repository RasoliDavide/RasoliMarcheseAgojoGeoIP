var express = require('express');
var router = express.Router();
var requestIp = require('request-ip')
/* GET home page. */
router.get('/', function(req, res, next) {
    let ip = requestIp.getClientIp(req);
    res.render('index', { title: 'Express', ip : ip });
});
router.post('/getIP', function(req, res, next)
{
    console.log(req.body);
    res.send(req.body);
})
module.exports = router;
