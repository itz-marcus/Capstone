import {pool} from '../config/config.js'

const getProductsDb = async()=>{
    let [data] = await pool.query('SELECT * FROM products')
    return data
}

const getProductByIdDb = async(id)=>{
    let [[data]] = await pool.query('SELECT * FROM products WHERE prodID = ?',[id] )
    return data
}

const insertProductDb = async(prodName,prodDesc,prodPrice,prodImage,prodBrand)=>{
    let [data] = await pool.query(`
        INSERT INTO products (prodName,prodDesc,prodPrice,prodImage,prodBrand)
        VALUES (?,?,?,?,?)`,
        [prodName,prodDesc,prodPrice,prodImage,prodBrand]
    )
}

const deleteProductDb = async(id)=>{
    await pool.query(`
    DELETE FROM products WHERE prodID = ?`,
    [id]
)
}

const updateProductDb = async(prodName,prodDesc,prodPrice,prodImage,prodBrand,id)=>{
    await pool.query(`
        UPDATE products SET prodName = ?, prodDesc =?, prodPrice = ?, prodImage = ?, prodBrand = ? WHERE prodID = ?`,[prodName,prodDesc,prodPrice,prodImage,prodBrand,id])
}

const addToCartDb = async(id_prod,id_user)=>{
    let [data] = await pool.query('INSERT INTO cart (id_prod,id_user) VALUES (?,?)',[id_prod,id_user])

}

export {getProductsDb, getProductByIdDb, insertProductDb, deleteProductDb, updateProductDb, addToCartDb}