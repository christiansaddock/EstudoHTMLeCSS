//importa dependencia
const express = require('express');
const path = require('path');
const pages = require('./pages.js');

//inicia express
const server = express()
server
    //utilizar body da requisição
    .use(express.urlencoded({ extended: true}))
    //utilizando os arquivos estaticos
    .use(express.static('public'))

    //configurar template engine
    .set('views', path.join(__dirname, "views"))
    .set('view engine', 'hbs')
    
    //criar rotas
    .get('/', pages.index)
    .get('/orphanage', pages.orphanage)
    .get('/orphanages', pages.orphanages)
    .get('/create-orphanage', pages.createOrphanage)
    .post('/save-orphanage', pages.saveOrphanage)

//ligar servidor
server.listen(5500)