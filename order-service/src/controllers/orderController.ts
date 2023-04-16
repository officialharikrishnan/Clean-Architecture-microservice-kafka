import { OrderRepoInt } from "../application/repositories/orderRepoInt";
import { createOrderUse } from "../application/useCases/createOrder";
import { OrderImplements } from "../frameworks/database/mongoose/repositories/orderImplements";
import { Request,Response } from "express";
import { sendMessage } from "../frameworks/services/kafka/methods";

const test=['1','2']
export const orderController = (
    OrderRepoInt:OrderRepoInt,
    OrderImplements:OrderImplements
) => {
    const repository = OrderRepoInt(OrderImplements())
    const createOrder = (req:Request,res:Response) => {
        const {id} = req.body
        sendMessage('getProduct',id)
        createOrderUse(test,repository)
    }
    return {
        createOrder
    }
}