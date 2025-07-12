'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      username: { type: Sequelize.STRING, allowNull: false, unique: true },
      email: { type: Sequelize.STRING, allowNull: false, unique: true },
      location: Sequelize.STRING,
      profilePhoto: Sequelize.STRING,
      availability: Sequelize.STRING,
      isPublic: { type: Sequelize.BOOLEAN, defaultValue: true },
      role: { type: Sequelize.ENUM('user', 'admin'), defaultValue: 'user' },
      status: { type: Sequelize.ENUM('active', 'banned'), defaultValue: 'active' },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('users');
  }
};
