var express = require('express');
var router = express.Router();
var requestIp = require('request-ip');
var httpReqSender = require('request');
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
    console.log(req.body);
    let ip = req.body.ip;
    httpReqSender(`http://ip-api.com/json/${ip}?16902137`, (error, response, body) => 
    {
        console.log(body)
        res.send(body)
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
