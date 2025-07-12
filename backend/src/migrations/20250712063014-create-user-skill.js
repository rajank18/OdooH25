"use strict";
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("user_skills", {
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
            skillId: {
                type: Sequelize.INTEGER,
                references: { model: "skills", key: "id" },
                onDelete: "CASCADE",
            },
            type: {
                type: Sequelize.ENUM("offered", "wanted"),
                allowNull: false,
            },
            createdAt: Sequelize.DATE,
            updatedAt: Sequelize.DATE,
        });
    },
    async down(queryInterface) {
        await queryInterface.dropTable("user_skills");
    },
};
