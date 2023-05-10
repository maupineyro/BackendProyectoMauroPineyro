import {Router} from "express";
import ProductManager from "../managers/ProductManager.js";

const productManager = new ProductManager;
const productRouter = Router();

//POST (en post method, desde Body, para "subir" un producto desde cliente)
productRouter.post ("/", async (req,res) =>{
let newProduct = req.body;
res.send (await productManager.addProducts(newProduct))
console.log (newProduct)
})

//GET (para mostrar los productos guardados)
productRouter.get ("/", async (req,res) =>{
res.send (await productManager.getProducts())
})

//GET by ID (encontrar producto por su Id en products.json)
productRouter.get ("/:id", async (req,res) =>{
    let id = req.params.id;
    res.send (await productManager.getProductById(id))

})

//DELETE (para borrar productos de products.json)
productRouter.delete ("/:id", async (req,res) =>{
    let id= req.params.id;
    res.send (await productManager.deleteProducts(id))
})

//PUT (para modificar algun producto sin cambiar el id)
productRouter.put ("/:id", async (req,res) =>{
    let id= req.params.id;
    let updateProductPut = req.body;
    res.send (await productManager.updateProducts(id, updateProductPut))
})

export default productRouter