var mongoose = require('mongoose');

//Doctor Schema
var doctorSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    create_date:{
        type:Date,
        default:Date.now
    }
});

//to be able to access this object from outside
var Doctor = module.exports = mongoose.model('Doctor', doctorSchema);

//Ger doctors
module.exports.getDoctors = function(callback, limit){
    Doctor.find(callback).limit(limit);
}