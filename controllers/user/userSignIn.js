const userModel = require("../../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');

async function userSignInController (req,res){
    try{
        const {email,password} = req.body;

        const user = await userModel.findOne({email})

        if(!user){
            throw new Error("User not found")
        }

        const checkPassword = await bcrypt.compare(password,user.password)
        console.log("checkPassword",checkPassword)

        if(checkPassword){
            const token = jwt.sign({id: user._id, email: user.email}, process.env.JWT_SECRET,{expiresIn: '30d'})

            res.status(201).json({
                data : {
                    name : user.name,
                    email : user.email,
                    phone : user.phone
                },
                token,
                success : true,
                error: false,
                message : "Login Successfully!"
            })
        }
        else{
            throw new Error("Please Check password")
        }
    }catch(err){
        res.json({
            message : err.message || err,
            error : true,
            success : false,
        })
    }
}

module.exports = userSignInController