let API_BASE_URL = "http://localhost:8080"; // URL de la API para entorno de desarrollo local

if (window.location.hostname === "webdevelop-sanantonio-cbux.onrender.com") {
    // URL de la API para entorno de producción (Render)
    API_BASE_URL = "https://webdevelop-sanantonio-cbux.onrender.com/";
}

export const getProducts = async() => {
    try{

        const response = await fetch(`${API_BASE_URL}/products`);
        const data = await response.json();

        return data.objectProduct.products;
    }catch(error){
        console.log(`El error es: ${error}`);
    }

}

export const getProductsDetail = async( id ) => {
    try{

        const response = await fetch(`${API_BASE_URL}/products/${id}`);
        const data = await response.json();

        return data;
    }catch(error){
        console.log(`El error es: ${error}`);
    }

}
