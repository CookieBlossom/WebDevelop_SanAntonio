import { getProducts } from './api.js';
import { showUnique } from './funciones.js';

let loadedProducts = [];
let startIndex = 0;
let allProductsRendered = false;
let filters = { brand: ["Nike"]};

(function () {
    'use strict'
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    tooltipTriggerList.forEach(function (tooltipTriggerEl) {
      new bootstrap.Tooltip(tooltipTriggerEl)
    })
  })()



const itemPage = 5;
const locationProducts = document.getElementById("loadProducts");
const locationSale = document.getElementById("productsSection");
const locationFilter = document.getElementById("productsFilter");
const loadMoreButton = document.getElementById("loadMoreBtn");

const saleSection = (products) => {
    const stockProducts = products.length;
    const stockP = document.createElement("h3");
    stockP.textContent = `${stockProducts} ARTICULOS`;

    const saleText = document.createElement("h3");
    saleText.textContent = "SALE";

    locationSale.appendChild(saleText);
    locationSale.appendChild(stockP);
};

const createDropDown = (results = [], name) => {
    const div = document.createElement("div");
    div.classList.add("dropdown");
    const button = document.createElement("button");
    button.classList.add("btn");
    button.classList.add("btn-secondary");
    button.classList.add("btn-dark")
    button.classList.add("dropdown-toggle");
    button.id = `dropdown${name}`;
    button.type = 'button';
    button.setAttribute("data-bs-toggle", "dropdown");
    button.setAttribute("aria-expanded", "false");
    button.innerText = name;

    const ul = document.createElement("ul");
    ul.classList.add("dropdown-menu");
    ul.setAttribute("aria-labelledby", `dropdown${name}`);

    results.forEach(option => {
        const li = document.createElement("li");
        li.classList.add("dropdown-item");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.value = option;
        const label = document.createElement("label");
        label.appendChild(checkbox);
        label.appendChild(document.createTextNode(option));
        li.appendChild(label);
        ul.appendChild(li);
    });

    div.appendChild(button);
    div.appendChild(ul);
    locationFilter.appendChild(div);
};

const getCheckedFilters = () => {
    const checkedFilters = {};
    document.querySelectorAll('.dropdown-menu').forEach(dropdown => {
        const filterName = dropdown.previousSibling.innerText.trim().toLowerCase();
        const checkboxes = dropdown.querySelectorAll('input[type="checkbox"]:checked');
        if (checkboxes.length > 0) {
            checkedFilters[filterName] = Array.from(checkboxes).map(checkbox => checkbox.value);
        }
    });
    return checkedFilters;
};

document.getElementById('applyFiltersButton').addEventListener('click', () => {
    console.log("Botón 'Aplicar filtros' clickeado");
    const appliedFilters = getCheckedFilters();
    console.log(appliedFilters);
    loadMoreButton.style.display = "none";
    locationProducts.innerHTML = '';

    if (Object.keys(appliedFilters).length === 0) {
        alert("No se aplico ningun filtro");
        location.reload(); // Recargar la página        
    } else {
        showFilteredProducts(loadedProducts, appliedFilters);
    }
});

// PRODUCTOS CON FILTRO
const showFilteredProducts = (results = [], filters = {}) => {
    let productFound = false;
    for (let i = 0; i < results.length; i++) {
        const product = results[i];
        const id = product.id;
        const name = product.name.toUpperCase();
        const stock = product.stock;
        const price = product.price;

        let passesFilters = true;
        Object.entries(filters).forEach(([filterKey, filterValues]) => {
            if (!filterValues.includes(product[filterKey])) {
                passesFilters = false;
            }
        });

        if (passesFilters) {
            productFound = true;
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
    }
    if (!productFound) {
        alert("No hay productos disponibles con los filtros seleccionados.");
        location.reload();
    }
};



// PRODUCTOS CON FILTRO
//PRODUCTOS SIN FILTRO
const showProducts = (results = [], startIndex) => {
    const endIndex = startIndex + itemPage;
    for (let i = startIndex; i < endIndex && i < results.length; i++) {
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

    return endIndex; // Devolver el nuevo índice para que pueda ser rastreado en la siguiente llamada
};

const filterSection = ( products ) => {
    const genreFilter = showUnique( products, "genre");
    const brandFilter = showUnique( products, "brand");
    const sizeFilter = showUnique( products, "sizes");
    const category = showUnique( products, "category");
    createDropDown((genreFilter), "genre");
    createDropDown((brandFilter), "brand");
    createDropDown((sizeFilter), "size");
    createDropDown((category), "category");
};

const loadMoreProducts = () => {
    startIndex += itemPage;
    showProducts(loadedProducts, startIndex);
    if (startIndex >= loadedProducts.length) {
        allProductsRendered = true;
        loadMoreButton.style.display = "none";
    }
};

loadMoreButton.addEventListener("click", loadMoreProducts);

getProducts()
    .then((products) => {
        loadedProducts = products;
        showProducts(products, startIndex);
        saleSection(products);
        filterSection(products);
    })
    .catch((error) => {
        console.log(`El error es: ${error}`);
    });

