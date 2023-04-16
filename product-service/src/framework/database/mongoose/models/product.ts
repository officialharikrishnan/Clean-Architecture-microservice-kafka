import { model,Schema } from "mongoose";

const productSchema= new Schema({
    name:String,
    price:Number
},{versionKey:false})

const Product = model('products',productSchema)

export {
    Product
}