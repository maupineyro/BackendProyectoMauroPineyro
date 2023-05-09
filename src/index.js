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
res.send (await productManager.writeProducts(newProduct))
console.log (newProduct)
})

//GET (para mostrar los productos guardados)
app.get ("/products", async (req,res) =>{
res.send (await productManager.getProducts())
})

//PUT

//DELETE



//listen debe ir al final
app.listen (PORT, ()=>{
    console.log (`Express Server running on ${PORT}`);
 })