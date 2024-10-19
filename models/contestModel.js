const mongoose = require('mongoose');

const contestSchema = new mongoose.Schema({
    title: String,
    description : String,
    start_time : Date,
    end_time : Date,
    picture : String
},{
    timeStamps : true
})

const contestModel = mongoose.model("contest",contestSchema)

module.exports = contestModel