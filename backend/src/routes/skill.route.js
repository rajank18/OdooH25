// File: routes/skill.routes.js
const express = require("express");
const router = express.Router();
const validate = require("../middlewares/validate.middleware.js");
const { createSkillSchema } = require("../validations/skill.validation");
const skillController = require("../controllers/skill.controller");

router.get("/", skillController.getAllSkills);
router.post("/", validate(createSkillSchema), skillController.createSkill);

module.exports = router;