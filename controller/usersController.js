import { getUserDb, getUserByEmailDb, getUserByIdDb, insertUserDb, deleteUserDb, updateUserInfoDb} from "../model/usersDb.js";
import {hash} from 'bcrypt'

const fetchUser = async(req,res)=>{
    res.json(await getUserDb()) 
}

const fetchUserByEmail = async(req,res)=>{
    res.json(await getUserByEmailDb(req.params.email))
}

const fetchUserById = async(req,res)=>{
    res.json(await getUserByIdDb(req.params.id))
}

const insertUser = async(req,res)=>{

    let {firstname,lastname,age,email,password} = req.body
    let hashedP = await hash(password, 10)
    
    if(hashedP.stack) throw (hashedP)
        await insertUserDb(firstname,lastname,age,email,hashedP)
        res.send(await getUserDb())
        console.log('Data was inserted successfully')
}

const deleteUser = async(req,res)=>{
    await deleteUserDb(req.params.id)
    res.send(await getUserDb())
    console.log('Data was delete successfully')
}

const updateUserInfo = async(req,res)=>{
    
    let {firstname,lastname,age,email,password,image} = req.body

    let User = await getUserByIdDb(req.params.id) 

    firstname ? firstname=firstname: firstname = User.firstname
    lastname ? lastname=lastname: lastname = User.lastname
    age ? age=age: age = User.userAge
    email ? email=email: email = User.userEmail
    password ? password=password: password = User.userPassword
    image ? image=image: image = User.userImage
    await updateUserInfoDb(firstname,lastname,age,email,password,image,req.params.id)
    res.send(await getUserDb())
}
const loginUser = (req,res)=>{
    res.send({
        message:"User logged in Successfully",token:req.body.token
    })
}
export{fetchUser, fetchUserByEmail, fetchUserById, insertUser, deleteUser, updateUserInfo,loginUser}