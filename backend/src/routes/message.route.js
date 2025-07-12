// File: routes/message.routes.js
const express = require("express");
const router = express.Router();
const validate = require("../middlewares/validate.middleware.js");
const auth = require("../middlewares/auth.middleware.js");
const { createPlatformMessageSchema } = require("../validations/message.validation");
const messageController = require("../controllers/message.controller");

router.get("/", messageController.getMessages);
router.post(
    "/platform",
    auth,
    validate(createPlatformMessageSchema),
    messageController.createPlatformMessage
);

module.exports = router;
