const { Router } = require("express")

const { AllUsers, SingleUser } = require("../Controllers/User_Controller")

const router = Router()


router.post("/allusers", AllUsers)
router.get("/singleuser", SingleUser)

module.exports = router