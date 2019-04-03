var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

Doctor = require('./models/doctor');

//Connect to Mongoose
mongoose.connect('mongodb://localhost/doc_channel');
var db = mongoose.connection;

app.get('/', function(req, res){
    res.send('Use /api/doctors or /api/patients');
});

app.get('/api/doctors', function(req, res){
    Doctor.getDoctors(function(err, doctors){
        if(err){
            throw err;
        }    
        res.json(doctors);
    });
});

app.listen(3000);
console.log('Running on port 3000...');