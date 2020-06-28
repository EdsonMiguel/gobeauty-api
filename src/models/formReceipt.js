const createTable = (conn) => {
    const sql = "CREATE TABLE IF NOT EXISTS formReceipt (id INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT, description VARCHAR (200) NOT NULL, status SMALLINT NOT NULL);"
        conn.query(sql, function (error, results, fields) {
      if (error) return console.log(error);
      console.log({
        "Table":"formReceipt",
        "status":"Create"
      })
    });
  };
  
  export default createTable;
  