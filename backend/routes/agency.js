const express = require("express")
const router = express.Router()
const { getAgency } = require("../controllers/agencyController")

router.route("/")
    .get(getAgency)



module.exports = { router }

