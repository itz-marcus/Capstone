import express from 'express'
import { fetchUser, fetchUserByEmail,fetchUserById, insertUser, deleteUser, updateUserInfo, loginUser } from '../controller/usersController.js'
import { checkUser } from '../middleware/authenticate.js'
const userRouter = express.Router()

userRouter.post('/login',checkUser,loginUser)

userRouter.get('',fetchUser)

userRouter.get('/name/:email',fetchUserByEmail)

userRouter.get('/:id',fetchUserById)

userRouter.post('/insert', insertUser)

userRouter.delete('/:id', deleteUser)

userRouter.patch('/:id', updateUserInfo)

export {userRouter}