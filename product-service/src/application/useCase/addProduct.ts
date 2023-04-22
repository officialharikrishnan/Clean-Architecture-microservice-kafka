import { ProductRepoInt } from "../repositories/productRepoInt";


export const addProductUse =async (name:string,price:number,repository:ReturnType <ProductRepoInt>) => {
    return repository.addProduct(name,price) // invoking addproduct written in interface layer(application/repo)
    .then((res)=>{
        console.log("use",res);
        return res
    })
    .catch((err)=>{
        console.log("use",err);
        return err
        
    })
}
