import { KafkaConsumer } from "./methods";
import { eventEmit } from "../kafka/methods";
import { orderController } from "../../../controllers/orderController";
import { orderRepoInt } from "../../../application/repositories/orderRepoInt";
import { orderImplements } from "../../database/mongoose/repositories/orderImplements";

const topic1='getProductResult'

const controller = orderController(orderRepoInt,orderImplements)


const consumeMessage = () =>{
    const orderPro = new KafkaConsumer()
    orderPro.getMessage(topic1)
    eventEmit.on(topic1,(data)=>{
        controller.placeOrder(data)
    })
}

export {
    consumeMessage
}