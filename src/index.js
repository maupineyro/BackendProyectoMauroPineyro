//en este archivo voy a manejar express
import express from 'express';
import productRouter from './router/productRouter.js';

const app = express();
const PORT = 8080;

//JSON y url extended
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//routes
app.use ("/api/products", productRouter)

//listen 
app.listen (PORT, ()=>{
    console.log (`Express Server running on ${PORT}`);
 })