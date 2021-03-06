// Dependencies
let mysql = require('mysql');
require('dotenv').config();

// Set the port of our application

// MySQL DB Connection Information (remember to change this with our specific credentials)
if (process.env.JAWS_DB_URL) {
  console.log('------');
  console.log(process.env);
  connection = mysql.createConnection(
    'mysql://b5dyae5tprc2m3cy:xu0w01o205cfu5bq@alv4v3hlsipxnujn.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/yejc48k8euy0jecs'
  );
  // mysql://b2c8985c6e27a5:ec1799e7@us-cdbr-iron-east-02.cleardb.net/heroku_d807133fc14176e?reconnect=true
} else {
  console.log('local instance');
  connection = mysql.createConnection({
    host: 'root',
    port: 3306,
    user: 'Hihihi10',
    password: 'password',
    database: 'burgers_db'
  });
}

// Initiate MySQL Connection.
connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + connection.threadId);
});

module.exports = connection;
