/*
var test = ( iNumber , fCallback) => {
    if( iNumber == 1){
        console.log('Got ', iNumber)
        // wont console start
        //fCallback()
        // wont console end
        return fCallback()
    }
    console.log('End')
   
}

test ( 1, ()=>{console.log('start')})
*/





/*
// this looks cool and fancy
// the code dose not stop with the callback, if you dont use the return
var test = ( fCallback) => {
     return fCallback()
     console.log('end')
}

test ( ()=>{console.log('start')})
*/


/*console.log(1)

//fuctions will be loaded before anything else
// Simple code is the best code, this is  what i expect when i ask you to console.log your name
function getFullName( sName, sLastName){
    return sName +''+ sLastName
    // a little more fancy return
    // return `${sName} ${sLastName}`
}

getFullName()

console.log(2)
*/











/*
console.log(1)

// Callbacks are not Async, unless it talks to database, API // IO Input Output
// Callbacks in this example are not fast, queue users
// No point in doing callback, if you are not doing input output

//

// var start = process. hrtime() // nanosecounds
// console.log(start)

var test = fCallback => {

    // This should take some time
    var total = 0
    var start = process. hrtime() 
    for ( var i = 0; i < 500000000; i++){
        total += i
    }

    var end = process. hrtime() 
    // Calcuate the time between the two variables ???
    var seconds = end[0]-start[0]
    var milliseconds = end[1]-start[1]
    console.log(seconds,milliseconds)

    fCallback()
}

test( function(){
    console.log('test')
})

console.log(2)
*/












/*
console.log(1)

// test() can be over or under, if will run either way
// In nodeJs, use funstions like this
function test(){
    console.log('test')
}

test()

// //variable that acts like fuction (only javascript)
// // If you move test() here, the server will crash, under the variable it will run
// dont use this client side
// var test = () => {
//     console.log('test')
// }
// test()

console.log(2)
*/



















/*
import { setInterval } from "timers";

process.on('uncaughtException', (ex) => {
    console.log('Troble, something is really wrong!: ' + ex)
})      

// comes from a server
var jUser = {}

// if the first key dose not exsist it wont fail. if you have more than one key it will crash
// first key is unefined, after that the server dies
try{
    var jMyUser = juser.fullname
    
    console.log('x')
    
    setInterval( function(){
        console.log('x')
    })

}catch(ex){
    console.log('server1.js - ex - 1')
}
*/









/*
// This is a new server, where we are being showed tricks of how to set set up servers in nodeJs

// This is data, This comes from a API
// var jUser = {id:1, name: "A", siblings: [{id:2, name: "B"},{id:3, name: "C"}]}

// If something is removed, even as simple as one key--> the whole system chashes
var jUser = {id:1, name: "A"}

// will be sent to the server or save to the databse
// ex for exception
try {
    // put everything here, then the server wont go down
    var jSendToServer = {id:123, message:"Test", name:jUser.name, siblingOneName:jUser.siblings[0].name}
    
    console.log(jSendToServer)

} catch(ex){
    console.log('ex - 000 - server1.js - function test: '+ ex)

}

// if this runs, the server is still running even though there is an erro
 console.log("X")
 */

