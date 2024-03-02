const express = require('express')
const marvelController = require('../controllers/marvelController.js')

const router = express.Router()

// Marvel Routes
router.get('/characters/:nameStartsWith?', marvelController.getCharacters)

module.exports = router