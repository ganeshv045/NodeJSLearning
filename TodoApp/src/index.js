const express = require('express');
const { PORT } = require('./config/server.config');
const apiRouter = require('./routes');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded());

app.use('/api',apiRouter); // localhost:3000/api/v1/home

app.listen(PORT, ()=>{
    console.log(`Started server at port : ${PORT}`);
})


/**
 * 
 * How will you manage below kinds of routs using express router
 * 
 * localhost:3000/api/v1/products/:id
 * localhost:3000/api/v1/categories/:id
 * localhost:3000/api/v1/products/:id
 * localhost:3000/api/v1/categories/:id
 * localhost:3000/api/v1/users/:id
 * 
 */