import mysql from "mysql";
const execSQLQuery = (sqlQry, res) => {
  const connection = mysql.createConnection({
    host: process.env.DBHOST,
    port: process.env.DBPORT,
    user: process.env.DBUSER,
    password: process.env.DBPASSWORD,
    database: process.env.DBNAME,
  });

  connection.query(sqlQry, function (error, results, fields) {
    if (error) res.json(error);
    else res.json(results);
    connection.end();
    console.log(sqlQry, "OK");
  });
};

export default execSQLQuery;
