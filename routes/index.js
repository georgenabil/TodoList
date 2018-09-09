var express = require('express');
var router = express.Router();
var db = require('../models');
var helper = require("../helpers/todos.js")


router.route("/")
  .get(helper.getTodos)
  .post(helper.postTodo)


router.route("/:todoID")
  .get(helper.showtodo)
  .put(helper.updatetodo)
  .delete(helper.deletetodo);





module.exports = router;
