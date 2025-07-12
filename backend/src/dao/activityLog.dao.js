// File: src/dao/activityLog.dao.js
const { ActivityLog } = require("../models");

const logAction = async (data) => {
    return await ActivityLog.create(data);
};

const getLogs = async () => {
    return await ActivityLog.findAll();
};

module.exports = {
    logAction,
    getLogs,
};
