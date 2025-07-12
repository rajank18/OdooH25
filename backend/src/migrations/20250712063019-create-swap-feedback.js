"use strict";
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("swap_feedback", {
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
            givenBy: {
                type: Sequelize.INTEGER,
                references: { model: "users", key: "id" },
                onDelete: "CASCADE",
            },
            rating: { type: Sequelize.INTEGER, allowNull: false },
            comments: Sequelize.TEXT,
            createdAt: Sequelize.DATE,
            updatedAt: Sequelize.DATE,
        });
    },
    async down(queryInterface) {
        await queryInterface.dropTable("swap_feedback");
    },
};
