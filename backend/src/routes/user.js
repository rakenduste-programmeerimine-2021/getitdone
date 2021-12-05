const router = require("express").Router();
const userController = require("../controllers/user");
const validationMiddleware = require("../middleware/validationMiddleware");
const {check} = require("express-validator");

router.post("/testregister", userController.testRegister);

module.exports = router