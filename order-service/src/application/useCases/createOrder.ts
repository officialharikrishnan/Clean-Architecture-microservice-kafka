import { OrderRepoInt } from "../repositories/orderRepoInt";

export const createOrderUse = (product:Array<string>,repository:ReturnType <OrderRepoInt>) => {
    console.log('usecase',product,repository.createOrder);
    
    repository.createOrder(product)
};
