// models/userSkill.js
"use strict";

module.exports = (sequelize, DataTypes) => {
    const UserSkill = sequelize.define(
        "UserSkill",
        {
            userId: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            skillId: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            type: {
                type: DataTypes.ENUM("offered", "wanted"),
                allowNull: false,
            },
        },
        {
            tableName: "user_skills",
            timestamps: true,
        }
    );

    UserSkill.associate = (models) => {
        UserSkill.belongsTo(models.User, { foreignKey: "userId" });
        UserSkill.belongsTo(models.Skill, { foreignKey: "skillId" });
    };

    return UserSkill;
};
