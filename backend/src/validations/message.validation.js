const { z } = require("zod");

const createPlatformMessageSchema = z.object({
    title: z.string().min(3).max(100),
    content: z.string().min(5),
    type: z.enum(["announcement", "notification"]),
});

module.exports = { createPlatformMessageSchema };
