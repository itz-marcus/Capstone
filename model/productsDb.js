import {pool} from '../config/config.js'

const getProductsDb = async()=>{
    let [data] = await pool.query('SELECT * FROM products')
    return data
}

const getProductByNameDb = async(prodName)=>{
    let [[data]] = await pool.query('SELECT * FROM products WHERE prodName = ?',[prodName] )
    return data
}

const insertProductDb = async(prodName,prodDesc,prodPrice,prodImage)=>{
    let [data] = await pool.query(`
        INSERT INTO products (prodName,prodDesc,prodPrice,prodImage)
        VALUES (?,?,?,?)`,
        [prodName,prodDesc,prodPrice,prodImage]
    )
}

const deleteProductDb = async(id)=>{
    await pool.query(`
    DELETE FROM products WHERE prodID = ?`,
    [id]
)
}

const updateProductDb = async(prodName,prodDesc,prodPrice,prodImage,prodID)=>{
    await pool.query(`
        UPDATE products SET prodName = ?,prodDesc =?,prodPrice = ?,prodImage = ? WHERE prodID = ?`,[prodName,prodDesc,prodPrice,prodImage,id])
}

const addToCartDb = async(id_prod,id_user)=>{
    let [data] = await pool.query('INSERT INTO cart (id_prod,id_user) VALUES (?,?)',[id_prod,id_user])

}

export {getProductsDb, getProductByNameDb, insertProductDb, deleteProductDb, updateProductDb, addToCartDb}