// File: routes/message.routes.js
const express = require("express");
const router = express.Router();
const messageController = require("../controllers/message.controller");

router.get("/", messageController.getMessages);

module.exports = router;