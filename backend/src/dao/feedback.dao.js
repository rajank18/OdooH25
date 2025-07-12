// File: src/dao/feedback.dao.js
const { Feedback } = require("../models");

const createFeedback = async (data) => {
    return await Feedback.create(data);
};

const getFeedbackForUser = async (userId) => {
    return await Feedback.findAll({ where: { userId } });
};

module.exports = {
    createFeedback,
    getFeedbackForUser,
};

