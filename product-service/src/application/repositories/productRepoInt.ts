import { ProductRepoImplements } from "../../framework/database/mongoose/repositories/productRepoImplements";

export const productRepoInt = (repository:ReturnType<ProductRepoImplements>) => {
     const addProduct =async (name:string,price:number) => {
        return await repository.addProduct(name,price) //invoking addproduct which written in implements
        .then((res)=>{
            console.log(res);
            return res
        })
        .catch((err)=>{
            console.log(err);
            return err
        })
    }
    return {
        addProduct
    }
}
export type ProductRepoInt = typeof productRepoInt