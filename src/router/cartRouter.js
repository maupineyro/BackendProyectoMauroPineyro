import {Router} from "express";
import CartManager from "../managers/CartManager.js";


const cartManager = new CartManager;
const cartRouter = Router();

cartRouter.post ("/", async (req, res)=>{//para agregar un carrito y mantener los anteriores
res.send (await cartManager.addCarts())
})

cartRouter.get ("/", async (req, res) =>{// este para ver todos los carritos que tengo hasta el momento
res.send (await cartManager.getCarts())
})

export default cartRouter