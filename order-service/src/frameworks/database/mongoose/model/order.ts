import { Schema,model } from "mongoose";

const orderSchema = new Schema({
    product:Array
},{versionKey:false})
const Order = model('order',orderSchema)
export {
    Order
}