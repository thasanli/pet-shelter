const Data = require("../models/data.model");


module.exports = {
    create(req, res) {
        Data.create(req.body)
            //this is newly created city that db returned
            .then((data) => {
                res.json(data);
            })
            .catch((err) => {
                res.json(err);
            })
    },
    getAll(req, res) {
        Data.find()
            .then((cities) => {
                res.json(cities);
            })
            .catch((err) => {
                res.json(err)
            })
    },
    getOne(req, res) {
        // console.log(req.params);
        Data.findById(req.params.id)
            // data.find({ _id: req.params.id })
            .then((cities) => {
                res.json(cities)
            })
            .catch((err) => {
                res.json(err)
            });
    },
    delete(req, res) {
        Data.findByIdAndDelete(req.params.id)
            .then((data) => {
                res.json(data)
            })
            .catch((err) => {
                console.log('error to delete');
                res.json(err);
            })
    },
    delete2(req, res) {
        Data.findById(req.params.id)
            .then((data) => {
                data.remove()
                    .then((removedData) => {
                        res.json(removedData)
                    })
                    .catch((err) => {
                        res.json(err)
                    })
            })
            .catch((err) => {
                res.json(err)
            })
    },

    update(req, res) {
        Data.findByIdAndUpdate(req.params.id, req.body, { runValidators: true, new: true })
            .then((data) => {
                res.json(data)
            })
            .catch((err) => {
                res.json(err)
            })
    }
};

