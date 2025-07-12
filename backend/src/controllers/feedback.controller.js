// File: controllers/feedback.controller.js
const feedbackDao = require("../dao/feedback.dao");
const swapDao = require("../dao/swap.dao");
const ApiError = require("../utils/ApiError");

// POST /feedback
exports.createFeedback = async (req, res, next) => {
    try {
        const { swapId, rating, comments } = req.validated;
        const userId = req.user.id;

        const swap = await swapDao.getSwapById(swapId);
        if (!swap || (swap.senderId !== userId && swap.receiverId !== userId)) {
            throw new ApiError(
                403,
                "You are not authorized to leave feedback on this swap"
            );
        }

        const reviewedId =
            swap.senderId === userId ? swap.receiverId : swap.senderId;

        const feedback = await feedbackDao.createFeedback({
            swapId,
            reviewerId: userId,
            reviewedId,
            rating,
            comment: comments,
        });

        res.status(201).json({ message: "Feedback submitted", feedback });
    } catch (err) {
        next(err);
    }
};

// GET /feedback/user/:userId
exports.getUserFeedback = async (req, res, next) => {
    try {
        const feedbacks = await feedbackDao.getFeedbackForUser(
            req.params.userId
        );
        res.json(feedbacks);
    } catch (err) {
        next(err);
    }
};
