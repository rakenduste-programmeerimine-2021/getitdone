const { Router } = require("express");
const { body, validationResult } = require("express-validator");

const taskController = require("../controllers/task");

module.exports = Router()
    .get("/", taskController.listTasks)
    .post("/createtask", taskController.createTask)
    .post("/gettask", taskController.getTaskDetails)
    .post("/changetaskdetails", taskController.changeTaskDetails)
    .post("/geteventtasks", taskController.getEventTasks)
    .post("/completetask", taskController.completeTask)
    .post("/getcompletestatus", taskController.getCompleteStatus)
    