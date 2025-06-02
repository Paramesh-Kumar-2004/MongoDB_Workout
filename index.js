const express = require("express")
const dotenv = require("dotenv").config()
const cors = require("cors")

const ConnectDB = require("./src/DBConnection/DBConfig.js")
const User_Route = require("./src/Router/User_Route.js")

const app = express()


ConnectDB()

app.use(express.json())
app.use(cors)

app.use("/api/users", User_Route)



app.use("/", (req, res) => {
    res.status(200).json("Working")
})

app.listen(process.env.PORT, () => {
    console.log("Server Running At The Port : 2004")
})