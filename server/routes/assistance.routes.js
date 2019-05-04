const express = require('express')
const router = express.Router()

const { AssistanceController } = require('../controllers/index')


router.post('/', AssistanceController.createAssistance)
router.get('/', AssistanceController.getAllAssistancesByStudent)


module.exports = router