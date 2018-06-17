const express = require('express');
const app = express();
var bodyParser = require('body-parser');
app.use(bodyParser());
global.nodemailer = require('nodemailer');
global.gFs = require('fs');

var indexHtmlRam = gFs.readFileSync( __dirname + '/index.html', 'utf8');
var successHtmlRam = gFs.readFileSync( __dirname + '/success.html', 'utf8');

app.get('/', (req, res) => {
    res.send(indexHtmlRam);
});

app.get('/success', (req, res) => {
    res.send(successHtmlRam);
});

app.post('/send-email', (req,res) => {

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'ynadgallery@gmail.com',
            pass: 'ynad0040'
        }
    });
    const htmlMail = '<p>Congratulations! You are now registered to YNAD!</p>'
    var mailOptions = {
        from: 'ynadgallery@gmail.com',
        to: req.body.email,
        subject: 'Verification mail for YNAD',
        text: 'That was easy!',
        html: htmlMail
    };
                      
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log('ERROR - user.js - sending mail: ',error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });

    res.redirect('/success');

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