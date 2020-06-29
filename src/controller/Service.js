import execSQLQuery from "../config/query";

export default {
  index(req, res) {
    execSQLQuery("SELECT * FROM service", res);
  },
  show(req, res) {
    let filter = "";
    if (req.params.id) filter = " WHERE ID=" + parseInt(req.params.id);
    execSQLQuery("SELECT * FROM service" + filter, res);
  },
  destroy(req, res) {
    execSQLQuery(
      "DELETE FROM service WHERE ID=" + parseInt(req.params.id),
      res
    );
  },
  add(req, res) {
    const description = req.body.description.substring(0, 200);
    const status = req.body.status.substring(0, 1);
    const value = req.body.value.substring(0, 200);
    execSQLQuery(
      `INSERT INTO service(description, status, value) VALUES('${description}','${status}','${value}')`,
      res
    );
  },
  update(req, res) {
    const id = parseInt(req.params.id);
    const description = req.body.description.substring(0, 200);
    const status = req.body.status.substring(0, 1);
    const value = req.body.value.substring(0, 10);
    execSQLQuery(
      `UPDATE service SET description='${description}', status='${status}', value='${value}' WHERE ID=${id}`,
      res
    );
  },
};
