const express = require("express")
const router = express.Router()
const { loginAgency } = require('../controllers/agencyController')


router.route("/")
    .post(loginAgency)

module.exports = { router }