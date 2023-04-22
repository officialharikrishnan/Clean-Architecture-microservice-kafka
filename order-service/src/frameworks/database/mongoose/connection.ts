import mongoose, {model,Schema} from 'mongoose'
import * as dotenv from 'dotenv'
dotenv.config()
const DbName:string='Clean_orders'
export const DbConnection =async () => {
    await mongoose.connect(`mongodb+srv://Harikrishnan:${process.env.Mongo_Pass}@cluster0.eafyto8.mongodb.net/?retryWrites=true&w=majority`)
    console.log("database connected");
    
}