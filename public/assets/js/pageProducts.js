import { getProducts } from './api.js';
import { showUnique } from './funciones.js';

let startIndex = 0;
const itemPage = 5;
const locationProducts = document.getElementById("loadProducts");
const locationSale = document.getElementById("productsSection");
const locationFilter = document.getElementById("productsFilter");
let allProductsRendered = false;

const saleSection = (products) => {
    const stockProducts = products.length;
    const stockP = document.createElement("h3");
    stockP.textContent = `${stockProducts} ARTICULOS`;

    const saleText = document.createElement("h3");
    saleText.textContent = "SALE";

    
    locationSale.appendChild(saleText);
    locationSale.appendChild(stockP);
}

const filterSection = ( products ) => {
    const genreFilter = showUnique( products, "genre");
    const brandFilter = showUnique( products, "brand");
    const sizeFilter = showUnique( products, "sizes");
    const category = showUnique( products, "category");
    console.log(genreFilter,brandFilter, sizeFilter, category);

}


const showProducts = ( results = []) => {
    const finalIndex = results.length;
    const nextIndex = startIndex + itemPage;
    for(let i = startIndex; i < nextIndex && i < finalIndex; i++){
        const product = results[i];
        const id = product.id;
        const name = product.name.toUpperCase();
        const stock = product.stock;
        const price = product.price;

        const row = document.createElement("div");
        row.classList.add("row");

        const card = document.createElement("div");
        card.classList.add("card");

        const img = document.createElement("img");
        img.src = `./assets/image/products/product${id}.jpg`;
        img.classList.add("card-img-top");

        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body");

        const cardTitle = document.createElement("h5");
        cardTitle.classList.add("card-title");
        cardTitle.textContent = name;

        const cardPrice = document.createElement("p");
        cardPrice.classList.add("card-text");
        cardPrice.textContent = `$ ${price}`;

        const cardCategory = document.createElement("p");
        cardCategory.classList.add("card-text");
        cardCategory.textContent = `Solo quedan ${stock} unidades disponibles!!`;

        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardPrice);
        cardBody.appendChild(cardCategory);

        card.appendChild(img);
        card.appendChild(cardBody);

        row.appendChild(card);
        locationProducts.appendChild(row);        
    }
    startIndex = nextIndex;
}


function productScroll(products){
    if((window.innerHeight + window.scrollY) >= document.body.offsetHeight && !allProductsRendered){
        showProducts(products);
    }
}

getProducts()
    .then((products) => {
        function handleScroll() {
            productScroll(products);
            if (startIndex >= (products.length + 1)) {
                allProductsRendered = true;
                window.removeEventListener('scroll', handleScroll);
            }
        }

        window.addEventListener('scroll', handleScroll);
        showProducts(products);
        saleSection(products);
        filterSection(products);
    })
    .catch((error) => {
        console.log(`El error es: ${error}`);
    });