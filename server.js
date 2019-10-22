const express = require('express');
const mongoose = require('mongoose');


const app = express();
app.use(express.json());

app.use(express.static( __dirname + '/public/dist/public' ));

require('./server/config/mongoose.js');
require('./server/config/routes')(app); 

app.listen(8000, () => console.log('Listening to port 8000'));
