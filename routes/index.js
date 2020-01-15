var express = require('express');
var router = express.Router();
var requestIp = require('request-ip');
var httpReqSender = require('axios');
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
    var dati = null;
    httpReqSender.get(`http://ip-api.com/json/${ip}`)
        .then(response => {
        console.log(response.data.url);
        console.log(response.data.body);
    })
    .catch(error => {
        console.log(error);
    });
    res.send(req.body);
})
module.exports = router;
