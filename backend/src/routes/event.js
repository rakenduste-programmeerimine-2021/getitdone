const { Router } = require("express");
const { body, validationResult } = require("express-validator");

const eventController = require("../controllers/event");

module.exports = Router()

.get("/", eventController.listEvents)
  