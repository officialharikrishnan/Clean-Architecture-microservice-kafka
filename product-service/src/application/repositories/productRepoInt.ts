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
    const getAllProduct = async () =>{
        return await repository.getAllProduct()
        .then((products)=>{
            return products
        })
        .catch((err)=>{
            return err
        })
    }
    const getById =  async (id:string) => {
        return await repository.getById(id)
        .then((item)=>{
            return item
        })
        .catch((err)=>{
            return err
        })
    }
    return {
        addProduct,
        getAllProduct,
        getById
    }
}
export type ProductRepoInt = typeof productRepoInt