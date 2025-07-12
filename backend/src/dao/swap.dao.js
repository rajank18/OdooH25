// File: src/dao/swap.dao.js
const { SwapRequest, User, Skill } = require("../models");
const ApiError = require("../utils/ApiError");

const createSwap = async (data) => {
    return await SwapRequest.create(data);
};

const getSwapById = async (id) => {
    const swap = await SwapRequest.findByPk(id);
    if (!swap) throw new ApiError(404, "Swap not found");
    return swap;
};

const getSentSwaps = async (userId) => {
    return await SwapRequest.findAll({ where: { senderId: userId } });
};

const getReceivedSwaps = async (userId) => {
    return await SwapRequest.findAll({ where: { receiverId: userId } });
};

const updateSwapStatus = async (id, status) => {
    const swap = await getSwapById(id);
    return await swap.update({ status });
};

module.exports = {
    createSwap,
    getSwapById,
    getSentSwaps,
    getReceivedSwaps,
    updateSwapStatus,
};
