/* EXERCISE
* CREATE SERVER, INDEX.HTML, DATA.TXT
* CREATE ROUT TO /SEE-NAME
* GET HTML AND DATA FILE 
* SEND DATA TO CLIENT
*/

var express = require('express')
var app = express()
var fs = require('fs')

// RAM
var sIndexHtml = fs.readFileSync(__dirname + '/index.html', 'utf8')

// **************************************************
app.get('/see-name', (req, res) => {

    fs.readFile(__dirname + '/data.txt', 'utf8', (err, sData) => {
        var sMainHtml = sIndexHtml
        sMainHtml = sMainHtml.replace('{{name}}', sData)
        return res.send(sMainHtml)
    })

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