'use strict';

const express = require('express');
const router = express.Router();

const Anuncio = require('../../models/Anuncio');

// GET - Devuelve una lista con todos los anuncios
router.get('/', async(req, res, next) => {

    const anunciosResult = await Anuncio.listar(req);
    console.log(anunciosResult);
    res.json({ success: true, result: anunciosResult });
});

// GET Devuelve una lista de tags
router.get('/tags', async(req, res, next) => {

    const tagsResults = await Anuncio.getTags();
    const tagsReturn = [];
    tagsResults.forEach(result => {
        result.tags.forEach(tag => {
            if (tagsReturn.indexOf(tag) === -1) {
                tagsReturn.push(tag);
            };
        });
    });
    res.json({ success: true, result: tagsReturn });
});

// POST Crea un nuevo anuncio



module.exports = router;