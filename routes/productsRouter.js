import express from 'express'
import {fetchProductsInfo, fetchProductByName, insertProduct, deleteProduct, updateProduct,addToCart} from '../controller/productsController.js'
import {verifyAToken} from "../middleware/authenticate.js"
import { config } from 'dotenv'
config()
const productRouter = express.Router()

productRouter.get('',fetchProductsInfo)

productRouter.get('/cart',verifyAToken,addToCart)

productRouter.get('/:id',fetchProductByName)

productRouter.post('/insert', insertProduct)

productRouter.delete('/:id', deleteProduct)

productRouter.patch('/:id', updateProduct)

export {productRouter}