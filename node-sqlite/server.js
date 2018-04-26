const sqlite3 = require('sqlite3')
// connects to database
var db = new sqlite3.Database(__dirname + '/database.db')

// remenber to write changes to the database, when you write values into the sqlite interface

/*
// Insert multiple elements at once
let startDate = Date.now()
let inserts = ''

for(let i = 0; i < 300; i++){
    inserts += "('A'),"
}

//Remove comma from last element, otherwise the code will be destroyed
inserts = inserts.slice(0,-1)
let stmt = 'INSERT INTO users (name) VALUES ' + inserts

db.run( stmt, function(err){
    let rigthNow = Date.now()
    let deltaTime = (rigthNow - startDate)/1000
    console.log(deltaTime)
})
*/

/*
// all will run the select statment
// This alone will extract data
db.all("SELECT * FROM users" , function( err , ajRows ){
    console.log(ajRows)
})
*/

// run for querys and all for select
// when you change something run
// when data is not changed all

/*
// DELETE ROW WITH NAME B
let sName = 'D'
let stmt = "DELETE FROM users WHERE name = ?"
db.run( stmt , sName , function( err ){
    console.log('Element deleted ' + this.changes)
})
*/

// Delete from users --> to delete everything from the table in the interface without distroying the table

/*
// UPDATE
let params = ['x','A']
db.run( "UPDATE users SET name = ? WHERE name = ?" , params , function( err ){
    console.log('Element updated ' + this.changes)
})
*/

/*
// INSERT
var aData = [ null , 'D' ]
var sQuery = "INSERT INTO users VALUES(?,?)"
db.run( sQuery , aData , function( err ){
    console.log('**********')
    // this tells you the changes that take place in the database
    // this dose not understand a fat arrow, so use a function for a normal this
    console.log( 'insert this is : ' ,  this )
    // this contains: { sql: 'INSERT INTO users VALUES(?,?)', lastID: 4, changes: 1 }
})
*/

/*
// SELECT
db.all("SELECT * FROM users" , function( err , ajRows ){
    console.log(ajRows)
    console.log( 'select this is : ' , this )
    ajRows.forEach( jRow => {
        console.log( jRow.name)
    });
})
*/

// Count how many elements there are in the table
db.all("SELECT COUNT(*) AS total FROM users" , function( err , ajRows ){
    console.log( 'Total is: ' + ajRows[0].total )
})


