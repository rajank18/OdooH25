"use strict";
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("swap_requests", {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            requesterId: {
                type: Sequelize.INTEGER,
                references: { model: "users", key: "id" },
                onDelete: "CASCADE",
            },
            receiverId: {
                type: Sequelize.INTEGER,
                references: { model: "users", key: "id" },
                onDelete: "CASCADE",
            },
            status: {
                type: Sequelize.ENUM(
                    "pending",
                    "accepted",
                    "rejected",
                    "cancelled"
                ),
                defaultValue: "pending",
            },
            createdAt: Sequelize.DATE,
            updatedAt: Sequelize.DATE,
        });
    },
    async down(queryInterface) {
        await queryInterface.dropTable("swap_requests");
    },
};
