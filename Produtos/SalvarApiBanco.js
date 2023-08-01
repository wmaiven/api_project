const Api = require('../Api/ApiController');
const Categorie = require('./Categorie');
const Products = require('./Produto');
const slugify = require('slugify');


async function salvarCategoria (){ //salvar categorias no banco
        var data = await Api.getCategories();
        data.forEach((CategoriesApi) => {
            Categorie.create({
                id: CategoriesApi.id,
                name: CategoriesApi.name,
                slug: slugify(CategoriesApi.name)
            }).then(() => {
                console.log('salvo com sucesso ');
            })
        });
    }
    //salvarCategoria();
    async function salvarProdutos (){ //salvar produtos no banco
        var data = await Api.getProductsInAlphabeticalOrder();
        data.forEach((productApi) => {
            Products.create({
                id: productApi.id,
                category_id: productApi.category_id,
                title: productApi.title,
                slug: slugify(productApi.title),
                price: productApi.price,
                sold_quantity: productApi.sold_quantity,
                available_quantity: productApi.available_quantity,
                permalink: productApi.permalink
            }).then(() => {
                console.log('salvo com sucesso ');
            })
        });
    }
    //salvarProdutos();
    
    module.exports = {
        salvarCategoria,
        salvarProdutos
    }