// File: src/dao/user.dao.js
const { User, UserSkill, Skill } = require("../models");
const ApiError = require("../utils/ApiError");

const createUser = async (userData) => {
    return await User.create(userData);
};

const findUserById = async (id) => {
    const user = await User.findByPk(id, {
        include: [
            {
                model: UserSkill,
                include: [Skill],
            },
        ],
    });
    if (!user) throw new ApiError(404, "User not found");
    return user;
};

const findUserByEmail = async (email) => {
    return await User.findOne({ where: { email } });
};

const updateUser = async (id, updates) => {
    const user = await findUserById(id);
    return await user.update(updates);
};

const deleteUser = async (id) => {
    const user = await findUserById(id);
    return await user.destroy();
};

const searchUsersBySkill = async (skillName) => {
    return await User.findAll({
        include: {
            model: UserSkill,
            include: {
                model: Skill,
                where: { name: skillName },
            },
        },
    });
};

const countUsers = async () => {
    return await User.count();
};

const getAllUsers = async () => {
    return await User.findAll({
        attributes: { exclude: ["password"] },
        order: [["createdAt", "DESC"]],
    });
};

const banUser = async (userId) => {
    const user = await User.findByPk(userId);
    if (!user) throw new Error("User not found");
    user.isBanned = true;
    await user.save();
    return user;
};

// user.dao.js
module.exports = {
    createUser,
    findUserById,
    findUserByEmail,
    updateUser,
    deleteUser,
    searchUsersBySkill,
    countUsers,
    getAllUsers,
    banUser,
};
