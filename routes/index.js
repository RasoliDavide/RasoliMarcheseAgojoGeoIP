var express = require('express');
var router = express.Router();
var requestIp = require('request-ip');
var httpReqSender = require('request');
var path = require('path');
router.use(express.static(path.join(__dirname, 'public')));
/* GET home page. */
router.get('/', function(req, res, next) {
    if(req.body.ip == null)
    {
        let ip = requestIp.getClientIp(req);
        let dati = null;

        
        console.log(dati)
        res.render('index', { title: 'Express', ip : ip });
    }
    
});
router.post('/getIP', function(req, res, next)
{
    let ip = req.body.ip;
    httpReqSender(`http://ip-api.com/json/${ip}?124921`, (error, response, body) => 
    {
        let result = JSON.parse(body);
        console.log(result.regionName);
        res.render('ip', {title : body.query, result: result})
    })
    
})
router.get('/getIP', function(req, res, next)
{
    console.log(req.body);
    let ip = req.body.ip;
    var dati = null;
    httpReqSender('http://ip-api.com/json/24.48.0.1', (error, response, body) => 
    {
        console.log(body)
        res.send(body)
    })
    
})
module.exports = router;
