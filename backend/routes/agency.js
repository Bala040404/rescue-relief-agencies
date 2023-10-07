const express = require("express")
const router = express.Router()
const { getAgency, getAgencyById } = require("../controllers/agencyController")

router.route("/")
    .get(getAgency)

router.route("/:id")
    .get(getAgencyById)


module.exports = { router }

