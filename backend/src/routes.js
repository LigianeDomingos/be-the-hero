const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id',IncidentController.delete);

module.exports = routes;



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




