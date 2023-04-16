import { ProductRepoInt } from "../application/repositories/productRepoInt";
import { addProductUse } from "../application/useCase/addProduct";
import { ProductRepoImplements } from "../framework/database/mongoose/repositories/productRepoImplements";
import { Request,Response } from "express";

export const productController = (
    productRepoInt:ProductRepoInt,
    productImpl:ProductRepoImplements
) => {
    const repository = productRepoInt(productImpl()) // getting return functions from implements to interface functions
    const addProduct = (req:Request,res:Response) => {
        const {name,price}:{name:string,price:number} = req.body // getting data from router
        addProductUse(name,price,repository).then((response)=>{ // passing data and inteface functions into usecase
            res.send(response)
        })
    }

    return {
        addProduct
    }
}