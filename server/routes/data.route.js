const dataController = require("../controllers/data.controller")

module.exports = (app) => {

    app.post('/api/pet', dataController.create);
    app.get('/api/pet', dataController.getAll);
    app.get('/api/pet/:id', dataController.getOne);
    app.delete('/api/pet/:id', dataController.delete);
    app.put('/api/pet/:id', dataController.update);
};