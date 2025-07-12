// validations/swap.validation.js
const { z } = require("zod");

const createSwapSchema = z.object({
    receiverId: z.number(),
    offeredSkills: z.array(z.number()).min(1),
    requestedSkills: z.array(z.number()).min(1),
});

const feedbackSchema = z.object({
    swapId: z.number(),
    rating: z.number().min(1).max(5),
    comments: z.string().optional(),
});

module.exports = { createSwapSchema, feedbackSchema };
