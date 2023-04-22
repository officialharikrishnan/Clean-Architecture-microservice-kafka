import { OrderRepoInt } from "../application/repositories/orderRepoInt";
import { createOrderUse } from "../application/useCases/createOrder";
import { OrderImplements } from "../frameworks/database/mongoose/repositories/orderImplements";
import { Request,Response,NextFunction } from "express";
import { getProductById } from "../frameworks/services/kafka/produce";

export const orderController = (
    OrderRepoInt:OrderRepoInt,
    OrderImplements:OrderImplements
) => {
    const repository = OrderRepoInt(OrderImplements())
    const createOrder = (req:Request,res:Response) => {
        const {id} = req.body
        getProductById(id)
    }
    const placeOrder = (order:object) =>{
        createOrderUse(order,repository)
        console.log("order created");
        
    }
    return {
        createOrder,
        placeOrder
    }
}