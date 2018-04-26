const pg = require("pg");
var connectionString = "postgres://postgres:9510@localhost:5432/tutorial";
// const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/tutorial';
const pgClient = new pg.Client(connectionString);

pgClient.connect(function(err) {
    if(err) {
        return console.error('could not connect to postgres', err);
    }
    console.log("Connected");
});

var sQuery = 'INSERT INTO public."Users" (sName) values ($1)';
var sUserName = "X";

pgClient.query(sQuery, [sUserName], (err, result ) => {
    if(err){
        console.log(err);
        process.exit();
        return;
    }
    console.log(result.rows);
    pgClient.end();
});