import execSQLQuery from "../config/query";

export default {
  index(req, res) {
    execSQLQuery("SELECT * FROM serviceScheduling", res);
  },
  show(req, res) {
    let filter = "";
    if (req.params.id) filter = " WHERE ID=" + parseInt(req.params.id);
    execSQLQuery("SELECT * FROM serviceScheduling" + filter, res);
  },
  destroy(req, res) {
    execSQLQuery(
      "DELETE FROM serviceScheduling WHERE ID=" + parseInt(req.params.id),
      res
    );
  },
  add(req, res) {
    const date = req.body.date.substring(0, 10);
    const serviceId = parseInt(req.body.serviceId.substring(0, 10));
    const userId = parseInt(req.body.userId.substring(0, 10));
    const schedulingId = parseInt(req.body.schedulingId.substring(0, 10));
    execSQLQuery(
      `INSERT INTO serviceScheduling(date, serviceId, userId, schedulingId) 
      VALUES('${date}','${serviceId}','${userId}','${schedulingId}')`,
      res
    );
  },
  update(req, res) {
    const id = parseInt(req.params.id);
    const date = req.body.date.substring(0, 10);
    const serviceId = parseInt(req.body.serviceId.substring(0, 10));
    const userId = parseInt(req.body.userId.substring(0, 10));
    const schedulingId = parseInt(req.body.schedulingId.substring(0, 10));
    execSQLQuery(
      `UPDATE serviceScheduling SET date='${date}', serviceId='${serviceId}', 
      userId='${userId}', schedulingId='${schedulingId}' WHERE ID=${id}`,
      res
    );
  },
};
