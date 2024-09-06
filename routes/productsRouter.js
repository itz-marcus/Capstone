import express from 'express'
import {fetchProductsInfo, fetchProductById, insertProduct, deleteProduct, updateProduct,addToCart} from '../controller/productsController.js'
import {verifyAToken} from "../middleware/authenticate.js"
import { config } from 'dotenv'
config()
const productRouter = express.Router()

productRouter.get('',fetchProductsInfo)

productRouter.get('/cart',verifyAToken,addToCart)

productRouter.get('/:id',fetchProductById)

productRouter.post('/insert', insertProduct)

productRouter.delete('/:id', deleteProduct)

productRouter.patch('/:id', updateProduct)

export {productRouter}