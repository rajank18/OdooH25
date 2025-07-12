// File: routes/user.routes.js
const express = require("express");
const router = express.Router();
const validate = require("../middlewares/validate");
const auth = require("../middlewares/auth");
const { updateUserSchema } = require("../validations/user.validation");
const userController = require("../controllers/user.controller");

router.get("/me", auth, userController.getCurrentUser);
router.patch("/me", auth, validate(updateUserSchema), userController.updateUser);
router.get("/:id/profile", auth, userController.getUserById);
router.get("/search", auth, userController.searchUsers);

module.exports = router;