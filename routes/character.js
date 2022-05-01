const express = require('express');
const { route } = require('.');
const router = express.Router();

router.get('/character', (req,res) => {
    res.render('pages/characters');
})

router.get('/character/create', (req,res) => {
    res.render('pages/create');
})

module.exports = router;