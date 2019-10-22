// The routes are the ones that will do the RESTful request (get, post, put, delete)
// The routes will be communicating to the controllers, get information from there
// and pass information to the angular server
// (req, res) => are the values that will be pass into and out of the controllers

const controller = require('../controllers/controllers');

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
}
