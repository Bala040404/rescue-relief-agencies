const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")

const session = require('express-session')

const app = express()
app.use(express.json())
app.use(cors())


const agencyRouter = require("./routes/agency").router
const registerRouter = require("./routes/register").router
const loginRouter = require("./routes/login").router
const logoutRouter = require("./routes/logout").router

dburl = "mongodb+srv://balakumarguhesh:bala@cluster0.5f7t7mu.mongodb.net/sih?retryWrites=true&w=majority"





mongoose.connect(dburl, {
    useNewUrlParser: true,

    useUnifiedTopology: true

});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => {
    console.log("connected")
})

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}))
app.get("/", (req, res) => {
    res.send("hi")
})

app.use("/agency", agencyRouter)
app.use('/register', registerRouter)
app.use('/login', loginRouter)
app.use('/logout', logoutRouter)


app.listen(4000, () => {
    console.log("hi")
})