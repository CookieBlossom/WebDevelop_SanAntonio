import { getProductsDetail } from './api.js';
 
const id = 1;

//url y dato del producto en especifico
getProductsDetail(id)
    .then((products)=> {
        console.log(products);
    })
    .catch((error)=> {
        console.log(`Èl error es: ${error}`);
    })