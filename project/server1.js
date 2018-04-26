// npm init
// nodemon Server.js
// console.log("x")

// global nmp's
var express = require( 'express' )
var app = express()
var chalk = require ( 'chalk')
//fs file system 
global.gFs = require ( 'fs' )

/*
// NPM nigthmare - nearly all NPM's have bugs
// Only use ones that are well tested and have alot of downloads // less is more
var formidable = require('express-formidable')
app.use(formidable())
*/

// ***************************

global.gLog = ( sStatus, sMessage ) => {

    switch ( sStatus ) {

        case 'ok':
            console.log( chalk.green(sMessage) )

        break

        case 'err':
            console.log( chalk.red(sMessage) )

        break

        case 'ex':
            console.log( chalk.magenta(sMessage) )

        break 

        case 'info':
            console.log( (sMessage) )

        break

    } 
}

//****************************
//internal require
var user = require( __dirname + '/controllers/user.js' )
// var user = require( './controllers/user.js' )

//****************************
// routing
// input output asyncronious
app.get( '/' , ( req , res ) => {
    var sTopHtml = gFs.readFileSync( __dirname + '/components/top.html', 'utf8' )
    var sMainHtml = gFs.readFileSync( __dirname + '/html/index.html', 'utf8' )
    var sBottomHtml = gFs.readFileSync( __dirname + '/components/bottom.html', 'utf8' )

    //this makes the code in this folder public
    app.use( express.static( __dirname + '/public') )

    // replace placeholder
    sTopHtml = sTopHtml.replace ('{{title}}', 'PROJECT : : Welcome')
    sTopHtml = sTopHtml.replace ('{{active-home}}', ' active' ).replace ( /{{active-.*}}/g , '' )

    // sTopHtml = sTopHtml.replace ('{{active-home}}', ' active' )
    // g global , change all the places not only the first incounter
    // /{{active-.*}}/g   regurlar expression, works in all langueges
    // sTopHtml = sTopHtml.replace ( /{{active-.*}}/g , '' )


    // replace script
    // you dont have to includ public in the rout, beacuse of the line of code that makes the code pulic
    sBottomHtml = sBottomHtml.replace('{{script}}' , '<script src="js/index.js"> </script>')

    res.send( sTopHtml + sMainHtml + sBottomHtml )

    // for sending the whole file
    // res.sendFile( __dirname + '/html/index.html')
    // sMainHtml can also be sIndexHtml or sContactHtml ... but if you dont want to make alot of changed, use the same name for the stuff that is the same.
})

app.get( '/contact-us' , ( req , res ) => {
    var sTopHtml = gFs.readFileSync( __dirname + '/components/top.html', 'utf8' )
    var sMainHtml = gFs.readFileSync( __dirname + '/html/contact-us.html', 'utf8' )
    var sBottomHtml = gFs.readFileSync( __dirname + '/components/bottom.html', 'utf8' )

    sTopHtml = sTopHtml.replace ('{{title}}', 'PROJECT : : Contact Us')
    sTopHtml = sTopHtml.replace ('{{active-contact-us}}', ' active' ).replace ( /{{active-.*}}/g , '' )

    sBottomHtml = sBottomHtml.replace('{{script}}' , '<script src="js/contact-us.js"> </script>')

    res.send( sTopHtml + sMainHtml + sBottomHtml )

    // for sending the whole file
    // res.sendFile( __dirname + '/html/index.html')
})

app.get( '/user/:id' , ( req , res ) => {
    var sTopHtml = gFs.readFileSync( __dirname + '/components/top.html', 'utf8' )
    var sMainHtml = gFs.readFileSync( __dirname + '/html/user.html', 'utf8' )
    var sBottomHtml = gFs.readFileSync( __dirname + '/components/bottom.html', 'utf8' )

    sTopHtml = sTopHtml.replace ('{{title}}', 'PROJECT : : User')
    sTopHtml = sTopHtml.replace ('{{active-user}}', ' active' ).replace ( /{{active-.*}}/g , '' )

    var sMainHtml = sMainHtml.replace ('{{id}}', req.params.id )

    sBottomHtml = sBottomHtml.replace('{{script}}' , '<script src="js/contact-us.js"> </script>')

    res.send( sTopHtml + sMainHtml + sBottomHtml )

    // for sending the whole file
    // res.sendFile( __dirname + '/html/index.html')
})


// What can do with cronjobs?
// Backup a db
// 00:00 it will run the backup
// SSL vertifivates
// Sends emails every day
// Feeds from facebook, instagram
// get daily sales and do the booking
// gets all the data from the database


/*
//localhost:8080/test-post
// always put return infornt of the res.send
// everytime you see a res, everytime you see a callback --> you have to return
// testing with postman: pretend
app.get('/test-post' , (req , res) =>  {
    // console.log('x')
    return res.send('x')
})
*/



//****************************

app.listen (8080 , err => {
    if( err ){global.gLog( err , 'cannot use that port' ); return }
    gLog( 'ok', 'server is listening to port 8080')
})