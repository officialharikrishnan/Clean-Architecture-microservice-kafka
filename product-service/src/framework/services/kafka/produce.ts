import { sendMessage } from "./methods";

export const sendProductById = (topic:string,item:object) =>{
    console.log("mess",item);
    
    sendMessage(topic,item)
}