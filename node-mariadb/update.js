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


// Update 
var aData = ['BB', 9]
var stmt = 'UPDATE users SET sName = ? WHERE iId = ?'

db.query( stmt , aData , ( err , jData ) =>{
    console.log("ajData", jData)
})