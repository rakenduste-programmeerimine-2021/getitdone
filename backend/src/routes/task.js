const { Router } = require("express");
const { body, validationResult } = require("express-validator");

const taskController = require("../controllers/task");

module.exports = Router()

.get("/", taskController.listTasks)
  
