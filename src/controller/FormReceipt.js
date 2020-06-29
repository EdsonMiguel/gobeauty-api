import execSQLQuery from "../config/query";

export default {
  index(req, res) {
    execSQLQuery("SELECT * FROM formReceipt", res);
  },
  show(req, res) {
    let filter = "";
    if (req.params.id) filter = " WHERE ID=" + parseInt(req.params.id);
    execSQLQuery("SELECT * FROM formReceipt" + filter, res);
  },
  destroy(req, res) {
    execSQLQuery(
      "DELETE FROM formReceipt WHERE ID=" + parseInt(req.params.id),
      res
    );
  },
  add(req, res) {
    const description = req.body.description.substring(0, 150);
    const status = req.body.status.substring(0, 2);
    execSQLQuery(
      `INSERT INTO formReceipt(description, status) VALUES('${description}','${status}')`,
      res
    );
  },
  update(req, res) {
    const id = parseInt(req.params.id);
    const description = req.body.description.substring(0, 150);
    const status = req.body.status.substring(0, 2);
    execSQLQuery(
      `UPDATE formReceipt SET description='${description}', status='${status}' WHERE ID=${id}`,
      res
    );
  },
};
