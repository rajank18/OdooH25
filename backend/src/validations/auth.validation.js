const { z } = require("zod");

const registerSchema = z.object({
    username: z.string().min(3, "Username must be at least 3 characters"),
    email: z.string().email("Invalid email"),
    password: z.string().min(6, "Password must be at least 6 characters"),
});

const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(1),
});

module.exports = { registerSchema, loginSchema };
