const mongoose = require("mongoose")
const path = require("path")
require("dotenv").config({ path: path.join(__dirname, "../Env/.env") });

async function ConnectDB() {
    try {
        await mongoose.connect(process.env.DBURL)
        console.log("DB Connection Success")
    } catch (error) {
        console.log("Connnection String", process.env.DBURL)
        console.log(error)
    }
}
module.exports = ConnectDB;