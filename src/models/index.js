import customer from "./customer"
import formReceipt from "./formReceipt"
import receivementScheduling from "./receivementScheduling"
import scheduling from "./scheduling"
import service from "./service"
import serviceScheduling from "./serviceScheduling"
import user from "./user"

const createTable = (conn)=>{
    user(conn);
    customer(conn);
    formReceipt(conn);
    service(conn);
    scheduling(conn);
    receivementScheduling(conn);
    serviceScheduling(conn);

}

export default createTable;