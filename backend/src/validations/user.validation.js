// validations/user.validation.js
const { z } = require("zod");

const updateUserSchema = z.object({
    location: z.string().optional(),
    profilePhoto: z.string().url("Invalid URL").optional(),
    availability: z.string().optional(),
    isPublic: z.boolean().optional(),
});

module.exports = { updateUserSchema };
