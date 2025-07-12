"use strict";
const bcrypt = require("bcrypt");

module.exports = {
    async up(queryInterface, Sequelize) {
        const now = new Date();
        const hashedPassword = await bcrypt.hash("Test@123", 10);

        // Users
        const users = [
            {
                username: "admin",
                email: "admin@example.com",
                password: hashedPassword,
                location: "Admin City",
                availability: "full-time",
                role: "admin",
                isPublic: true,
                status: "active",
                isBanned: false,
                createdAt: now,
                updatedAt: now,
            },
            {
                username: "alice",
                email: "alice@example.com",
                password: hashedPassword,
                location: "New York",
                availability: "weekends",
                isPublic: true,
                role: "user",
                status: "active",
                isBanned: false,
                createdAt: now,
                updatedAt: now,
            },
            {
                username: "bob",
                email: "bob@example.com",
                password: hashedPassword,
                location: "London",
                availability: "evenings",
                isPublic: true,
                role: "user",
                status: "active",
                isBanned: false,
                createdAt: now,
                updatedAt: now,
            },
        ];

        try {
            await queryInterface.bulkInsert("users", users);
        } catch (error) {
            console.error("User insert failed:", error);
            throw error;
        }

        // Fetch inserted user IDs
        const [adminUser] = await queryInterface.sequelize.query(
            `SELECT id FROM users WHERE username = 'admin'`
        );
        const [aliceUser] = await queryInterface.sequelize.query(
            `SELECT id FROM users WHERE username = 'alice'`
        );
        const [bobUser] = await queryInterface.sequelize.query(
            `SELECT id FROM users WHERE username = 'bob'`
        );

        const adminId = adminUser[0].id;
        const aliceId = aliceUser[0].id;
        const bobId = bobUser[0].id;

        // Skills
        const skills = [
            {
                name: "Photoshop",
                description: "Photo editing software",
                isApproved: true,
                createdAt: now,
                updatedAt: now,
            },
            {
                name: "Excel",
                description: "Spreadsheets & data analysis",
                isApproved: true,
                createdAt: now,
                updatedAt: now,
            },
            {
                name: "Guitar",
                description: "Musical instrument",
                isApproved: false,
                createdAt: now,
                updatedAt: now,
            },
        ];

        await queryInterface.bulkInsert("skills", skills);

        const [photoshopSkill] = await queryInterface.sequelize.query(
            `SELECT id FROM skills WHERE name = 'Photoshop'`
        );
        const [excelSkill] = await queryInterface.sequelize.query(
            `SELECT id FROM skills WHERE name = 'Excel'`
        );
        const [guitarSkill] = await queryInterface.sequelize.query(
            `SELECT id FROM skills WHERE name = 'Guitar'`
        );

        // User Skills
        const userSkills = [
            {
                userId: aliceId,
                skillId: photoshopSkill[0].id,
                type: "offered",
                createdAt: now,
                updatedAt: now,
            },
            {
                userId: aliceId,
                skillId: excelSkill[0].id,
                type: "wanted",
                createdAt: now,
                updatedAt: now,
            },
            {
                userId: bobId,
                skillId: excelSkill[0].id,
                type: "offered",
                createdAt: now,
                updatedAt: now,
            },
            {
                userId: bobId,
                skillId: photoshopSkill[0].id,
                type: "wanted",
                createdAt: now,
                updatedAt: now,
            },
        ];

        await queryInterface.bulkInsert("user_skills", userSkills);

        // Swap Requests
        const swaps = [
            {
                requesterId: aliceId,
                receiverId: bobId,
                status: "pending",
                createdAt: now,
                updatedAt: now,
            },
        ];

        await queryInterface.bulkInsert("swap_requests", swaps);

        const [swap] = await queryInterface.sequelize.query(
            `SELECT id FROM swap_requests`
        );

        // Swap Skills (Junction table)
        const photoshopId = photoshopSkill[0].id;
        const excelId = excelSkill[0].id;
        let swapId = swap[0].id;

        await queryInterface.bulkInsert("swap_skills", [
            {
                swapId: swapId,
                skillId: photoshopId, // example: offered by alice
                fromUser: aliceId,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                swapId: swapId,
                skillId: excelId, // example: wanted from bob
                fromUser: bobId,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);

        // Messages (Platform Announcements)
        await queryInterface.bulkInsert("platform_messages", [
            {
                title: "Welcome to SkillSwap!",
                content: "The platform is now live.",
                createdAt: now,
                updatedAt: now,
            },
        ]);
    },

    async down(queryInterface) {
        await queryInterface.bulkDelete("messages", null);
        await queryInterface.bulkDelete("swap_skills", null);
        await queryInterface.bulkDelete("swap_requests", null);
        await queryInterface.bulkDelete("user_skills", null);
        await queryInterface.bulkDelete("skills", null);
        await queryInterface.bulkDelete("users", null);
    },
};
