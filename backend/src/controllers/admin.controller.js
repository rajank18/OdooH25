// File: controllers/admin.controller.js
const userDao = require("../dao/user.dao");
const skillDao = require("../dao/skill.dao");
const logDao = require("../dao/log.dao");
const feedbackDao = require("../dao/feedback.dao");
const swapDao = require("../dao/swap.dao");
const messageDao = require("../dao/message.dao");
const ApiError = require("../utils/ApiError");

// GET /admin/users
exports.getAllUsers = async (req, res, next) => {
    try {
        const users = await userDao.getAllUsers();
        res.json(users);
    } catch (err) {
        next(err);
    }
};

// PATCH /admin/users/:id/ban
exports.banUser = async (req, res, next) => {
    try {
        const user = await userDao.banUser(req.params.id);
        res.json({ message: "User banned", user });
    } catch (err) {
        next(err);
    }
};

// PATCH /admin/skills/:id/approve
exports.approveSkill = async (req, res, next) => {
    try {
        const skill = await skillDao.approveSkill(req.params.id);
        res.json({ message: "Skill approved", skill });
    } catch (err) {
        next(err);
    }
};

// PATCH /admin/skills/:id/reject
exports.rejectSkill = async (req, res, next) => {
    try {
        const skill = await skillDao.rejectSkill(req.params.id);
        res.json({ message: "Skill rejected", skill });
    } catch (err) {
        next(err);
    }
};

// POST /admin/messages
exports.sendMessage = async (req, res, next) => {
    try {
        const { title, content, type } = req.body;
        const message = await messageDao.createPlatformMessage({
            title,
            content,
            type,
        });
        res.status(201).json({
            message: "Platform message sent",
            data: message,
        });
    } catch (err) {
        next(err);
    }
};

// GET /admin/logs
exports.getActivityLogs = async (req, res, next) => {
    try {
        const logs = await logDao.getAllLogs();
        res.json(logs);
    } catch (err) {
        next(err);
    }
};

// GET /admin/reports
exports.getReports = async (req, res, next) => {
    try {
        const report = await Promise.all([
            userDao.countUsers(),
            swapDao.getSwapStats(),
            feedbackDao.getFeedbackStats(),
        ]);

        res.json({
            users: report[0],
            swaps: report[1],
            feedback: report[2],
        });
    } catch (err) {
        next(err);
    }
};
