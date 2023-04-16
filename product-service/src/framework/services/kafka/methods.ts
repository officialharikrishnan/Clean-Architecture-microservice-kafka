import { kafka } from "./connection";
import Emitter from 'events'
const eventEmit = new Emitter()
const producer=kafka.producer()

const sendMessage  =async (topic:string,message:any) => {
    await producer.connect()
    await producer.send({
        topic,
        messages:[{
            value:JSON.stringify(message)
        }]
    })
    console.log("payment published....",message);
    await producer.disconnect()
}
class KafkaConsumer{
    consumer;
    constructor(){
        this.consumer=kafka.consumer({groupId:'product'})
        this.consumer.connect()
    }
    async getMessage(topic:string){
       await this.consumer.subscribe({topic})
       await this.consumer.run({
            eachMessage:async ({message})=>{
                if(message.value !== null){
                    try{
                        const data = JSON.parse(message.value.toString())
                        eventEmit.emit(topic,data)
                    }
                    catch(err){
                        console.log(err);
                        
                    }
                }
            }
        })
    }
}
export {
    sendMessage,
    KafkaConsumer,
    eventEmit
}