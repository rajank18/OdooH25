"use strict";
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("activity_logs", {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            userId: {
                type: Sequelize.INTEGER,
                references: { model: "users", key: "id" },
                onDelete: "CASCADE",
            },
            actionType: {
                type: Sequelize.ENUM(
                    "skill",
                    "swap",
                    "feedback",
                    "admin",
                    "auth",
                    "report"
                ),
                allowNull: false,
            },
            actionDetail: { type: Sequelize.TEXT, allowNull: false },
            metadata: Sequelize.JSON,
            createdAt: Sequelize.DATE,
            updatedAt: Sequelize.DATE,
        });
    },
    async down(queryInterface) {
        await queryInterface.dropTable("activity_logs");
    },
};
