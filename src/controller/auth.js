import execSQLQuery from "../config/query";

export default {
  login(req, res) {
    const email = req.body.email.substring(0, 50);
    const password = req.body.password.substring(0, 8);
    execSQLQuery(
      `select id, cpf, name, email, profile, imageProfile, phone, status from user where email = "${email}" and password = "${password}";`,
      res
    );
  },
};
