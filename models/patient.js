var mongoose = require('mongoose');

//Patient Schema
var patientSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    disease:{
        type:String,
        required:true
    },
    create_date:{
        type:Date,
        default:Date.now
    }
});

//to be able to access this object from outside
var Patient = module.exports = mongoose.model('Patient', patientSchema);

//Get patients
module.exports.getPatients = function(callback, limit){
    Patient.find(callback).limit(limit);
}

//Add patient
module.exports.addPatient = function(patient, callback){
    Patient.create(patient, callback);
}