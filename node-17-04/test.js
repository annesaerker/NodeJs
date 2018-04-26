// 17 april
/*
var lives everywhere
const is constant and cant be changed
let lives in the scope fx in a loop
*/

/* const name = 'A'
console.log( name )
name = 'B'
*/

/*
// use const in exam to show you know how to use them
// If you use a const in a loop, it wont make sense, because you vil be decalring it evrytime it run
//this would just be a var

for ( var i = 0; i < 10; i++ ){
    const number = i
    // it works in here 
    // it is the scope
    console.log(number)
    // inherence scope 
    // if ( name == 1){
    //     console.log(number)
    // }
}
// dose not work
// console.log(number)
*/

/*
for ( var i = 0; i < 10; i++ ){
    let name = 'A'
    name = 'B'
    console.log ( name )
}
*/

//let name = 'A'
//console.log ( name )

// santiago only uses var cause he owns all his projects
// but if you work in a team it migth be a good idea

// connect to a database --> const
//const db = 'A'

// is consoled in users.js
/*
global.db = 'A'
var users = require(__dirname+'/users.js')
*/

/*
const db = 'A'
global.gDb = db 
var users = require(__dirname+'/users.js')
*/

/*
// super global, you can't over write it. Dose not need to be required
Object.defineProperty( global , "db" , {value:"A"} ) // this is the super global const
global.db = 'X' // this wont overwrite the super global, its just forgotton
console.log( '*******' , db )
var users = require(__dirname+'/users.js')
*/

// if you have 20 file and only use a global between 3 file. Then dont use a super global. 
// It migth polute the files
// Then you should require or module export

/*
let aUsers = ['A','B','C']
// dont think this is a copy, it is a refrence
// it is the same array
let aUsersCopy = aUsers
aUsersCopy[0] = 'X'
console.log(aUsers)
*/

/*
//so how do you copy an array
let aUsers = ['A','B','C']
// this works
//let aUsersCopy = JSON.parse(JSON.stringify(aUsers))
// this works (trick from angular). 
// But take care using fancy new stuff. Like fat arrows in frontend, dont use them.
//let aUsersCopy =  [...aUsers]
// this works as long as there are no arguments in
// this is what santiago uses
//let aUsersCopy = aUsers.slice()
let aUsersCopy =  Array.from(aUsers)
aUsersCopy[0] = 'X'
console.log(aUsers)
console.log(aUsersCopy)
*/

/*
// objects also do not copy but refrence
// it is to optimize speed and memonry
let jUser = {name:'A'}
let jUserCopy = jUser
jUserCopy.name = 'X'

console.log(jUser)
console.log(jUserCopy)
*/

/*
//let jData = {name:'A'}
let jData = { fullName: { firstName:'A' , lastName:'B'}}
let sUserName = jData.fullName.firstName
console.log(sUserName)
// what is someone messes with the system
*/

/*
// you can make an if else, so it dose not crash the system
// but if the system was more complex, with data coming from api's
// then use a  try catch
let jData = {name:'A'}
if (jData.fullName) {
    let sUserName = jData.fullName.firstName
    console.log(sUserName)
} else {
    console.log('no')
}
*/

/*
//check this cause it is supposed to come out with 'I AM CATCH'
try {
    //let jData = {name:'A'}
    //let sName = jData.name
    //what if someone removes the name
    //let jData = {}
    //let jData = { fullName: { firstName:'A' }}
    let jData = { fn: { n:'A' }}
    let sName = jData.fullName.name || 'I AM HERE 1'
    console.log(sName)
} catch (err){
    sName ='I AM CATCH'
}
*/

