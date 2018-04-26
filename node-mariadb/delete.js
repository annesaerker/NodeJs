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

/*
// Delete all users with name x
var aData = ['x']
var stmt = 'DELETE FROM users WHERE sName = ?'

db.query( stmt , aData , ( err , jData ) =>{
    console.log("ajData", jData)
})
*/

/*
// Delete user with id=8 and name=A
var aData = [8,'A']
var stmt = 'DELETE FROM users WHERE iId = ? AND sName = ?'

db.query( stmt , aData , ( err , jData ) =>{
    console.log("ajData", jData)
})
*/