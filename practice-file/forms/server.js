
const express = require('express');
const app = express();
const fs = require('fs');

var bodyParser = require('body-parser');
app.use(bodyParser());

app.get('/', (req, res) => {
    const sFormHTML = fs.readFileSync(__dirname + '/index.html', 'utf8');
    // sending it to the browser
    res.send(sFormHTML);
});

app.post('/send-form', (req, res) => {
    console.log("Form value:", req.body);
});

// LISTEN TO PORT
var port = 1994;
app.listen(port, err => {
    if(err){
        console.log("ERROR - LISTEN TO PORT 1994");
        // return stops app if there is an error
        return;
    }
    console.log("SERVER IS RUNNING ON PORT 1994");
});