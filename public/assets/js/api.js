export const getProducts = async() => {
    try{

        const response = await fetch("http://localhost:8080/products");

        const data = await response.json();

        return data.objectProduct.products;
    }catch(error){
        console.log(`El error es: ${error}`);
    }

}

export const getProductsDetail = async( id ) => {
    try{

        const response = await fetch(`http://localhost:8080/products/${id}`);
        const data = await response.json();

        return data;
    }catch(error){
        console.log(`El error es: ${error}`);
    }

}
