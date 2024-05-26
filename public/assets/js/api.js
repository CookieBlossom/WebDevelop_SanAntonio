export const getProducts = async() => {
    try{

        const response = await fetch("http://localhost:8080/products");

        const data = await response.json();

        return data.products.products;
    }catch(error){
        console.log(`El error es: ${error}`);
    }

}
