const express = require('express');
const { route } = require('.');
const router = express.Router();

router.get('/character', (req,res) => {
    res.render('pages/index');
})

router.get('/character/create', (req,res) => {
    res.render('pages/create');
})

module.exports = router;