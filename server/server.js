const express = require("express");
const path = require("path");
const app = express();
const cors= require("cors");
const port = process.env.PORT || 8080;
const objectProduct = require("./products");
const users = require("./usuarios");

app.use(cors());
app.use(express.json());
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
app.patch('/products/:id/stock', function(req, res) {
    const productId = req.params.id;
    const { quantityChange } = req.body;
    const product = objectProduct.products.find(e => e.id == productId);
    if (product) {
        product.stock += quantityChange;
        res.json(product);
    } else {
        res.status(404).json({ error: 'Producto no encontrado' });
    }
});

app.post('/register', function(req, res) {
    const { name, email, password } = req.body;
    const userExists = users.usuarios.find(user => user.email === email);
    if (userExists) {
        return res.status(400).json({ error: 'Usuario ya registrado' });
    }
    const newUser = {
        id: users.usuarios.length + 1,
        name,
        email,
        password
    };
    users.usuarios.push(newUser);
    res.status(201).json(newUser);
});

app.post('/login', function(req, res) {
    const { email, password } = req.body;
    const user = users.usuarios.find(user => user.email === email && user.password === password);
    if (!user) {
        return res.status(401).json({ error: 'Credenciales inválidas' });
    }
    res.json(user);
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
        res.status(404).json({ error: 'usuario no encontrado' });
    }
});


app.listen(port, () => {
    console.log(`Se esta ejecutando en el puerto:${port}`);
    
});
