const createTable = (conn) => {
  const sql = "CREATE TABLE IF NOT EXISTS user (id INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT, cpf VARCHAR (15) NOT NULL UNIQUE KEY, name VARCHAR (200) NOT NULL, email VARCHAR (50) UNIQUE KEY, password VARCHAR (8) NOT NULL, profile VARCHAR (200) NOT NULL, imageProfile VARCHAR (400), phone VARCHAR(15), status SMALLINT NOT NULL); "
  conn.query(sql, function (error, results, fields) {
    if (error) return console.log(error);
    console.log({
      "Table":"user",
      "status":"Create"
    })
  });
};

export default createTable;
