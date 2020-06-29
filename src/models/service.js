const createTable = (conn) => {
    const sql = "CREATE TABLE IF NOT EXISTS service (id INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT, description VARCHAR (200) NOT NULL, status SMALLINT NOT NULL, value FLOAT NOT NULL); "
        conn.query(sql, function (error, results, fields) {
      if (error) return console.log(error);
      console.log({
        "Table":"service",
        "status":"Create"
      })
    });
  };
  
  export default createTable;
  