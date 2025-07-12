// File: routes/auth.routes.js
const express = require("express");
const router = express.Router();
const validate = require("../middlewares/validate.middleware.js");
const { registerSchema, loginSchema } = require("../validations/auth.validation");
const authController = require("../controllers/auth.controller");

router.post("/register", validate(registerSchema), authController.register);
router.post("/login", validate(loginSchema), authController.login);

module.exports = router;