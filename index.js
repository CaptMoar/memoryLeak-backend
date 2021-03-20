'use strict';

const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');

require('dotenv').config();

const app = express();

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.json({
        consulta: 'ok'
    })
})

app.listen(process.env.PORT, () => { console.log(`Servidor corriendo en el puerto ${process.env.PORT}`) })