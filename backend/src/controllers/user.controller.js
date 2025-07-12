// File: controllers/user.controller.js
const userDao = require("../dao/user.dao");
const ApiError = require("../utils/ApiError");

// GET /me
exports.getCurrentUser = async (req, res, next) => {
    try {
        const user = await userDao.findUserById(req.user.id);
        res.json(user);
    } catch (err) {
        next(err);
    }
};

// PATCH /me
exports.updateUser = async (req, res, next) => {
    try {
        const updates = req.validated;
        const updatedUser = await userDao.updateUser(req.user.id, updates);
        res.json({ message: "Profile updated", user: updatedUser });
    } catch (err) {
        next(err);
    }
};

// GET /:id/profile
exports.getUserById = async (req, res, next) => {
    try {
        const user = await userDao.findUserById(req.params.id);
        res.json(user);
    } catch (err) {
        next(err);
    }
};

// GET /search?skill=...
exports.searchUsers = async (req, res, next) => {
    try {
        const skill = req.query.skill;
        if (!skill) throw new ApiError(400, "Skill query param required");
        const users = await userDao.searchUsersBySkill(skill);
        res.json(users);
    } catch (err) {
        next(err);
    }
};
