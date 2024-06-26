import { getProducts } from './api.js';
import { showUnique } from './funciones.js';


const createCategories = (results) => {
    const location = document.getElementById("showCategories");
    const data = showUnique(results, "category");
    for( const element of data){

        const divCol = document.createElement("div");
        divCol.classList.add("row"); 

        const card = document.createElement("div");
        card.classList.add("card");

        const title = document.createElement("h5");
        title.classList.add("card-title");
        title.textContent = `${element}`;

        card.appendChild(title);
        divCol.appendChild(card);
        location.appendChild(divCol);
    }
}

const createBrands = (results) => {
    const location = document.getElementById("showBrands");
    const data = showUnique(results, "brand");
    for ( const element of data ){
        const text =  element.split(" ").join("");
        const image = text.toLowerCase();

        const divCol = document.createElement("div");
        divCol.classList.add("row"); 

        const card = document.createElement("div");
        card.classList.add("card");

        const img = document.createElement("img");
        img.classList.add("card-img-top");
        img.src = `./assets/image/brands/${image}.png`;

        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body")

        const cardTitle = document.createElement("h3");
        cardTitle.classList.add("card-title");
        cardTitle.textContent = element;
        
        card.appendChild(img);
        cardBody.appendChild(cardTitle);
        card.appendChild(cardBody);
        
        divCol.appendChild(card);
        location.appendChild(divCol);
    }
}

const createGenre = (results) => {
    const location = document.getElementById("showGenre");
    const data = showUnique(results, "genre");
    for( const element of data ){
        const row = document.createElement("div");
        row.classList.add("row");

        const img = document.createElement("img");
        img.classList.add("img-fluid");
        img.src = `./assets/image/genres/${element}.png`;

        row.appendChild(img);
        location.appendChild(row);
    }
}

getProducts()
    .then((products)=> {
        createCategories(products);
        createBrands(products);
        createGenre(products);
    })
    .catch((error)=> {
        console.log(`Èl error es: ${error}`);
    })