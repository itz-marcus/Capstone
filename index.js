import express from 'express'
import cors from 'cors'
import { userRouter } from './routes/usersRouter.js'
import { productRouter } from './routes/productsRouter.js'


let port = process.env.PORT || 5004
const app = express()
app.use(express.json())
app.use(express.static('public'))
app.use(cors({
    // origin: 'https://pivot-prj.web.app',
    origin: 'https://localhost:8080',
    credentials:true
    
}))

app.use('/users',userRouter)

app.use('/products',productRouter)

app.listen(port,()=>{
    console.log(`http://localhost:${port}`)
})