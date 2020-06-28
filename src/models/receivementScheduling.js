const createTable = (conn) => {
    const sql = "CREATE TABLE IF NOT EXISTS receivementScheduling (id INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT, date TIMESTAMP NOT NULL, valueReceived FLOAT NOT NULL, formReceiptId INTEGER NOT NULL, userId INTEGER NOT NULL, schedulingId INTEGER NOT NULL, FOREIGN KEY (formReceiptId) REFERENCES formReceipt(id), FOREIGN KEY (userId) REFERENCES user (id), FOREIGN KEY (schedulingId) REFERENCES scheduling (id));"
        conn.query(sql, function (error, results, fields) {
      if (error) return console.log(error);
      console.log({
        "Table":"receivementScheduling",
        "status":"Create"
      })
    });
  };
  
  export default createTable;
  