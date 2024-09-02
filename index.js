import express from 'express'
import cors from 'cors'
import { userRouter } from './routes/usersRouter.js'

let port = process.env.PORT || 5004
const app = express()
app.use(express.json())
app.use(express.static('public'))
app.use(cors({
    origin: 'http://localhost:8080',
    credentials:true
    
}))

app.use('/users',userRouter)

app.listen(port,()=>{
    console.log(`http://localhost:${port}`)
})