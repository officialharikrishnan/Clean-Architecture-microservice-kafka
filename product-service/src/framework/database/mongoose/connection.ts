import mongoose, { Connection } from "mongoose";
const DbName:string='Clean_Product'
export const DbConnection =async () => {
    await mongoose.connect(`mongodb://localhost:27017/${DbName}`) // mongoose connection
    console.log("Database Connected");
    
}
export const db:Connection = mongoose.connection