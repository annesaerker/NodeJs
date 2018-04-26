/* 
* EXERCISE
* async with three files NO RAM since we can always change the contents of the files
* CREATE SERVER, INDEX.HTML, THREE TXT FILES WITH DATA
* CREATE ROUT TO /SEE-NAME
* GET HTML AND DATA FILES
* SEND DATA TO CLIENT
*/

var express = require('express')
var app = express()
var fs = require('fs')

// RAM
var sIndexHtml = fs.readFileSync(__dirname + '/index.html', 'utf8')

// **************************************************
// callback hell
app.get('/see-name', (req, res) => {
    var sAllLetters = ''
    fs.readFile(__dirname + '/a.txt', 'utf8', (err, sLetter) => {
        sAllLetters += sLetter
        fs.readFile(__dirname + '/b.txt', 'utf8', (err, sLetter) => {
            sAllLetters += sLetter
            fs.readFile(__dirname + '/c.txt', 'utf8', (err, sLetter) => {
                sAllLetters += sLetter
                return res.send(sAllLetters)
            })
        })
    })

    // ABC BCA CBA

})

// **************************************************
// **************************************************
// **************************************************
// **************************************************
// **************************************************
app.listen(8080, err => {
    // check
    if (err) {
        console.log('err')
    }
    console.log('listening')
})