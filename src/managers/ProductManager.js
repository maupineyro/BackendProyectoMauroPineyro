import {promises as fs} from 'fs';
import { customAlphabet } from 'nanoid'; // genera ids como uuid4
const nanoid = customAlphabet ('1234567890abcdef', 10);

class ProductManager {
    constructor (){
        this.path = "./src/saveData/products.json"
    }
    //métodos 

    readProducts = async ()=>{ //lee el products.json y lo convierte en object
        let readingProducts = await fs.readFile (this.path, "utf-8");
        let readingProductsParsed = await JSON.parse (readingProducts, null, 2);
        return readingProductsParsed;
    }

    writeProducts = async (product)=>{
        await fs.writeFile (this.path, JSON.stringify(product))
    }

    addProducts = async (product) =>{//agrega al products.json
        let productsAccumulator = await this.readProducts();
        product.id =nanoid(8);
        let totalProducts = [...productsAccumulator, product];
        await this.writeProducts (totalProducts);
        return "Producto Agregado correctamente"
    }   

    getProducts = async ()=>{//devuelve los productos del products.json
        return await this.readProducts();
    }

    getProductById = async (id) =>{
        let readingProducts = await this.readProducts();
        let productById = readingProducts.find (prod =>(prod.id === id));
        return productById;

    }

} //cierra la class ProductManager

export default ProductManager