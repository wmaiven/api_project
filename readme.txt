Olá, segue o passo a passo de como rodar o projeto:
1-ao abrir o projeto dar npm i para instalar todas as dependencias 
2-baixar e ter configurado o mysql em sua maquina
3-criar o banco de dados mercadolivre_database no seu mysql
4-na pasta database no arquivo database.js atualizar o usuario root e senha confiurado no sql de sua maquina
5-desconmentar a linha 19 e 37 na pasta Produtos no arquivo SalvarApiBanco.js
6-descomentar a linha 9 na pasta database no arquivo database.js
7-rodar o comando npx nodemon app.js
8-no comento que você perceber que foram salvas todas as informações no banco recomentar todas as linhas 
que havia sido comentada.

Explicação do projeto: esse projeto tem criação e validação de login com session utilizando hash na senha e salvando o usuairo criado no banco de dados, consumo da api do mercado livre com o acess token.
utilização do banco de dados para salvar informações da api e de usuario. 