import { ProductRepoInt } from "../repositories/productRepoInt";


export const getAllProductUse = async (repository:ReturnType<ProductRepoInt>) => {
    return repository.getAllProduct()
    .then((products)=>{
        return products
    })
    .catch((err)=>{
        return err
    })
}

export const getByIdUse = async (id:string,repository:ReturnType <ProductRepoInt>)=>{
    return repository.getById(id)
    .then((item)=>{
        return item
    })
    .catch((err)=>{
        return err
    })
}