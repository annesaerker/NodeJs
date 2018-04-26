const pg = require("pg");
var connectionString = "postgres://postgres:9510@localhost:5432/tutorial";
const pgClient = new pg.Client(connectionString);

pgClient.connect(function(err) {
    if(err) {
        return console.error('could not connect to postgres', err);
    }
    console.log("Connected");
});

var sQuery = 'delete from public."Users" where sName = $1 AND iId = $2';
var userName = 'X';
var userId = 1;

pgClient.query(sQuery, [userName, userId], (err, result ) => {
    if(err){
        console.log(err);
        process.exit();
        return;
    }
    console.log(result.rows);
    pgClient.end();
});