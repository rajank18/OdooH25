const messageDao = require("../dao/message.dao");
const ApiError = require("../utils/ApiError");

// GET /messages - Admin only
exports.getMessages = async (req, res, next) => {
    try {
        if (req.user.role !== "admin") {
            throw new ApiError(403, "Access denied. Admins only.");
        }

        const messages = await messageDao.getAllMessages();
        res.json(messages);
    } catch (err) {
        next(err);
    }
};

exports.createPlatformMessage = async (req, res, next) => {
    try {
        if (req.user.role !== "admin") {
            throw new ApiError(
                403,
                "Only admins can post platform-wide messages"
            );
        }

        const { title, content, type } = req.validated;

        const msg = await messageDao.createPlatformMessage({
            title,
            content,
            type,
        });

        res.status(201).json({ message: "Message broadcasted", data: msg });
    } catch (err) {
        next(err);
    }
};
