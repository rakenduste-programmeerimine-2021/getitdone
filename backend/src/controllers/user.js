const jwt = require("jsonwebtoken");
const { body, validationResult } = require('express-validator');
const db = require("./db.js");