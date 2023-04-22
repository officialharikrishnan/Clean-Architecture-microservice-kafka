import { sendMessage } from "./methods";

export const getProductById = (id:string) =>{
    sendMessage('getProduct',id)
}