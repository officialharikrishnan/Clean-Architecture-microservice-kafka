import { KafkaConsumer } from "./methods";

export const consumeMessage = () => {
    const order = new KafkaConsumer()
    order.getMessage('getProduct')
}