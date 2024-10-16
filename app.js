const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));


app.get('/', (req, res) => {
    res.render('index')
});

app.get('/ct-produto', (req, res) => {
    res.render('ct-produto')
});

app.get('/sapato', (req, res) => {
    res.render('sapato')
});

app.get('/Naoencontrado', (req, res) => {
    res.render('Naoencontrado')
});

app.get('/pag-produto', (req, res) => {
    res.render('pag-produto')
});

app.get('/vazio', (req, res) => {
    res.render('vazio')
});

app.get('/carrinho', (req, res) => {
    res.render('carrinho')
});

app.get('/pagamento', (req, res) => {
    res.render('pagamento')
});

app.get('/sucesso', (req, res) => {
    res.render('sucesso')
});

app.get('/login', (req, res) => {
    res.render('login')
});

app.get('/cadastro', (req, res) => {
    res.render('cadastro')
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});