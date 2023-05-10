//en este archivo voy a manejar express
import express from 'express';
import ProductManager from './managers/ProductManager.js';

const productManager = new ProductManager;


const app = express();
const PORT = 8080;

//JSON y url extended
app.use(express.json());
app.use(express.urlencoded({extended:true}));



//POST (en post method, desde Body, para "subir" un producto desde cliente)
app.post ("/products", async (req,res) =>{
let newProduct = req.body;
res.send (await productManager.addProducts(newProduct))
console.log (newProduct)
})

//GET (para mostrar los productos guardados)
app.get ("/products", async (req,res) =>{
res.send (await productManager.getProducts())
})

//GET by ID (encontrar producto por su Id en products.json)
app.get ("/products/:id", async (req,res) =>{
    let id = req.params.id;
    res.send (await productManager.getProductById(id))

})

//DELETE (para borrar productos de products.json)
app.delete ("/products/:id", async (req,res) =>{
    let id= req.params.id;
    res.send (await productManager.deleteProducts(id))
})

//PUT (para modificar algun producto sin cambiar el id)
app.put ("/products/:id", async (req,res) =>{
    let id= req.params.id;
    let updateProductPut = req.body;
    res.send (await productManager.updateProducts(id, updateProductPut))
})




//listen debe ir al final
app.listen (PORT, ()=>{
    console.log (`Express Server running on ${PORT}`);
 })