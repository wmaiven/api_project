const express = require('express');
const Categorie = require('./Categorie');
const Products = require('./Produto');
const router = express.Router();
const { Op } = require('sequelize');
const adminAuth = require('../middleares/adminAuth')

//const adminAuth = require('../middleware/adminAuth');

router.get("/admin/categorie", adminAuth, (req, res) => {
    Categorie.findAll().then(categories => {
        res.render("categorie", {
            categories: categories
        });
    });
});

router.get("/admin/products/:id", adminAuth, (req, res) => {
    var id = req.params.id;
    console.log(id);
    Products.findAll({
        where: {
        category_id:id
      }
    }).then(products => {
        res.render("CategorieProduct", {
            products: products  
        });
    });
    });

    router.get("/admin/products/:title", adminAuth, (req, res) => {
        var title = req.params.title;
        console.log(title);
        Products.findAll({
            where: {
            slug: {[Op.like]: `%${title}%`}
          }
        }).then(products => {
            res.render("Searchproducts",{
                products: products
            });
        });    
    });

router.post("/search/product", (req, res) => {
    var title = req.body.id;
    res.redirect("/admin/products/"+title);
})

router.get("/admin/products", adminAuth, (req, res) => {
    Products.findAll().then(products => {
        res.render("products", {
            products: products  
        });
    });
});



module.exports = router;