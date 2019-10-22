const mongoose = require('mongoose');

const countrySchema = new mongoose.Schema({
    country_name : {
        type: String,
    },
    country_language : {
        type: String,
    }
}, {timestamps : true});

mongoose.model('Country', countrySchema);