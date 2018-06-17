var express = require('express');
var app = express();
global.gFs = require('fs');

// RAM
var sIndexHtmlRam = gFs.readFileSync(__dirname + '/index.html', 'utf8')

app.get('/see-letters', (req, res) => {
    var sAllLetters = ''
    var iTasks = 3

    gFs.readFile(__dirname + '/a.txt', 'utf8', (err, sLetter) => {
        iTasks--        
        // replace
        sIndexHtmlRam = sIndexHtmlRam.replace('{{placeOne}}', sLetter );
        sendData(sIndexHtmlRam);
    })

    gFs.readFile(__dirname + '/b.txt', 'utf8', (err, sLetter) => {
        iTasks--
        // replace
        sIndexHtmlRam = sIndexHtmlRam.replace('{{placeTwo}}', sLetter );
        sendData(sIndexHtmlRam)
    })

    gFs.readFile(__dirname + '/c.txt', 'utf8', (err, sLetter) => {
        iTasks--
        // replace
        sIndexHtmlRam = sIndexHtmlRam.replace('{{placeThree}}', sLetter );
        sendData(sIndexHtmlRam)
    })

    function sendData(html) {
        if (iTasks == 0) {
            // replace 'DONE' med sIndexHtml
            return res.send(html)
        }
    }
})
// var express = require('express')
// var app = express()
// var fs = require('fs')

// // RAM
// var sIndexHtml = fs.readFileSync(__dirname + '/index.html', 'utf8')

// // **************************************************
// app.get('/see-letters', (req, res) => {
//     var sAllLetters = ''

//     var iTasks = 3

//     fs.readFile(__dirname + '/a.txt', 'utf8', (err, sLetter) => {
//         iTasks--
//         // replace
//         var sMainHtml = sIndexHtml
//         sMainHtml = sMainHtml.replace('{{placeOne}}', sLetter)
//         // return res.send(sMainHtml)
//         sendData(sMainHtml)
//     })

//     fs.readFile(__dirname + '/b.txt', 'utf8', (err, sLetter) => {
//         iTasks--
//         // replace
//         var sMainHtml = sIndexHtml
//         sMainHtml = sMainHtml.replace('{{placeTwo}}', sLetter)
//         sendData(sMainHtml)
//     })

//     fs.readFile(__dirname + '/c.txt', 'utf8', (err, sLetter) => {
//         iTasks--
//         // replace
//         var sMainHtml = sIndexHtml
//         sMainHtml = sMainHtml.replace('{{placeThree}}', sLetter)
//         sendData(sMainHtml)
//     })

//     function sendData(html) {
//         if (iTasks == 0) {
//             // replace 'DONE' with sIndexHtml
//             return res.send(html)
//         }
//     }

// })


app.listen(8080, err => {
    // check
    if (err) {
        console.log('err')
    }
    console.log('listening')
})