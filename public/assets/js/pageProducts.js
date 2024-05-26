import { getProducts } from './api.js';
console.log("hola todo funcionando?");

const startIndex = 0;
const itemPage = 5;
let nextindex = itemPage;
const location = document.getElementById("loadProducts");

const showProducts = async(startIndex, itemPage, products) => {
    for(let i = startIndex; i < startIndex + itemPage; i++){
        if(i >+ products.length()){
            return
        }
        const product = products[i];
    }
}


getProducts()
    .then((products) => {
        console.log(products);
    })
    .catch((error)=> {
        console.log(`Èl error es: ${error}`);
    })