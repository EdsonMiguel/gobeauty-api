const createTable = (conn) => {
    const sql = "CREATE TABLE IF NOT EXISTS scheduling (id INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT, date TIMESTAMP NOT NULL, status SMALLINT NOT NULL, valueReceive FLOAT NOT NULL, totalReceived FLOAT NOT NULL, valueChange FLOAT NOT NULL, customerId INTEGER NOT NULL, FOREIGN KEY (customerId) REFERENCES customer (id));"
        conn.query(sql, function (error, results, fields) {
      if (error) return console.log(error);
      console.log({
        "Table":"scheduling",
        "status":"Create"
      })
    });
  };
  
  export default createTable;
  