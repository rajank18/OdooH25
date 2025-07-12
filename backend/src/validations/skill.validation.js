// validations/skill.validation.js
const { z } = require("zod");

const createSkillSchema = z.object({
    name: z.string().min(2),
    description: z.string().optional(),
});

const approveSkillSchema = z.object({
    skillId: z.number(),
});

module.exports = { createSkillSchema, approveSkillSchema };
