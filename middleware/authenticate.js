import { compare } from "bcrypt"
import { getUserByIdDb } from "../model/usersDb.js";
import joke from "jsonwebtoken"
import {config} from "dotenv"


const checkUser = async (req,res,next)=>{
    const {email,password} = req.body;
    let hashedPassword = (await getUserByIdDb(email)).password
    console.log(hashedPassword);
    
    let result = await compare(password,hashedPassword)
    if(result == true){
            let token = joke.sign({email:email},process.env.SECRET_KEY,{expiresIn:'1h'})
            console.log(token);
            req.body.token = token
            next()
        } else{
            res.send("Password incorrect")
        }
}
const verifyAToken =(req,res,next)=>{
    let {cookie} = req.headers
    //checks if the token exists first
    let token = cookie && cookie.split('=')[1]
    joke.verify(token, process.env.SECRET_KEY,(err,decoded) => {
        if(err){
            res.json({message:'Token has expired'})
            return
    }
    req.body.user = decoded.email
        console.log(decoded);
        
    })
    console.log(token);
    next()
}

export {checkUser, verifyAToken}