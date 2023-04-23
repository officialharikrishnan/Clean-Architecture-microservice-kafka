import { ProductRepoInt } from "../application/repositories/productRepoInt";
import { addProductUse } from "../application/useCase/addProduct";
import { getAllProductUse, getByIdUse } from "../application/useCase/getProduct";
import { ProductRepoImplements } from "../framework/database/mongoose/repositories/productRepoImplements";
import { Request,Response } from "express";

export const productController = (
    productRepoInt:ProductRepoInt,
    productImpl:ProductRepoImplements
) => {
    const repository = productRepoInt(productImpl()) // getting return functions from implements to interface functions
    const addProduct = (req:Request,res:Response) => {
        console.log("caled>>");
        
        const {name,price}:{name:string,price:number} = req.body // getting data from router
        addProductUse(name,price,repository).then((response)=>{ // passing data and inteface functions into usecase
            res.send(response)
        })
    }
    const getAllProducts = (req:Request,res:Response) =>{
        getAllProductUse(repository)
        .then((products)=>{
            res.send(products)
        })
        .catch((err)=>{
            res.send(err)
        })
    }
    const getById =async  (id:string) =>{
          return getByIdUse(id,repository).then((item)=>{
            return item
        })
    }

    return {
        addProduct,
        getAllProducts,
        getById
    }
}