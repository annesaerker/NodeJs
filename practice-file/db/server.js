
const mysql = require('mysql');

// OUR DATABASE 
global.db = mysql.createConnection({
    host: "localhost",
    user: "admin",
    password: "password",
    database: "dbynad-node",
    port: 8889
});

// CONNECT TO OUR DATABASE
db.connect(err => {
    if(err){
        console.log(err), process.exit()
    }
    console.log('connected');
});

// READ ALL USERS FROM DATABASE
var stmt = "SELECT * FROM users"

db.query( stmt , ( err , ajData ) =>{
    console.log("ajData", ajData)
})

