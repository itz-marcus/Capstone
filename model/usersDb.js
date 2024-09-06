import {pool} from '../config/config.js'

const getUserDb = async()=>{
    let [data] = await pool.query('SELECT * FROM users')
    return data
}

const getUserByEmailDb = async(email)=>{
    let [[data]] = await pool.query('SELECT * FROM users WHERE userEmail = ?',[email] )
    return data
}

const getUserByIdDb = async(id)=>{
    let [[data]] = await pool.query('SELECT * FROM users WHERE userID = ?',[id] )
    return data
}

const insertUserDb = async(firstname,lastname,age,email,password)=>{
    let [data] = await pool.query(`
        INSERT INTO users (firstname,lastname,userAge,userEmail,userPassword)
        VALUES (?,?,?,?,?)`,
        [firstname,lastname,age,email,password] 
    )
}

const deleteUserDb = async(id)=>{
    await pool.query(`
    DELETE FROM users WHERE userID = ?`,
    [id])
}

const updateUserInfoDb = async(firstname,lastname,age,email,password,id)=>{
    await pool.query(`
        UPDATE users SET firstname = ?,lastname =?,userAge = ?,userEmail = ?, userPassword = ? WHERE userID = ?`,[firstname,lastname,age,email,password,id])
}

export {getUserDb, getUserByEmailDb, getUserByIdDb, insertUserDb, deleteUserDb, updateUserInfoDb}