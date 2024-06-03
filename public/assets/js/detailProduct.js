import { getProductsDetail, getProducts } from './api.js';
import { filterProducts , selectDropdown } from './funciones.js';

const locationInfoProduct = document.getElementById("infoProduct");
const id = parseInt(search_info());

function search_info(){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get('id');   
    return id
}

const loadInformation = ( results = [] ) => {
    const sizes = results.sizes;
    const name = results.name;
    const price = results.price;
    const brand = results.brand;
    const stock = results.stock;
    const row = document.createElement("div");
    row.classList.add("row");
    const col = document.createElement("div");
    col.classList.add("col");
    const image = document.createElement("img");
    image.src = results.image;
    image.classList.add("w-100");
    image.classList.add("h-100");
    col.appendChild(image);

    const colBody = document.createElement("div");
    colBody.classList.add("col");
    colBody.id = "productDetail";
    const title = document.createElement("h1");
    title.textContent = name;
    const pa = document.createElement("p");
    pa.textContent = brand;
    const titlePrice = document.createElement("h3");
    titlePrice.textContent = `$${price}`;

    const productInfo = document.createElement("div");
    productInfo.id = "productInfo";
    productInfo.appendChild(pa);
    productInfo.appendChild(titlePrice);

    const selecterInfo = document.createElement("div");
    selecterInfo.id = "selecterInfo";
    colBody.appendChild(title);
    colBody.appendChild(productInfo);
    colBody.appendChild(selecterInfo);

    locationInfoProduct.appendChild(col);
    locationInfoProduct.appendChild(colBody);
    addDropdowns(sizes, stock);
}

const addDropdowns = (sizes, stock) => {
    const locationSelecterInfo = document.getElementById("selecterInfo");
    selectDropdown(sizes, "size", locationSelecterInfo);
    let stockArray = [];
    for(let i = 1; i <= stock; i++){
        stockArray.push(i);
    }
    selectDropdown(stockArray, "stock", locationSelecterInfo);
}

const addToShoppingCart = () => {

}

const foundProducts = ( products ) => {
    const product = products[id - 1];
    const brand = { brand: product.brand };
    const category = { category: product.category };

    const filterBrand = filterProducts(products, brand);
    const filterCategory = filterProducts(products, category);

    const filteredBrand = filterBrand.filter(product => product.id !== id);
    const filteredCategory = filterCategory.filter(product => product.id !== id);
    const filteredProducts = products.filter(product => product.id !== id);


    if(filteredBrand.length < 4 && filteredCategory.length < 4){
        return filteredProducts;
    }
    else if(filterBrand.length < 4){
        return filteredCategory;
    }
    else{
        return filteredBrand
    }
}

const addProducts = (results = []) =>{
    const locationRecommend = document.getElementById("recommendProducts");
    for(let i = 0; i < 3; i++){
        const product = results[i];
        const id = product.id;
        const name = product.name;
        const price = product.price;
        const stock = product.stock;
        const row = document.createElement("div");
        row.classList.add("row");

        row.addEventListener("click", () => {
            window.location.href = `detalleProducto.html?id=${id}`;
        });

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


        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardPrice);

        card.appendChild(img);
        card.appendChild(cardBody);

        row.appendChild(card);
        locationRecommend.appendChild(row);
    }
}

window.addEventListener('load', search_info);



getProductsDetail(id)
    .then((product)=> {
        loadInformation(product);
    })
    .catch((error)=> {
        console.log(`Èl error es: ${error}`);
    })

getProducts()
    .then((products) => {
        const filterProducts = foundProducts(products);
        addProducts(filterProducts);
    })
    .catch((error) => {
        console.log(`El error es: ${error}`);
    })