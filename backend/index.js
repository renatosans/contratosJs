
const express = require('../node_modules/express');
// const { createRouter } = require('express-file-routing');
const { nextApi, nextRouter } = require('../node_modules/express-next-api');


const port = 3000;
const app = express();

app.use("/", express.static('Public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

// setHeader('Access-Control-Allow-Origin', '*')

// createRouter(app, { directory: apiDirectory, additionalMethods: null } )
app.use(nextApi({ base: '/api', directory: '../api', options: {caseSensitive: false} }));


// inicia a API escutando na porta 3000
app.listen(port, () => console.log('Express escutando chamadas na porta ' + port));
