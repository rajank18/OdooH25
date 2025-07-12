// File: routes/feedback.routes.js
const express = require("express");
const router = express.Router();
const validate = require("../middlewares/validate");
const { feedbackSchema } = require("../validations/swap.validation");
const feedbackController = require("../controllers/feedback.controller");

router.post("/", validate(feedbackSchema), feedbackController.createFeedback);
router.get("/user/:userId", feedbackController.getUserFeedback);

module.exports = router;