// File: routes/user.routes.js
const express = require("express");
const router = express.Router();
const validate = require("../middlewares/validate");
const { updateUserSchema } = require("../validations/user.validation");
const userController = require("../controllers/user.controller");

router.get("/me", userController.getCurrentUser);
router.patch("/me", validate(updateUserSchema), userController.updateUser);
router.get("/:id/profile", userController.getUserById);
router.get("/search", userController.searchUsers);

module.exports = router;