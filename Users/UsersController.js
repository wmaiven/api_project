const express = require('express');
const router = express.Router();
const User = require('./Users');
const bcrypt = require('bcryptjs');
const { Op } = require('sequelize');


router.get('/login', (req, res) => {
    res.render("login");
});
router.get('/cadastro', (req, res) => {
    res.render("cadastro");
});
router.post('/user/cadastro', (req, res) => {
    var email = req.body.email;
    var senha = req.body.senha;
    User.findOne({where:{
        email:email
    }}).then((user)=> {
        if(user === undefined || user === null){
            var salt = bcrypt.genSaltSync(10);
            var hash = bcrypt.hashSync(senha,salt);
            User.create ({
                email: email,
                senha: hash,
            }).then(() => {
                res.redirect("/login");
            });
        }else{
            res.redirect("/cadastro");
        }
    });
   
});
router.post('/user/login', (req, res) => {
    var email = req.body.email;
    var senha = req.body.senha;
    User.findOne({ 
        where: 
        { email: email
    }
}).then(user => {
    if(user !== undefined || user !== null) {
        var compare = bcrypt.compareSync(senha, user.senha);
        if(compare){
            const authenticatedUser = {
                id: user.id,
                email: user.email
              };
            req.session.user = authenticatedUser;
            res.redirect('/admin/products');
        }else{
            res.redirect('/login');
        }
    }else{
        res.redirect('/login');
    }
    });
});

router.get("/logout", (req, res) => {
    req.session.user = undefined;
    res.redirect('/');
})

module.exports = router;