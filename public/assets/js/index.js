const getProducts = async() => {
    try{

        const productos = await fetch("http://localhost:8080/products");

        const data = await productos.json();

        return data.products;
    }catch(error){
        console.log(`El error es: ${error}`);
    }

}

getProducts()
    .then((products)=> {
        console.log(products);
    })
    .catch((error)=> {
        console.log(`Èl error es: ${error}`);
    })