const express = require("express")
const router = express.Router()
const { registerAgency } = require('../controllers/agencyController')


router.route("/")
    .post(registerAgency)

module.exports = { router }