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
var jUser = {"sName":"x"}
var stmt = 'INSERT INTO users SET ?'

db.query( stmt , jUser , ( err , jData ) => {
    // JSON.strigify to check what you really get back
    console.log("uData", jData)
    if(jData.affectedRows == 1 ){
        console.log('Great, JSON user inserted')
    }
})
*/

/*
// BULK insert 
// inserts three things at the same time, instead of inserting one thing at a time
var aData = [[null, "X"],[null, "Y"],[null, "Z"]]
var stmt = 'INSERT INTO users VALUES ?'

// You need the thrid level multidim.. array [aData] for it to work
db.query ( stmt , [aData] , ( err , jData ) => {
    console.log("jData", jData)
})
*/

/*
// BULK insert
// Same as the one above, but with one less [] and () around the ?
var aData = [null, "X"]
var stmt = 'INSERT INTO users VALUES (?)'

// You need the thrid level multidim.. array [aData] for it to work
db.query ( stmt , [aData] , ( err , jData ) => {
    console.log("jData", jData)
})
*/

