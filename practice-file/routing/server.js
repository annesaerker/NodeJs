const express = require('express');
const app = express();
global.gFs = require('fs');

// FILE CONSTS
const sHeaderHTML = gFs.readFileSync( __dirname + '/header.html', 'utf8');
const sIndexHTML = gFs.readFileSync( __dirname + '/index.html', 'utf8');
const sAboutHTML = gFs.readFileSync( __dirname + '/about.html', 'utf8');
const sFooterHTML = gFs.readFileSync( __dirname + '/footer.html', 'utf8');


// GET MAIN ROUTE
app.get('/', (req, res) => {
    res.send(sHeaderHTML + sIndexHTML + sFooterHTML);
});

app.get('/index', (req, res) => {
    res.send(sHeaderHTML + sIndexHTML + sFooterHTML);
});

app.get('/about', (req, res) => {
    res.send(sHeaderHTML + sAboutHTML + sFooterHTML);
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