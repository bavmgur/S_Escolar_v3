const express = require('express')
const router = express.Router()

const { HomeController } = require('../controllers/index')

router.get('/', HomeController.getIndex)
router.get('/test', (req, res) => res.render('assistant-assistance'))

module.exports = router