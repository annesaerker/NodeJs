// require from the package.json
var mysql = require('mysql')

// The var used for connecting to the database
var db = mysql.createConnection({
    host:"localhost",
    user:"admin",
    password:"password",
    database:"tutorial",
    port:8889
})

// connect to the database
// async beacuse it is an input/output
db.connect( err => {
    // if there is an err, kill the process, dont let anyone pass
    if(err){console.log('error'); process.exit() }
    console.log('Connected')
})

/*
// uData stands for unknown
// rowDataPacket does not exsist
db.query( 'SELECT * FROM users WHERE sName LIKE "%B%"', (err , ajData)=>{
    console.log(ajData)
    // [ RowDataPacket { iId: 1, sName: 'ABC' }, RowDataPacket { iId: 2, sName: 'BCD' } ]
})
*/


/*
 db.query('SELECT * FROM users WHERE sName = "A"' , (err, ajUsers)=>{
     console.log(ajUsers)
 })
 //To make this shorter we can create some var for some of the values
 /*

 /*
var sName = 'A' // pretend this value came from the user
var stmt = 'SELECT * FROM users WHERE sName = ?' // ? is a placeholder

db.query( stmt , sName , (err , ajData) => {
    console.log( ajData )
})
*/

/*
// bullet prof against sql injections, because the aData is not in the stmt(statment)
var aData = [1,'A']
var stmt = 'SELECT * FROM users WHERE iId = ? AND sName= ?'

db.query( stmt , aData , ( err , ajData ) => {
    console.log( ajData )
})
*/


var aData = ['%B%']
var stmt = "SELECT * FROM users WHERE  sName LIKE ?"

db.query( stmt , aData , ( err , ajData ) =>{
    console.log("ajData", ajData)
})
