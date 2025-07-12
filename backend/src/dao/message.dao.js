// File: src/dao/message.dao.js
const { Message } = require("../models");

const createMessage = async (data) => {
    return await Message.create(data);
};

const getAllMessages = async () => {
    return await Message.findAll();
};

module.exports = {
    createMessage,
    getAllMessages,
};
