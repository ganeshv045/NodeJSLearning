const express = require('express');
const v2Router = express.Router();

const homeController = require('../../controllers/home.controller');

v2Router.get('/home', homeController);

module.exports = v2Router;