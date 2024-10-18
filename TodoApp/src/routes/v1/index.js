const express = require('express');
const v1Router = express.Router();

const homeController = require('../../controllers/home.controller');
const todoRouter = require('./todo.routes');

v1Router.use('/todos', todoRouter);

v1Router.get('/home', homeController);


module.exports = v1Router;