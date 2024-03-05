const express = require('express')
const marvelController = require('../controllers/marvelController.js')

const router = express.Router()

// Marvel Routes
router.get('/characters/:nameStartsWith?', marvelController.getCharacters)
router.get('/characters/:id/comics', marvelController.getComics)

module.exports = router