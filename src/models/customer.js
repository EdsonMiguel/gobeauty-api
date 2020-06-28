const createTable = (conn) => {
    const sql = "CREATE TABLE IF NOT EXISTS customer (id INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT, name VARCHAR(200) NOT NULL, email VARCHAR(50) NOT NULL, password VARCHAR(8) NOT NULL, oldPassword VARCHAR (8), confirmedPassword VARCHAR(8), status SMALLINT NOT NULL, phone VARCHAR(15));"
        conn.query(sql, function (error, results, fields) {
      if (error) return console.log(error);
      console.log({
        "Table":"customer",
        "status":"Create"
      })
    });
  };
  
  export default createTable;
  