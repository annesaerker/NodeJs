const pg = require("pg");
var connectionString = "postgres://postgres:9510@localhost:5432/tutorial";
const pgClient = new pg.Client(connectionString);

pgClient.connect(function(err) {
    if(err) {
        return console.error('could not connect to postgres', err);
    }
    console.log("Connected");
});

const aParams = ['NameOfUser'];
const sQuery = 'SELECT * FROM Users WHERE "sName" = $1';

client.query(sQuery, aParams, (err, res) => {
    if(err){
        console.log(err);
    }
    var ajData = res.rows;
    console.log(ajData);
    client.end();
})