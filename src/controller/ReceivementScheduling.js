import execSQLQuery from "../config/query";

export default {
  index(req, res) {
    execSQLQuery("SELECT * FROM receivementScheduling", res);
  },
  show(req, res) {
    let filter = "";
    if (req.params.id) filter = " WHERE ID=" + parseInt(req.params.id);
    execSQLQuery("SELECT * FROM receivementScheduling" + filter, res);
  },
  destroy(req, res) {
    execSQLQuery(
      "DELETE FROM receivementScheduling WHERE ID=" + parseInt(req.params.id),
      res
    );
  },
  add(req, res) {
    const date = req.body.date.substring(0, 10);
    const valueReceived = req.body.valueReceived.substring(0, 10);
    const formReceiptId = parseInt(req.body.formReceiptId.substring(0, 10));
    const userId = parseInt(req.body.userId.substring(0, 10));
    const schedulingId = parseInt(req.body.schedulingId.substring(0, 10));
    execSQLQuery(
      `INSERT INTO receivementScheduling(date, valueReceived, formReceiptId, userId, schedulingId) 
      VALUES('${date}','${valueReceived}','${formReceiptId}','${userId}','${schedulingId}')`,
      res
    );
  },
  update(req, res) {
    const id = parseInt(req.params.id);
    const date = req.body.date.substring(0, 10);
    const valueReceived = req.body.valueReceived.substring(0, 10);
    const formReceiptId = parseInt(req.body.formReceiptId.substring(0, 10));
    const userId = parseInt(req.body.userId.substring(0, 10));
    const schedulingId = parseInt(req.body.schedulingId.substring(0, 10));
    execSQLQuery(
      `UPDATE receivementScheduling SET date='${date}', valueReceived='${valueReceived}', 
      formReceiptId='${formReceiptId}', userId='${userId}', schedulingId='${schedulingId}'
       WHERE ID=${id}`,
      res
    );
  },
};
