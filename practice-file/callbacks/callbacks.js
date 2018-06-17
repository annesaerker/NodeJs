var getUser = (id, callback) => {
    // dummy object
    var user = {
        id: id,
        name: 'Anne'
    };
    // no need for a callback here, beacuse we could just return it
    // callback(user);

    setTimeout(() => {
        callback(user);
    }, 3000);
};

// pass in a callback
// some sort of delays happens (request from db or http request: here the timeout)
getUser(31, (userObject) => {
    
    console.log(userObject);
});