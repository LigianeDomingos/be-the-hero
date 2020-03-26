const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);


app.listen(3333);

// Rotas recursos: 
/*  GET: Buscar uma informação no back-end.
    POST: Criar uma informação no back-end.
    PUT: Alterar uma informação no back-end.
    DELETE: Deletar uma informação no back-end.

    Tipos de parametros:
    Query Params: Parametros nomeados na rota apos "?" para filtros e paginação;
    Route Params: Parametos para identificar recursos;
    Request Body: Corpo da requisição para criar ou alterar recursos.

    SQL Banco de Dados: SQLLite SQL Server, PostgreSQL, 
    No SQL: Mongo SQL, CouchDB

    Driver: SELECT *FROM users
    Query Builder: table('users').select('*').where()   Knex: npx knex init
 */




