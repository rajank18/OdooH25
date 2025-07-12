// File: controllers/swap.controller.js
const swapDao = require("../dao/swap.dao");
const userDao = require("../dao/user.dao");
const ApiError = require("../utils/ApiError");

// POST /swaps - Create a swap request
exports.createSwap = async (req, res, next) => {
    try {
        const { receiverId, offeredSkills, requestedSkills } = req.validated;

        if (receiverId === req.user.id) {
            throw new ApiError(400, "You cannot send a swap to yourself");
        }

        const swap = await swapDao.createSwap({
            senderId: req.user.id,
            receiverId,
            offeredSkills,
            requestedSkills,
            status: "pending",
        });

        res.status(201).json({ message: "Swap request sent", swap });
    } catch (err) {
        next(err);
    }
};

// GET /swaps/me/sent
exports.getSentSwaps = async (req, res, next) => {
    try {
        const swaps = await swapDao.getSentSwaps(req.user.id);
        res.json(swaps);
    } catch (err) {
        next(err);
    }
};

// GET /swaps/me/received
exports.getReceivedSwaps = async (req, res, next) => {
    try {
        const swaps = await swapDao.getReceivedSwaps(req.user.id);
        res.json(swaps);
    } catch (err) {
        next(err);
    }
};

// PATCH /swaps/:id/accept
exports.acceptSwap = async (req, res, next) => {
    try {
        const swap = await swapDao.getSwapById(req.params.id);
        if (swap.receiverId !== req.user.id) {
            throw new ApiError(
                403,
                "You are not authorized to accept this swap"
            );
        }
        const updated = await swapDao.updateSwapStatus(
            req.params.id,
            "accepted"
        );
        res.json({ message: "Swap accepted", swap: updated });
    } catch (err) {
        next(err);
    }
};

// PATCH /swaps/:id/reject
exports.rejectSwap = async (req, res, next) => {
    try {
        const swap = await swapDao.getSwapById(req.params.id);
        if (swap.receiverId !== req.user.id) {
            throw new ApiError(
                403,
                "You are not authorized to reject this swap"
            );
        }
        const updated = await swapDao.updateSwapStatus(
            req.params.id,
            "rejected"
        );
        res.json({ message: "Swap rejected", swap: updated });
    } catch (err) {
        next(err);
    }
};

// PATCH /swaps/:id/cancel
exports.cancelSwap = async (req, res, next) => {
    try {
        const swap = await swapDao.getSwapById(req.params.id);
        if (swap.senderId !== req.user.id) {
            throw new ApiError(
                403,
                "You are not authorized to cancel this swap"
            );
        }
        const updated = await swapDao.updateSwapStatus(
            req.params.id,
            "cancelled"
        );
        res.json({ message: "Swap cancelled", swap: updated });
    } catch (err) {
        next(err);
    }
};
