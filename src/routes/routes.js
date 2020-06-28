import express from "express";
import customer from "../controller/Customer";
import formReceipt from "../controller/FormReceipt";
import receivementScheduling from "../controller/ReceivementScheduling";
import scheduling from "../controller/Scheduling";
import service from "../controller/Service";
import serviceScheduling from "../controller/ServiceScheduling";
import user from "../controller/User";
const routes = express.Router();

//Customer Routes
routes.get("/customer", customer.index);
routes.get("/customer/:id?", customer.show);
routes.put("/customer/:id", customer.update);
routes.post("/customer", customer.add);
routes.delete("/customer/:id", customer.destroy);

//FormReceipt Routes
routes.get("/formReceipt", formReceipt.index);
routes.get("/formReceipt/:id?", formReceipt.show);
routes.put("/formReceipt/:id", formReceipt.update);
routes.post("/formReceipt", formReceipt.add);
routes.delete("/formReceipt/:id", formReceipt.destroy);

//ReceivementScheduling Routes
routes.get("/receivement", receivementScheduling.index);
routes.get("/receivement/:id?", receivementScheduling.show);
routes.put("/receivement/:id", receivementScheduling.update);
routes.post("/receivement", receivementScheduling.add);
routes.delete("/receivement/:id", receivementScheduling.destroy);

//Scheduling Routes
routes.get("/scheduling", scheduling.index);
routes.get("/scheduling/:id?", scheduling.show);
routes.put("/scheduling/:id", scheduling.update);
routes.post("/scheduling", scheduling.add);
routes.delete("/scheduling/:id", scheduling.destroy);

//Service Routes
routes.get("/service", service.index);
routes.get("/service/:id?", service.show);
routes.put("/service/:id", service.update);
routes.post("/service", service.add);
routes.delete("/service/:id", service.destroy);

//ServiceScheduling Routes
routes.get("/servicescheduling", servicescheduling.index);
routes.get("/servicescheduling/:id?", servicescheduling.show);
routes.put("/servicescheduling/:id", servicescheduling.update);
routes.post("/servicescheduling", servicescheduling.add);
routes.delete("/servicescheduling/:id", servicescheduling.destroy);

//User Routes
routes.get("/user", user.index);
routes.get("/user/:id?", user.show);
routes.put("/user/:id", user.update);
routes.post("/user", user.add);
routes.delete("/user/:id", user.destroy);




export default routes;
