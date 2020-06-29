import execSQLQuery from "../config/query";

export default {
  index(req, res) {
    execSQLQuery("SELECT * FROM scheduling", res);
  },
  show(req, res) {
    let filter = "";
    if (req.params.id) filter = " WHERE ID=" + parseInt(req.params.id);
    execSQLQuery("SELECT * FROM scheduling" + filter, res);
  },
  destroy(req, res) {
    execSQLQuery(
      "DELETE FROM scheduling WHERE ID=" + parseInt(req.params.id),
      res
    );
  },
  add(req, res) {
    const date = req.body.date.substring(0, 10);
    const status = req.body.status.substring(0, 2);
    const valueReceive = req.body.valueReceive.substring(0, 10);
    const totalReceived = req.body.totalReceived.substring(0, 10);
    const valueChange = req.body.valueChange.substring(0, 10);
    const customerId = parseInt(req.body.customerId.substring(0, 10));
    execSQLQuery(
      `INSERT INTO scheduling(date, status, valueReceive, totalReceived, valueChange, customerId) 
      VALUES('${date}','${status}','${valueReceive}','${totalReceived}','${valueChange}','${customerId}')`,
      res
    );
  },
  update(req, res) {
    const id = parseInt(req.params.id);
    const date = req.body.date.substring(0, 10);
    const status = req.body.status.substring(0, 2);
    const valueReceive = req.body.valueReceive.substring(0, 10);
    const totalReceived = req.body.totalReceived.substring(0, 10);
    const valueChange = req.body.valueChange.substring(0, 10);
    const customerId = parseInt(req.body.customerId.substring(0, 10));
    execSQLQuery(
      `UPDATE scheduling SET date='${date}', status='${status}', 
      valueReceive='${valueReceive}', totalReceived='${totalReceived}', 
      valueChange='${valueChange}', customerId='${customerId}' WHERE ID=${id}`,
      res
    );
  },
};
