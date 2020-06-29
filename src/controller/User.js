import execSQLQuery from "../config/query";

export default {
  index(req, res) {
    execSQLQuery("SELECT * FROM user", res);
  },
  show(req, res) {
    let filter = "";
    if (req.params.id) filter = " WHERE ID=" + parseInt(req.params.id);
    execSQLQuery("SELECT * FROM user" + filter, res);
  },
  destroy(req, res) {
    execSQLQuery("DELETE FROM user WHERE ID=" + parseInt(req.params.id), res);
  },
  add(req, res) {
    const cpf = req.body.cpf.substring(0, 15);
    const name = req.body.name.substring(0, 200);
    const email = req.body.email.substring(0, 50);
    const password = req.body.password.substring(0, 8);
    const profile = req.body.profile.substring(0, 200);
    const imageProfile = req.body.imageProfile.substring(0, 400);
    const status = req.body.status.substring(0, 2);
    const phone = req.body.phone.substring(0, 15);
    execSQLQuery(
      `INSERT INTO user(cpf, name, email, password, profile, imageProfile, status, phone) 
      VALUES('${cpf}','${name}','${email}','${password}','${profile}','${imageProfile}','${status}',${phone})`,
      res
    );
  },
  update(req, res) {
    const id = parseInt(req.params.id);
    const cpf = req.body.cpf.substring(0, 15);
    const name = req.body.name.substring(0, 200);
    const email = req.body.email.substring(0, 50);
    const password = req.body.password.substring(0, 8);
    const profile = req.body.profile.substring(0, 200);
    const imageProfile = req.body.imageProfile.substring(0, 400);
    const status = req.body.status.substring(0, 2);
    const phone = req.body.phone.substring(0, 15);
    execSQLQuery(
      `UPDATE user SET cpf='${cpf}', name='${name}', email='${email}', 
      password='${password}', profile='${profile}', 
      imageProfile='${imageProfile}', status='${status}', phone='${phone}' WHERE ID=${id}`,
      res
    );
  },
};
