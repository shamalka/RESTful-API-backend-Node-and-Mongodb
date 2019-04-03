var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

Doctor = require('./models/doctor');
Patient = require('./models/patient')

//Connect to Mongoose
mongoose.connect('mongodb://localhost/doc_channel');
var db = mongoose.connection;

app.get('/', function(req, res){
    res.send('Use /api/doctors or /api/patients');
});

//get all doctors
app.get('/api/doctors', function(req, res){
    Doctor.getDoctors(function(err, doctors){
        if(err){
            throw err;
        }    
        res.json(doctors);
    });
});

//get a specific doctor by id
app.get('/api/doctors/:_id', function(req, res){
    Doctor.getDoctorById(req.params._id, function(err, doctor){
        if(err){
            throw err;
        }    
        res.json(doctor);
    });
});

//get all patients
app.get('/api/patients', function(req, res){
    Patient.getPatients(function(err, patients){
        if(err){
            throw err;
        }    
        res.json(patients);
    });
});

//Add new patient
app.post('/api/patients', function(req, res){
    var patient = {name:"Tom", disease:"Cough"};
    Patient.addPatient(patient, function(err, patient){
        if(err){
            throw err;
        }
        res.json(patient);
    });
});

app.listen(3000);
console.log('Running on port 3000...');