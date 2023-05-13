import {promises as fs} from 'fs';
import { customAlphabet } from 'nanoid'; // genera ids como uuid4
const nanoid = customAlphabet ('1234567890abcdef', 10);

class CartManager {
    constructor (){
        this.path = "./src/saveData/carts.json"
    }

    //métodos auxiliares para leer y escribir carritos. También el de encontrar ID
    readCarts = async() =>{
        let readingCarts = await fs.readFile (this.path, "utf-8");
        let readingCartsParsed = await JSON.parse (readingCarts, null, 2)
        return readingCartsParsed;
    }

    writeCarts = async (cart)=> {
        await fs.writeFile(this.path, JSON.stringify(cart));
    }

    findCartById = async (cid) =>{
        let readingCarts = await this.readCarts();
        let cartById = await readingCarts.find (cart => cart.cid = cid);
        return cartById;
    }



    //métodos del carrito
    addCarts = async () =>{
        let id = nanoid(5);
        let cartsAccumulator = await this.readCarts();
        let totalCarts = [{cid: id, products:[]}, ...cartsAccumulator];
        await this.writeCarts(totalCarts);
        return "Carrito agregado"
    }

    getCarts = async () =>{
        return await this.readCarts();
    }

    getCartById = async (cid) =>{
        let CartById = await this.findCartById(cid);
        if (!CartById) return "Carrito no encontrado"
        return CartById
    }
} // cierra la class CartManager


export default CartManager