const contestModel = require("../../models/contestModel");

const updateContest = async (req,res) => {
    try{
        const userId = req.params.id;
        const {title,description,start_time,end_time} = req.body

        const result = await contestModel.updateOne(
            { _id: userId },  // Find the user by ID
            { $set: { title: title, description: description, start_time: start_time,end_time: end_time } }  // Update the provided fields
          );

          console.log(req.body)

          if (result.nModified === 0) {
            return res.status(404).json({ message: 'User not found or no changes made' });
          }

          res.json({ 
            message: 'User updated successfully',
            data : result,
            success : true,
            error: false 
        });


    }catch(err){
        res.status(401).json({
            message : 'Failed to update contest',
            error : true,
            success : false
        })
    }
}

module.exports = updateContest