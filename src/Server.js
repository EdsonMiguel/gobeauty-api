import express from "express";
import bodyParser from "body-parser";
import router from "./routes/routes";
import mysql from "mysql";
import cors from "cors";
import createTable from "./models/index";
import "dotenv/config";

//Conexão com o Banco
const connection = mysql.createConnection({
  host: process.env.DBHOST,
  port: process.env.DBPORT,
  user: process.env.DBUSER,
  password: process.env.DBPASSWORD,
  database: process.env.DBNAME,
});

//Criação das Tabelas
connection.connect(function (err) {
  if (err) return console.log(err);
  createTable(connection);
});

//Iniciando a API Rest
const app = express();
const port = 3333;
app.listen(port);

//CORS
app.use(cors());

//Body-Parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Rotas
app.use("/",router);
console.log({
  link: `http://localhost:${port}`,
});
