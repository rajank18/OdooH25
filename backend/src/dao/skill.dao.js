// File: src/dao/skill.dao.js
const { Skill } = require("../models");
const ApiError = require("../utils/ApiError");

const getAllSkills = async () => {
    return await Skill.findAll({ where: { approved: true } });
};

const createSkill = async (data) => {
    return await Skill.create(data);
};

const approveSkill = async (id) => {
    const skill = await Skill.findByPk(id);
    if (!skill) throw new ApiError(404, "Skill not found");
    return await skill.update({ approved: true });
};

module.exports = {
    getAllSkills,
    createSkill,
    approveSkill,
};
