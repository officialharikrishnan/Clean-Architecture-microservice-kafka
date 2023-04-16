import { Product } from "../models/product";

export const productRepoImplements = () => {

    const addProduct = (name:string,price:number)=>{
       return new Promise((resolve,reject)=>{
         Product.create({name,price}).then((res)=>{ // inserting product into db
            resolve(res)
         })
         .catch((err)=>{
            reject(err)
         })
       })
    }
    return {
        addProduct
    }
}
export type ProductRepoImplements = typeof productRepoImplements
