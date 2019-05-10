const express = require('express')
const router = express.Router()

const { LoginController } = require('../controllers/index')

router.post('/', LoginController.login)
    // router.post('/', SchoolYearController.createSchoolYear)
    // router.delete('/:id', SchoolYearController.deleteSchoolYear)

module.exports = router