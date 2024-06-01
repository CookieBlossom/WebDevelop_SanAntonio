const express = require("express");
const path = require("path");
const app = express();
const cors= require("cors");
const dotenv = require('dotenv');

const port = process.env.PORT || 8080;
const objectProduct = require("./products");
const users = require("./usuarios");

dotenv.config();

app.use(cors());
app.use(express.static(path.join(__dirname, '..', 'public')));


app.get('/', (req, res) => {
     res.sendFile(path.join(__dirname, '..', 'public', 'paginaPrincipal.html'));
});


app.get('/products', function(req, res){ 
    res.json({
        ok: true,
        statusCode: 400,
        objectProduct 
    })
})|

app.get('/products/:id', function(req, res) {
    const productId = req.params.id;
    const element = objectProduct.products.find( e => e.id == productId);
    if(element){
        res.json(element);
    }
    else {
        res.status(404).json({ error: 'Producto no encontrado' });
    }

});

app.get('/usuarios', function(req, res){
    res.json({
        users
    })
})

app.get('/usuarios/:id', function(req, res) {
    const userId = req.params.id;
    const element = users.usuarios.find( e => e.id == userId);
    if(element){
        res.json(element);
    }
    else {
        res.status(404).json({ error: 'Producto no encontrado' });
    }
});


app.listen(port, () => {
    console.log(`Se esta ejecutando en el puerto:${port}`);
    
});
