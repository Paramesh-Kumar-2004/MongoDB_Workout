const User = require("../Models/User_Model")



async function AllUsers(req, res) {
    console.log("Enter Into AllUser Controller")
    try {
        // const { Name, Age } = req.body
        // await res.json(Name)
        res.json("All User")
    } catch (error) {
        console.log("Error : ", error)
    }
}


function SingleUser(req, res) {
    res.json({
        "Name": "Single User",
        "Age": 21
    })
}


module.exports = { AllUsers, SingleUser }