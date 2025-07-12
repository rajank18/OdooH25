// File: controllers/userSkill.controller.js
const userSkillDao = require("../dao/userSkill.dao");
const skillDao = require("../dao/skill.dao");
const ApiError = require("../utils/ApiError");

// GET /user-skills/me
exports.getMySkills = async (req, res, next) => {
    try {
        const skills = await userSkillDao.getUserSkills(req.user.id);
        res.json(skills);
    } catch (err) {
        next(err);
    }
};

// POST /user-skills/
exports.addUserSkill = async (req, res, next) => {
    try {
        const { skillName, type } = req.body;

        if (!skillName || !type || !["offered", "wanted"].includes(type)) {
            throw new ApiError(400, "Skill name and valid type are required");
        }

        const skill = await skillDao.findOrCreateSkillByName(skillName);
        const userSkill = await userSkillDao.addUserSkill({
            userId: req.user.id,
            skillId: skill.id,
            type,
        });

        res.status(201).json({ message: "Skill added", userSkill });
    } catch (err) {
        next(err);
    }
};

// DELETE /user-skills/:id
exports.deleteUserSkill = async (req, res, next) => {
    try {
        await userSkillDao.removeUserSkill(req.params.id);
        res.status(200).json({ message: "Skill removed" });
    } catch (err) {
        next(err);
    }
};
