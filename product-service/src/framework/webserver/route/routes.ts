import { Application } from "express"
import { productController } from "../../../controller/productController"
import { productRepoInt } from "../../../application/repositories/productRepoInt"
import { productRepoImplements } from "../../database/mongoose/repositories/productRepoImplements"

const route = (app:Application) => {
const controller = productController(productRepoInt,productRepoImplements) // passing interface and implements to conroller
app.route('/addproduct')
.post(controller.addProduct) // invoking addproduct written in controller
app.route('/getallproduct').get(controller.getAllProducts)
}

export default route