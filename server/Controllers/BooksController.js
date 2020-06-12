const db = require('../Models');

module.exports = {
    findAll: function(req,res){
        db.Book
        .find({})
        .sort({ date: -1 })
        .then(dbModel => res.json(dbModel))
        .catch(error=> res.status(400).json(error));

    },
    findById: function(req, res){
        db.Book
        .findById(req.parms.id)
        .then(dbModel=> res.json(dbModel)).catch(error => res.status(400).json(error) );
    },
    create: function(req, res){
        db.Book
        .create(req.body)
        .then(dbModel=> res.json(dbModel)).catch(error => res.status(400).json(error) );
    },
    update: function(req, res){
        db.Book
        .findOneAndUpdate({_id: req.parms.id}, req.body)
        .then(dbModel=> res.json(dbModel)).catch(error => res.status(400).json(error) );
    },
    remove: function(req, res){
        db.Book
        .findById({_id: req.parms.id})
        .then(dbModel=> dbModel.remove())
        .then(dbModel=> res.json(dbModel))
        .catch(error => res.status(400).json(error) );
    },

};