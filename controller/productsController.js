import { getProductsDb, getProductByIdDb, insertProductDb, deleteProductDb, updateProductDb, addToCartDb} from "../model/productsDb.js";
import { getUserByIdDb } from "../model/usersDb.js";


const fetchProductsInfo = async(req,res)=>{
    res.json(await getProductsDb()) 
}

const fetchProductById = async(req,res)=>{
    res.json(await getProductByIdDb(req.params.id)) 
}

const insertProduct = async(req,res)=>{
    let {prodName,prodDesc,prodPrice,prodImage} = req.body
        await insertProductDb(prodName,prodDesc,prodPrice,prodImage)
        res.send(await getProductsDb())
        console.log('Data was inserted successfully')
}

const deleteProduct = async(req,res)=>{
    await deleteProductDb(req.params.id)
    res.send(await getProductsDb())
    console.log('Data was delete successfully')
}

const updateProduct = async(req,res)=>{
    
    let {prodName,prodDesc,prodPrice,prodImage} = req.body

    let Product = await getProductByIdDb(req.params.id) 
    
    prodName ? prodName=prodName: prodName = Product.prodName
    prodDesc ? prodDesc=prodDesc: prodDesc = Product.prodDesc
    prodPrice ? prodPrice=prodPrice: prodPrice = Product.prodPrice
    prodImage ? prodImage=prodImage: prodImage = Product.prodImage
    await updateProductDb(prodName,prodDesc,prodPrice,prodImage,req.params.id)
    res.send(await getProductsDb())
}

const addToCart = async(req,res)=>{
    console.log(req.body)
    let {id}= await getUserByIdDb(req.body.user)
   
    await addToCartDb(req.body.id,id)
    res.json({message:"you've added a fruit successfully to your cart"})
}
export{fetchProductsInfo, fetchProductById, insertProduct, deleteProduct, updateProduct, addToCart}