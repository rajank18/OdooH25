const express = require("express");
const router = express.Router();
const validate = require("../middlewares/validate");
const userSkillController = require("../controllers/userSkill.controller");

router.get("/me", userSkillController.getMySkills);
router.post("/", userSkillController.addUserSkill);
router.delete("/:id", userSkillController.deleteUserSkill);

module.exports = router;