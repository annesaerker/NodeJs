const express = require('express');
app = express();
const fs = require(fs);

//RAM
var sIndexHtml = fs.fileReadSync(__dirname + '/index.html', 'utf8');

//CALLBACK HELL
app.get('/see-name', (req,res) => {
    var sAllLetters = '';
    fs.readFile(__dirname + '/a.txt', 'utf8', (err, sLetter) => {
        sAllLetters += sLetter;
        fs.readFile(__dirname + '/b.txt', 'utf8', (err, sLetter) => {
            sAllLetters += sLetter;
            fs.readFile(__dirname + '/c.txt','utf8', (err, sLetter) => {
                sAllLetters += sLetter;
            });
        });
    });
});

app.listen(8080, err => {
    // check
    if (err) {
        console.log('err')
    }
    console.log('listening')
})
