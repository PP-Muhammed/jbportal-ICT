var mongoose = require('mongoose')
const schema = mongoose.Schema({
    jobtitle: String,
    fullName: String,
    contactNo: String,
    email: String
})
var appld = mongoose.model("applied", schema)
module.exports = appld;