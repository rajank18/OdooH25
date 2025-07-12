// validations/skill.validation.js
const { z } = require("zod");

const createSkillSchema = z.object({
    name: z.string().min(2).max(50),
    description: z.string().min(5).max(255),
});

const approveSkillSchema = z.object({
    skillId: z.number(),
});

module.exports = { createSkillSchema, approveSkillSchema };
