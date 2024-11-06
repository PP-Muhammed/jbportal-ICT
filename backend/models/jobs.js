var mongoose = require('mongoose')
const schema = mongoose.Schema({
    title: String,
    description: String,
    Experience_Required: String,
    salary: String
})
var job = mongoose.model("jobs", schema)
module.exports = job;