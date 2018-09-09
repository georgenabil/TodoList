
var db = require('../models');

exports.getTodos = function (req, res) {

    db.todo.find().then(function (todos) {
        res.json(todos);
    }).catch(function (err) {
        res.send(err);
    })

}

exports.postTodo = function (req, res) {
    db.todo.create(req.body).then(function (newTodo) {
        res.status(201).json(newTodo)
    }).catch(function (err) {
        res.send(err);
    })
}


exports.showtodo = function (req, res) {

    db.todo.findById(req.params.todoID).then(function (foundtodo) {
        res.status(201).json(foundtodo);
    }).catch(function (err) {
        res.send(err);
    })

}

exports.updatetodo = function (req, res) {

    db.todo.findOneAndUpdate({ _id: req.params.todoID }, req.body, { new: true })
        .then(function (updatedtodo) {
            res.status(201).json(updatedtodo);
        })
        .catch(function (err) {
            res.send(err);
        })

}

exports.deletetodo = function (req, res) {
    db.todo.remove({ _id: req.params.todoID }).then(function (delTodo) {
        res.status(201).json({
            message: "you deleted it"
        })
    })
        .catch(function (err) {
            res.send(err);
        })
}


module.exports = exports