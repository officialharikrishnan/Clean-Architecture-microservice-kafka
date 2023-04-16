import { Application } from "express";
import { orderController } from "../../../controllers/orderController";
import { orderRepoInt } from "../../../application/repositories/orderRepoInt";
import { orderImplements } from "../../database/mongoose/repositories/orderImplements";

const route = (app: Application) => {
    const conroller = orderController(orderRepoInt,orderImplements)
app.route('/createOrder')
.post(conroller.createOrder)
};
export { route };
