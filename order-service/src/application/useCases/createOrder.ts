import { OrderRepoInt } from "../repositories/orderRepoInt";

export const createOrderUse = (product:object,repository:ReturnType <OrderRepoInt>) => {
    console.log('usecase',product,repository.createOrder);
    
    repository.createOrder(product)
};
