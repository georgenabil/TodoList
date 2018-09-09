const mongoose = require('mongoose');
mongoose.set("debug", true);
mongoose.Promise = Promise;

var url = process.env.DATABASEURL || 'mongodb://localhost/todo-api'

mongoose.connect(url, { useNewUrlParser: true });

module.exports.todo = require('./todo.js');

