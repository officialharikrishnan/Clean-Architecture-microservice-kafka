import mongoose, {model,Schema} from 'mongoose'
const DbName:string='Clean_orders'
export const DbConnection =async () => {
    await mongoose.connect(`mongodb://localhost:27017/${DbName}`)
    console.log("database connected");
    
}