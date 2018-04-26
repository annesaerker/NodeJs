const pg = require("pg");
var connectionString = "postgres://postgres:9510@localhost:5432/tutorial";
const pgClient = new pg.Client(connectionString);

pgClient.connect(function(err) {
    if(err) {
        return console.error('could not connect to postgres', err);
    }
    console.log("Connected");
});

var sQuery = 'update public."Users" set sName = $1 where iId = $2';
var userName = 'A';
var userId = 2;

pgClient.query(sQuery, [userName, userId], (err, result ) => {
    if(err){
        console.log(err);
        process.exit();
        return;
    }
    console.log(result.rows);
    pgClient.end();
});