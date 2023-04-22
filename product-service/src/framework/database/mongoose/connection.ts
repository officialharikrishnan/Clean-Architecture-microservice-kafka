import mongoose, { Connection } from "mongoose";
import * as dotenv from 'dotenv'
dotenv.config()
const DbName:string='Clean_Product'
export const DbConnection =async () => {
    await mongoose.connect(`mongodb+srv://Harikrishnan:${process.env.Mongo_Pass}@cluster0.eafyto8.mongodb.net/?retryWrites=true&w=majority`) // mongoose connection
    console.log("Database Connected");
    
}
export const db:Connection = mongoose.connection