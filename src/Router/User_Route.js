const { Router } = require("express")

const CreateUser = require("../Controllers/User_Controller")

const router = Router()

router.post("/createuser", CreateUser)

module.exports = router




