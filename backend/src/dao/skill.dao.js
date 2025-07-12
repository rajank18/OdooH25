"use strict";

const { Skill } = require("../models");
const ApiError = require("../utils/ApiError");

/**
 * Get all approved skills
 */
const getAllSkills = async () => {
    return await Skill.findAll({ where: { isApproved: true } });
};

/**
 * Create a new skill (default: unapproved)
 */
const createSkill = async ({ name, description }) => {
    const [skill, created] = await Skill.findOrCreate({
        where: { name },
        defaults: { name, description, approved: false },
    });

    if (!created) {
        throw new ApiError(409, "Skill with this name already exists");
    }

    return skill;
};

/**
 * Approve a skill by ID (admin use case)
 */
const approveSkill = async (skillId) => {
    const skill = await Skill.findByPk(skillId);
    if (!skill) {
        throw new ApiError(404, "Skill not found");
    }

    return await skill.update({ approved: true });
};

/**
 * Find a skill by name or create if not exists
 */
const findOrCreateSkillByName = async (name) => {
    const [skill] = await Skill.findOrCreate({
        where: { name },
        defaults: {
            name,
            description: "",
            approved: false,
        },
    });
    return skill;
};

/**
 * Find skill by ID
 */
const findSkillById = async (id) => {
    const skill = await Skill.findByPk(id);
    if (!skill) {
        throw new ApiError(404, "Skill not found");
    }
    return skill;
};



// skill.dao.js
module.exports = {
    getAllSkills,
    createSkill,
    approveSkill,
    findOrCreateSkillByName,
    findSkillById,
};
