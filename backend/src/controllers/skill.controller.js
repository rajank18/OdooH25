// File: controllers/skill.controller.js
const skillDao = require("../dao/skill.dao");
const ApiError = require("../utils/ApiError");

// GET /skills - Public or protected based on project need
exports.getAllSkills = async (req, res, next) => {
    try {
        const skills = await skillDao.getAllSkills();
        res.json(skills);
    } catch (err) {
        next(err);
    }
};

// POST /skills - Users can propose new skills (pending approval)
exports.createSkill = async (req, res, next) => {
    try {
        const data = req.validated;
        const newSkill = await skillDao.createSkill({
            ...data,
            approved: false,
        });
        res.status(201).json({
            message: "Skill submitted for approval",
            skill: newSkill,
        });
    } catch (err) {
        next(err);
    }
};
