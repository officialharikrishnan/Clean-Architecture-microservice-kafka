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
    const getAllProduct = () =>{
      return new Promise((resolve,reject)=>{
         Product.find().then((products)=>{
            resolve(products)
         })
         .catch((err)=>{
            reject(err)
         })
      })
    }
    const getById = (id:string) => {
      return new Promise((resolve,reject)=>{
         Product.findById(id).then((item)=>{
            resolve(item)
         }).catch((err)=>{
            reject(err)
         })
      })
    }
    return {
        addProduct,
        getAllProduct,
        getById
    }
}
export type ProductRepoImplements = typeof productRepoImplements

