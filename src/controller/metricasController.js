const express = require('express');
const response = express.response;
const router = express.Router();

const metricasService = require('../service/metricasService')

router.post('/resource/memory', async (req, res = response) => {
        res.send( await metricasService.getAllMemory(req.body));
    });

module.exports = router;