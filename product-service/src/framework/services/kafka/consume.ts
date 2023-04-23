import { KafkaConsumer } from "./methods";
import { eventEmit } from "../kafka/methods";
import { productController } from "../../../controller/productController";
import { productRepoInt } from "../../../application/repositories/productRepoInt";
import { productRepoImplements } from "../../database/mongoose/repositories/productRepoImplements";
import { sendProductById } from "./produce";

const topic1='getProduct'
const topic2='getProductResult'
const controller = productController(productRepoInt,productRepoImplements)
export const consumeMessage = () => {
    const order = new KafkaConsumer()
    order.getMessage(topic1)
    eventEmit.on(topic1,(data)=>{
        console.log(data);
        
        controller.getById(data).then((data:any)=>{
            sendProductById(topic2,data)
        })
    })
    
}