const User = require("../Models/User_Model")



async function CreateUser(req, res) {

    console.log("Enter Into Create User Function")

    const { Name, Age, Email, location } = req.body

    if (!Name || !Age || !Email) {
        return res.json({
            "Message": "Some Feilds Are Missing"
        })
    }

    try {
        const User_Data = await User.create({ email: Email, name: Name, age: Age, location })
        res.status(200).json({
            "Message": "Users Created Successfully...",
            "User_Data": User_Data
        })
    }
    catch (error) {
        console.log("Error While Creating User", error)
        res.status(200).json({
            "Message": error.message
        })
    }
}


module.exports = CreateUser