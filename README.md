<h1 align="center"> Projeto back </h1>

<p align="center">
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-layout">Layout</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">Licença</a>
</p>

<p align="center">
  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=49AA26&labelColor=000000">
</p>

<br>

<p align="center">
  <img alt="calendario da copa" src="./img/capa.png" width="100%">
</p>

## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- HTML e CSS
- JavaScript
- MySql2
- EJS
- Git e Github

## 💻 Projeto

para rodar o projeto basta seguir os seguintes comandos

- npm init para instalar as dependências

.obs projeto executado com variáveis de hambientes

- Preencher o arquivo .ENV

DB_USER=root //ou nome do usuário do banco de dados
DB_PASS= //Inserir a senha do banco de dados, caso não tenha, deixar somente o sinal de igual após a variável de ambiente criada
DBN_NAME=databaseName //Inserir o nome do banco de dados (caso não exista, o sequelize irá criar)
DB_HOST=localhost //Ou ip do servidor
DB_DIALECT=mysql //Inserir o dialeto do banco de dados: mysql, pg, oracle, etc..
DB_PORT=3306 //Inserir a porta do banco de dados, verificar no XAMPP a porta do mysql

-para dropar o banco de dados execute o comando:
npx sequelize db:create

para rodar o projeto execute o comando : nodemon start ou node index.js





