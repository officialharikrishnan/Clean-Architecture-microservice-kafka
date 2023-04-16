import { Order } from "../model/order"

export const orderImplements = () => {
    console.log("implement");
    
    const createOrder=(product:Array<string>)=>{
        let order={
            product,
            status:'pending'
        }
        Order.create(order).then((res)=>{
            console.log(res);
        })
        .catch((err)=>{
            console.log(err);
            
        })
    }
    return {
        createOrder
    }
}
export type OrderImplements = typeof orderImplements