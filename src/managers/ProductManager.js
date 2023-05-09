import {promises as fs} from 'fs';

class ProductManager {
    constructor (){
        this.path = "./src/saveData/products.json"
    }
    //métodos 
    writeProducts = async (product) =>{
        let readingProducts = await fs.readFile (this.path, "utf-8");
        let productsObject = JSON.parse (readingProducts);
        let totalProducts = [...productsObject, product];
        await fs.writeFile (this.path, JSON.stringify(totalProducts));
        return "Producto Agregado correctamente"
    }   
} //cierra la class ProductManager

export default ProductManager