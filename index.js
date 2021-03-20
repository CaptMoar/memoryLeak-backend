'use strict';

const express = require('express');
const cors = require('cors');

require('dotenv').config();

const app = express();

// Controllers
const metricasRoutes = require('./src/controller/metricasController');

app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(express.static('public'))

//Rutas
app.use('/get', metricasRoutes);

app.listen(process.env.PORT, () => { console.log(`Servidor corriendo en el puerto ${process.env.PORT}`) })