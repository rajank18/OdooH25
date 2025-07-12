"use strict";
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("platform_messages", {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            title: { type: Sequelize.STRING, allowNull: false },
            content: { type: Sequelize.TEXT, allowNull: false },
            createdAt: Sequelize.DATE,
            updatedAt: Sequelize.DATE,
        });
    },
    async down(queryInterface) {
        await queryInterface.dropTable("platform_messages");
    },
};
