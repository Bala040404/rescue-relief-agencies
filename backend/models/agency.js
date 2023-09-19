const mongoose = require("mongoose")
const passportLocalMongoose = require('passport-local-mongoose');

const agencySchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: String,
    username: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    }
})

agencySchema.plugin(passportLocalMongoose);
const Agency = mongoose.model("Agency", agencySchema);

module.exports = { Agency }