'use strict';

const express = require('express');
const router = express.Router();

const Anuncio = require('../../models/Anuncio');

// GET - Devuelve una lista con todos los anuncios
router.get('/', async(req, res, next) => {

    const anunciosResult = await Anuncio.find();
    res.json({ success: true, result: anunciosResult });
});


module.exports = router;