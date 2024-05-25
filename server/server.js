const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 8080;
const products = require("./products");

app.use(express.static(path.join(__dirname, '..', 'public')));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

app.get('/products', function(req, res){ 
    res.json({
        ok: true,
        statusCode: 400,
        products 
    })
})


app.listen(port, () => {
    console.log(`Se esta ejecutando en el puerto:${port}`);
    console.log(products);
});
