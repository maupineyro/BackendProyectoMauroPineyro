import {Router} from "express";
import CartManager from "../managers/CartManager.js";


const cartManager = new CartManager;
const cartRouter = Router();


//POST
cartRouter.post ("/", async (req, res)=>{//ruta para agregar un carrito al carts.json
res.send (await cartManager.addCarts())
})

//GET
cartRouter.get ("/", async (req, res) =>{// ruta para ver todos los carritos que tengo hasta el momento
res.send (await cartManager.getCarts())
})

//GET by ID
cartRouter.get ("/:cid", async (req, res) =>{// ruta para ver un carrito según su ID
let cid = req.params.cid;
res.send (await cartManager.getCartById(cid))
})

export default cartRouter