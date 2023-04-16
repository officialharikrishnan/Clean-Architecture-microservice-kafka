import { OrderImplements } from "../../frameworks/database/mongoose/repositories/orderImplements";


export const orderRepoInt = (repository:ReturnType <OrderImplements>)=>{
    console.log("interface");
    
    const createOrder = (product:Array<string>) =>{
        repository.createOrder(product)
    }
    return {
        createOrder
    }
}

export type OrderRepoInt = typeof orderRepoInt