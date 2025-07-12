// ✅ File: dao/feedback.dao.js
const { Feedback } = require("../models");

const createFeedback = async (data) => {
    return await Feedback.create(data);
};

const getFeedbackForUser = async (userId) => {
    return await Feedback.findAll({
        where: { reviewedId: userId },
        order: [["createdAt", "DESC"]],
    });
};

const getFeedbackStats = async () => {
    const total = await Feedback.count();
    const avgRating = await Feedback.findAll({
        attributes: [
            [
                Feedback.sequelize.fn("AVG", Feedback.sequelize.col("rating")),
                "averageRating",
            ],
        ],
    });

    return {
        total,
        averageRating: parseFloat(
            avgRating[0].dataValues.averageRating || 0
        ).toFixed(2),
    };
};

// feedback.dao.js
module.exports = {
    createFeedback,
    getFeedbackForUser,
    getFeedbackStats,
};