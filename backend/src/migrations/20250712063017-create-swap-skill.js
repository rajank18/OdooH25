"use strict";
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("swap_skills", {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            swapId: {
                type: Sequelize.INTEGER,
                references: { model: "swap_requests", key: "id" },
                onDelete: "CASCADE",
            },
            skillId: {
                type: Sequelize.INTEGER,
                references: { model: "skills", key: "id" },
                onDelete: "CASCADE",
            },
            fromUser: {
                type: Sequelize.INTEGER,
                references: { model: "users", key: "id" },
                onDelete: "CASCADE",
            },
            createdAt: Sequelize.DATE,
            updatedAt: Sequelize.DATE,
        });
    },
    async down(queryInterface) {
        await queryInterface.dropTable("swap_skills");
    },
};
