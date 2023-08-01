const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Api = require('./Api/ApiController');
const ProdutoController = require('./Produtos/ProdutoController');
const connection = require('./database/database');
const UsersController = require('./Users/UsersController');
const salvarApiBamco = require('./Produtos/SalvarApiBanco');
const session = require('express-session');

app.set('view engine', 'ejs');
app.use(session({
    secret: "123",
    cookie: {maxAge: 6000000},
}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));
app.use("/",Api.router);
app.use("/",ProdutoController);
app.use("/",UsersController);
connection
    .authenticate()
    .then(() => {
        console.log("conennection made");
    }).catch((Error) => {
        console.log(Error);
    })

app.get('/planos', (req, res) => {
    res.render("planos");
});

app.get('/', (req, res) => {
    res.render("home");
});

  app.listen(3000, () => {
    console.log("server running");
});