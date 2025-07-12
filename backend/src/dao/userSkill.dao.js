// File: src/dao/userSkill.dao.js
const { UserSkill, Skill } = require("../models");

const getUserSkills = async (userId) => {
    return await UserSkill.findAll({
        where: { userId },
        include: [Skill],
    });
};

const addUserSkill = async (data) => {
    return await UserSkill.create(data);
};

const removeUserSkill = async (id) => {
    const skill = await UserSkill.findByPk(id);
    return await skill.destroy();
};

module.exports = {
    getUserSkills,
    addUserSkill,
    removeUserSkill,
};
