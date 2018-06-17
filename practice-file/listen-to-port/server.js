const express = require('express');
const app = express();

//
    // STUFF FOR APPLICATION
//

// LISTEN TO PORT
var port = 1994;
app.listen(port, err => {
    if(err){
        console.log("ERROR - LISTEN TO PORT 1994");
        // return stops app if there is an error
        return;
    }
    console.log("SERVER IS RUNNING ON PORT 1994");
});