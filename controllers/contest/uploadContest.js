const contestModel = require("../../models/contestModel");


const uploadContest = async (req,res) => {
    try{

        const {title,description,start_time,end_time} = req.body;

        const payload = {
            ...req.body,
            uploadPicture : null
        }

        const contestData = new contestModel(payload)
        const saveContest = await contestData.save()

        res.status(201).json({
            message : 'contest upload successfully',
            success : true,
            error : false,
            data : saveContest
        })


    }catch(err){
        res.status(400).json({
            message : err.message || err,
            error : true,
            success : false
        })
    }
}

module.exports = uploadContest