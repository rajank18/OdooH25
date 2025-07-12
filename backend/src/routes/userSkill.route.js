const express = require('express');
const router = express.Router();
const userSkillController = require('../controllers/userSkill.controller');

router.post('/', userSkillController.addUserSkill);
router.get('/search', userSkillController.searchUsersBySkill);
router.get('/user/:userId', userSkillController.getUserSkills);
router.put('/:id', userSkillController.updateUserSkill);
router.delete('/:id', userSkillController.removeUserSkill);

module.exports = router;
