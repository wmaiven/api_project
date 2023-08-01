const express = require('express');
const router = express.Router();
const axios = require("axios");
const cors = require('cors');
require('dotenv').config();
router.use(cors());

const clientSecret = process.env.CLIENT_SECRET;
const clientId = process.env.CLIENT_ID;
const redirectUri = process.env.REDIRECT_URI;
const ACCESS_TOKEN = process.env.ACCESS_TOKEN;

/* PEGAR O ACESS TOKEN
const getToken = async () => {
    try {
      const response = await axios.post('https://api.mercadolibre.com/oauth/token', null, {
        params: {
          grant_type: 'client_credentials',
          client_id: clientId,
          client_secret: clientSecret
        },
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });
  
      const accessToken = response.data.access_token;
      console.log('Access Token:', accessToken);
    } catch (error) {
      console.error('Erro ao obter o Access Token:', error);
    }
  };
  
  getToken();
  */

//Pegar categorias 
const getCategories = async () => {
  try {
    const response = await axios.get('https://api.mercadolibre.com/sites/MLB/categories', {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`
      }
    });
    const categories = response.data;
    return categories;
  } catch (error) {
    console.error('Erro ao obter o perfil do usuário:', error);
  }
};

// Função para obter a lista de produtos em ordem alfabética
async function getProductsInAlphabeticalOrder() {
  try {
    const response = await axios.get('https://api.mercadolibre.com/sites/MLB/search', {
      params: {
        q: 'produtos', // Termo de busca
        sort: 'title_asc' // Ordenação em ordem alfabética pelo título do produto
      },
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}` // Incluindo o token no cabeçalho da solicitação
      }
    });

    const products = response.data.results;
    // Faça o que desejar com a lista de produtos em ordem alfabética
    return products;
  } catch (error) {
    console.error('Erro ao obter a lista de produtos:', error);
  }
}

module.exports = {
    getCategories,
    getProductsInAlphabeticalOrder,
    router

}