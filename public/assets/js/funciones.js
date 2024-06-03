export const showUnique = (results = [], property) => {
    const categoryUnique = new Set();
    results.forEach(result => {
        if (Array.isArray(result[property])) {
            result[property].forEach(value => categoryUnique.add(value));
        } else {
            categoryUnique.add(result[property]);
        }
    });
    return Array.from(categoryUnique);
}

export const createDropDown = (results = [], icono, location) => {
    const div = document.createElement("div");
    div.classList.add("dropdown");
    const button = document.createElement("button");
    button.classList.add("btn");
    button.classList.add("btn-secondary");
    button.classList.add("btn-light");
    button.classList.add("dropdown-toggle");
    button.id = `dropdown${icono}`;
    button.type = 'button';
    button.setAttribute("data-bs-toggle", "dropdown");
    button.setAttribute("aria-expanded", "false");

    const textSpan = document.createElement("span");
    textSpan.classList.add("btn-text");
    textSpan.textContent = icono;

    const iconSpan = document.createElement("span");
    iconSpan.classList.add("btn-icon");

    const iconImage = document.createElement("img");
    iconImage.src = `./assets/image/${icono}.png`;
    iconImage.alt = "";
    iconSpan.appendChild(iconImage);

    // Agregar ambos spans al botón
    button.appendChild(textSpan);
    button.appendChild(iconSpan);

    const ul = document.createElement("ul");
    ul.classList.add("dropdown-menu");
    ul.setAttribute("aria-labelledby", `dropdown${icono}`);

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
    location.appendChild(div);
};
export const selectDropdown = (results = [], name, location) => {
    const div = document.createElement("div");
    div.id = "selecterId";
    
    const select = document.createElement("select");
    select.classList.add("form-select");
    select.classList.add("form-select-sm");
    select.name = name;
    select.setAttribute("data-filter", name);
    const defaultOption = document.createElement("option");
    defaultOption.disabled = true;
    defaultOption.selected = true;
    defaultOption.value = "brand";
    defaultOption.textContent =  name;
    select.appendChild(defaultOption);

    results.forEach(option => {
        const optionElement = document.createElement("option");
        optionElement.value = option;
        optionElement.textContent = option;
        select.appendChild(optionElement);
    });
    div.appendChild(select);
    location.appendChild(div);
};

export const filterProducts = (products = [], filters) => {
    const filteredProducts = [];

    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        let passesFilters = true;
        for (const key in filters) {
            if (filters.hasOwnProperty(key)) {
                const filterValue = filters[key];
                if (Array.isArray(filterValue) && (key === 'sizes' || key === 'category' || key === 'genre')) {
                    if (!filterValue.some(value => product[key].includes(value))) {
                        passesFilters = false;
                        break;
                    }
                } else {
                    if (product[key] !== filterValue) {
                        passesFilters = false;
                        break;
                    }
                }
            }
        }
        if (passesFilters) {
            filteredProducts.push(product);
        }
    }
    return filteredProducts;
};