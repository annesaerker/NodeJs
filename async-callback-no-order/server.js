var express = require('express')
var app = express()
var fs = require('fs')

// RAM
var sIndexHtml = fs.readFileSync(__dirname + '/index.html', 'utf8')

// **************************************************
app.get('/see-name', (req, res) => {
    var sAllLetters = ''

    var iTasks = 3

    fs.readFile(__dirname + '/a.txt', 'utf8', (err, sLetter) => {
        iTasks--
        // replace
        sendData()
    })

    fs.readFile(__dirname + '/b.txt', 'utf8', (err, sLetter) => {
        iTasks--
        // replace
        sendData()
    })

    fs.readFile(__dirname + '/c.txt', 'utf8', (err, sLetter) => {
        iTasks--
        // replace
        sendData()
    })

    function sendData() {
        if (iTasks == 0) {
            // replace 'DONE' med sIndexHtml
            return res.send('DONE')
        }
    }

    /* fs.readFile(__dirname+'/a.txt','utf8', ( err, sLetter ) => {
sAllLetters +=
 * sLetter
fs.readFile(__dirname+'/b.txt','utf8', ( err, sLetter ) => {
 * sAllLetters += sLetter
fs.readFile(__dirname+'/c.txt','utf8', ( err, sLetter
 * ) => {
sAllLetters += sLetter
return res.send(sAllLetters)
})
})
})
 */

    /* // ABC BCA CBA s.readFile(__dirname+'/data.txt','utf8', ( err, sData ) => {
 * var sMainHtml = sIndexHtml
sMainHtml = sMainHtml.replace('{{name}}', sData)
 * return res.send(sMainHtml)
})
 */

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