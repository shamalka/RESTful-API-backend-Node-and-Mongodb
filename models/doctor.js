var mongoose = require('mongoose');

//Doctor Schema
var doctorSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    speciality:{
        type:String,
        required:true
    },
    email:{
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

//Get doctors
module.exports.getDoctors = function(callback, limit){
    Doctor.find(callback).limit(limit);
}

//Get doctor
module.exports.getDoctorById = function(id, callback){
    Doctor.findById(id, callback);
}