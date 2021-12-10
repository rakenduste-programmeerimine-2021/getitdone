const { Router } = require("express");
const { body, validationResult } = require("express-validator");

const userController = require("../controllers/user");

module.exports = Router()
  .get("/", userController.listUsers)
  .post("/register",
    [
      body("name").trim(),
      body("email").isEmail().trim().normalizeEmail(),
      body("password").trim().isLength({ min: 7 }),
      (req, res, next) => {
        const errors = validationResult(req);
        if (errors.isEmpty()) return next();

        res.status(400).json({
          errors: errors.array(),
        });
      },
    ],
    userController.registerUser
  )

  .post("/login", 
  
    userController.loginUser
  )
