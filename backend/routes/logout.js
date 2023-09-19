const express = require("express")
const router = express.Router()
const { logoutAgency } = require('../controllers/agencyController')


router.route("/")
    .post(logoutAgency)

module.exports = { router }