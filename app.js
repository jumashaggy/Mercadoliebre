const express = require('express');
const app = express()
const path = require('path'); 
const { send } = require('process');
app.use(express.static('public'));

app.listen(4000, () =>   
console.log("servidor Online")
)
app.get('/', (req, res) => {      // se puede usar tanto join, como resolve
    const file = path.join(__dirname,'./views/home.html')
    res.sendFile(file)
});

app.get('/ofertas', (req, res) => {      // se puede usar tanto join, como resolve
    res.send('luli es uan capa')
    
});
app.get('/tiendas-oficiales', (req, res) => {      // se puede usar tanto join, como resolve
    res.send('falta crear la pagina')
    
});
app.get('/vender', (req, res) => {      // se puede usar tanto join, como resolve
    res.send('falta crear la pagina')
    
});
app.get('/ayuda', (req, res) => {      // se puede usar tanto join, como resolve
    res.send('falta crear la pagina')
    
});
app.get('/crear-tu-cuenta', (req, res) => {      // se puede usar tanto join, como resolve
    const file = path.join(__dirname,'./views/crear-tu-cuenta.html')
    res.sendFile(file)
    
});
app.post('/registro', (req, res) => {
    res.send('Recibi el formulario')
});
app.get('/ingresa', (req, res) => {      // se puede usar tanto join, como resolve
    const file = path.join(__dirname,'./views/login.html')
    res.sendFile(file)
    
});
app.get('/mis-compras', (req, res) => {      // se puede usar tanto join, como resolve
    res.send('falta crear la pagina')
    
});

app.get('*', (req, res) =>{
    res.status(404).send('404 not found')
})