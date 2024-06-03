import { getProducts } from './api.js';
import { showUnique, createDropDown, selectDropdown, filterProducts } from './funciones.js';

let loadedProducts = [];
let startIndex = 0;
let allProductsRendered = false;
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

const getCheckedFilters = () => {
    const checkedFilters = {};
    document.querySelectorAll('.dropdown-menu').forEach(dropdown => {
        const filterName = dropdown.previousSibling.innerText.trim().toLowerCase();
        const checkboxes = dropdown.querySelectorAll('input[type="checkbox"]:checked');
        if (checkboxes.length > 0) {
            checkedFilters[filterName] = Array.from(checkboxes).map(checkbox => {
                return isNaN(checkbox.value) ? checkbox.value : parseInt(checkbox.value);
            });
        }
    });

    document.querySelectorAll('#selecterId select').forEach(select => {
        const filterName = select.getAttribute("data-filter"); // Cambio aquí
        const selectedOption = select.options[select.selectedIndex];
        if (selectedOption && selectedOption.value !== "all") {
            checkedFilters[filterName] = isNaN(selectedOption.value) ? selectedOption.value : parseInt(selectedOption.value);
        }
    });
    return checkedFilters;
};

document.getElementById('applyFiltersButton').addEventListener('click', () => {
    const appliedFilters = getCheckedFilters();
    loadMoreButton.style.display = "none";
    locationProducts.innerHTML = '';

    if (Object.keys(appliedFilters).length === 0) {
        alert("No se aplicó ningún filtro");
        location.reload();
    } else {
        console.log(appliedFilters);
        const filteredProducts = filterProducts(loadedProducts, appliedFilters);
        console.log(filteredProducts);
        showFilteredProducts(filteredProducts);
    }
});



const showFilteredProducts = (results = []) => {
    const products = results;
    if (products.length > 0) {
        products.forEach(product => {
            const id = product.id;
            const name = product.name.toUpperCase();
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
        });
    } else {
        alert("No hay productos disponibles con los filtros seleccionados.");
        location.reload();
    }
};

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

    return endIndex;
};

const filterSection = ( products ) => {
    const genreFilter = showUnique( products, "genre");
    const brandFilter = showUnique( products, "brand");
    const sizeFilter = showUnique( products, "sizes");
    const category = showUnique( products, "category");
    createDropDown((genreFilter), "genre", locationFilter);
    selectDropdown((brandFilter), "brand", locationFilter);
    createDropDown((sizeFilter), "sizes", locationFilter);
    createDropDown((category), "category", locationFilter);
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