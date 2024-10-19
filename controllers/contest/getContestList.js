const contestModel = require("../../models/contestModel")


const getContestList = async(req,res) => {
    try{
        const contests = await contestModel.find();
        if(!contests){
            throw new Error("Contest not found")
        }
        res.status(200).json({
            data : contests,
            message : "Contest fetch successfully",
            success : true,
            error : false,
        })
    }catch(err){
        res.status(400).json({
            message: err.message || err,
            error : true,
            success : false
        })
    }
}

module.exports = getContestList