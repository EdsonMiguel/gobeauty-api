import execSQLQuery from "../config/query";

export default {
  index(req, res) {
    execSQLQuery("SELECT * FROM customer", res);
  },
  show(req, res) {
    let filter = "";
    if (req.params.id) filter = " WHERE ID=" + parseInt(req.params.id);
    execSQLQuery("SELECT * FROM customer" + filter, res);
  },
  destroy(req, res) {
    execSQLQuery(
      "DELETE FROM customer WHERE ID=" + parseInt(req.params.id),
      res
    );
  },
  add(req, res) {
    const name = req.body.name.substring(0, 200);
    const email = req.body.email.substring(0, 50);
    const status = req.body.status.substring(0, 2);
    const phone = req.body.phone.substring(0, 15);

    execSQLQuery(
      `INSERT INTO customer(name, email,  status, phone) 
      VALUES('${name}','${email}','${status}','${phone}')`,
      res
    );
  },
  update(req, res) {
    const id = parseInt(req.params.id);
    const name = req.body.name.substring(0, 200);
    const email = req.body.email.substring(0, 50);
    const status = req.body.status.substring(0, 2);
    const phone = req.body.phone.substring(0, 15);
    execSQLQuery(
      `UPDATE customer SET name='${name}', email='${email}', 
      status='${status}', phone='${phone}' WHERE ID=${id}`,
      res
    );
  },
};
