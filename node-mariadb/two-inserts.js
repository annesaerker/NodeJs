var mysql = require('mysql')

var db = mysql.createConnection({
    host:"localhost",
    user:"admin",
    password:"password",
    database:"tutorial",
    port:8889
})

db.connect( err => {
    if(err){console.log('ERROR'); process.exit()}
    console.log('CONNECTED')
})

/***********************************************/

/* create a system that saves a new user
With the iD from the user, save the phone number
User and phone number are hard coded

users
iId  sName
1    A

phones
iId  iUserId  sPhone
1    1        565643
*/

/*
// version 1
var jUser = {"sName":"EFG"}
var stmt = 'INSERT INTO users SET ?'

db.query( stmt , jUser , ( err , jData ) => {
    var iUserId = jData.insertId
    var jPhone = {"iUserId":iUserId,"sPhone":"123456"}
    var stmt = 'INSERT INTO phones SET ?'

    db.query( stmt , jPhone , ( err , jData ) => {
        console.log("jData", jData)
    })
})
*/

/*
// version without fat arrow
// never user callbacks/fat arrow in front-end
var jUser = {"sName":"EFG"}
var stmt = 'INSERT INTO users SET ?'
db.query( stmt , jUser , function( err , jData ){
    // if err check
    insertPhone(jData.insertId)
})
*/

// version 2
// This code is a little more clean
var jUser = {"sName":"EFG"}
var stmt = 'INSERT INTO users SET ?'
db.query( stmt , jUser , ( err , jData ) => {
    // if err check
    insertPhone(jData.insertId)
})


function insertPhone(iUserId){
    var jPhone = {"iUserId":iUserId,"sPhone":"123456"}
    var stmt = 'INSERT INTO phones SET ?'
    db.query( stmt , jPhone , ( err , jData ) => {
         console.log("jData", jData)
    })
}

