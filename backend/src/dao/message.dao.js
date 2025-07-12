// File: src/dao/message.dao.js
const { Message } = require("../models");

const getAllMessages = async () => {
    return await Message.findAll();
};

const createPlatformMessage = async (data) => {
    return await Message.create({
        ...data,
        senderId: null, // system sender
        recipientId: null, // for all users
        isPlatformWide: true,
    });
};


// message.dao.js
module.exports = {
    getAllMessages,
    createPlatformMessage,
};
