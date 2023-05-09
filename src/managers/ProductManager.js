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
        if (productById){
            return productById;
        } else {
            return "ID de Producto no encontrado";
        }   
    }

    deleteProducts = async (id) =>{
      let readingProductsForDelete = await this.readProducts();
      let productById = readingProductsForDelete.find (prod =>(prod.id === id));
      let filterProducts = readingProductsForDelete.filter ((products) => products.id !== id);
      if (productById){
        await this.writeProducts (filterProducts);
        return "producto eliminado"
      }  else {
        return "ID de producto no encontrado"
      }
    }

} //cierra la class ProductManager

export default ProductManager