const express = require('express');
const app = express();
var bodyParser = require('body-parser');
app.use(bodyParser());
const fs = require('fs');

var indexHtmlRam = fs.readFileSync( __dirname + '/index.html', 'utf8');
var data = fs.readFileSync( __dirname + '/text.txt', 'utf8');

app.get('/', (req, res) => {
    res.send(indexHtmlRam);
});

app.get('/get-info', (req, res) => {
    //hard coded
    // var name = 'Anne';
    // res.send(name);

    res.send(data);
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