import { Kafka } from "kafkajs";

const kafka = new Kafka({
    clientId:'product',
    brokers:['10.107.148.81:9092']
})

export {
    kafka
}