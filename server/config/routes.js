// The routes are the ones that will do the RESTful request (get, post, put, delete)
// The routes will be communicating to the controllers, get information from there
// and pass information to the angular server
// (req, res) => are the values that will be pass into and out of the controllers

const controller = require('../controllers/controllers');
const request = require('request')
module.exports = (app) => {
    app.get('/countries', (req, res) => {
        return controller.findAll(req, res);
    });
    app.get('/countries/:id', (req, res) => {
        return controller.findById(req, res);
    });
    app.post('/country', (req, res) => {
        return controller.createCountry(req, res);
    });
    app.put('/country/:id', (req, res) => {
        return controller.updateRecord(req, res);
    });
    app.delete('/country/:id', (req, res) =>{
        return controller.deleteRecord(req, res);
    });
    app.get('/api/:locationType/:country', (req, res)=>{
        console.log('routers.js', req.params.locationType);
        request(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=${req.params.locationType}%20in%20${req.params.country}%20&radius=200000&key=AIzaSyAw7xotI2V4stqK96xR6DwUUFSF5NtHurI`,(error, response, body) => {
            res.json(JSON.parse(body)) //api sends response in a string, converting into a dictionary 
        });
    });
}
