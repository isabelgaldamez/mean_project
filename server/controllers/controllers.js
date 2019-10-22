const mongoose = require('mongoose');
const Country = mongoose.model('Country');

// This file is in charge of cummunicating to the database
// Here we will do db functionality such as find, update, delete
// Will make use of promises to be able to pass db information to the 
// front server

module.exports = {
    createCountry : (req, res) => {
        const country  = new Country(req.body);
        country.save()
        .then(countryData => {
            console.log('Country has been created');
            // json response needs to be passed through json
            res.json({ message : 'success', data : countryData});
        })
        .catch(error => {
            console.log('Unable to create a new record')
            res.json({ message : 'error', data : error});
        })
    }, 
    findAll : (req, res) => {
        Country.find({})
        .then( countryData => {
            console.log('records have been found');
            res.json({message : 'success', data : countryData});
        })
        .catch(error => {
            console.log('records have been found');
            res.json({message : 'error', data : error});
        })
    },
    findById : (req, res) =>{
    },
    updateRecord : (req, res) => {  
    },
    deleteRecord : (req, res) =>{
    }
}
