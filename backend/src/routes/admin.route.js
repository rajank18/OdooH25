// File: routes/admin.routes.js
const express = require("express");
const router = express.Router();
const adminController = require("../controllers/admin.controller");

router.get("/users", adminController.getAllUsers);
router.patch("/users/:id/ban", adminController.banUser);
router.get("/logs", adminController.getActivityLogs);
router.get("/reports", adminController.getReports);
router.post("/messages", adminController.sendMessage);
router.patch("/skills/:id/approve", adminController.approveSkill);
router.patch("/skills/:id/reject", adminController.rejectSkill);

module.exports = router;