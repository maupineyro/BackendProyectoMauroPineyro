import {promises as fs} from 'fs';

class ProductManager {
    constructor (){
        this.path = "./src/saveData/products.json"
    }
    //métodos 

    readProducts = async ()=>{
        let readingProducts = await fs.readFile (this.path, "utf-8");
        return JSON.parse (readingProducts);
    }

    writeProducts = async (product) =>{
        let productsAccumulator = await this.readProducts();
        let totalProducts = [...productsAccumulator, product];
        await fs.writeFile (this.path, JSON.stringify(totalProducts));
        return "Producto Agregado correctamente"
    }   

    getProducts = async ()=>{
        let readingProducts = await fs.readFile (this.path, "utf-8");
        return JSON.parse (readingProducts);
    }

} //cierra la class ProductManager

export default ProductManager