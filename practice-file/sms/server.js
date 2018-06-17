const express = require('express');
const app = express();
const request = require('request')
const bodyParser = require('body-parser');
app.use(bodyParser());
const fs = require('fs');

var indexHtmlRam = fs.readFileSync( __dirname + '/index.html', 'utf8');
var successHtmlRam = fs.readFileSync( __dirname + '/success.html', 'utf8');

app.get('/', (req, res) => {
    res.send(indexHtmlRam);
});

var smsData = {};

smsData.sendSmsData = function(req, res) {
    
    var sMobile = req.body.mobile
    var sMessage = req.body.message
    var apiToken = '$2y$10$H.KvGdTTPrMYwuThvdkSP.v3rAcGU5sCuBui1eHaCdLIZV2Cmi.Sm';
    // console.log(sMobile)

    request.post({url:'http://smses.io/api-send-sms', 
        form: { 
            apiToken: apiToken, 
            mobile: sMobile, 
            message: sMessage 
        }
    }); 
    res.redirect('/');
}


/* Send SMS To User */
app.post('/send-sms', (req, res) => {
    smsData.sendSmsData(req, res);
});

/* *** *** LISTENING TO PORT *** *** */
var port = 1994;
app.listen(port, err => {
    if(err) {
        console.log("error");
        return;
    }
    console.log("server is running on port 1994");
})