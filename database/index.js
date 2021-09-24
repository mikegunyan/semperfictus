// require assests
const mysql = require('mysql');

// create a connection to database and assign to variable
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  // password: 'semperfictusroot',
  database: 'semperfictus'
});

// call connect function on variable to connect
db.connect(err => {
  if (err) {
    console.log(err);
  } else {
    console.log('Connected to MySql DB')
  }
});

// export that connection and import it into server/index.js
module.exports = db;
