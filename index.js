const express = require('express');
const app = express()
const port = process.env.PORT || 5000;
const cors = require('cors');
const { getAllRandomUsers, getARandomUser, saveAuser, deleteARandomUser, homeRoute } = require('./controller/v1.0/users.controllers');
const userRoutes = require("./routes/v1.0/users.route")
app.use(cors())
app.use(express.json())


app.use('/api/v1.0/user', userRoutes)

app.use("/", (req, res) => {
    res.send("Welcome to  node acc first assignment")
})
app.all("*", (req, res) => {
    res.send("Not Found Anything")
})
app.listen(port, () => {
    console.log("server is running")
})