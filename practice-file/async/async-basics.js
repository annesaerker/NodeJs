console.log("Starting app");

setTimeout(() => {
    console.log("Inside Callback - one");
}, 2000);

setTimeout(() => {
    console.log("Inside Callback - two");
}, 0);

console.log("Finishing app");

// Starting app
// Finishing app
// Inside Callback - two
// Inside Callback - one