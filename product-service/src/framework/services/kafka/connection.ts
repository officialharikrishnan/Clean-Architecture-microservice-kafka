import { Kafka } from "kafkajs";

const kafka = new Kafka({
    clientId:'product',
    brokers:['localhost:9092']
})

export {
    kafka
}