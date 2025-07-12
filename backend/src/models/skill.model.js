// models/skill.js
"use strict";

module.exports = (sequelize, DataTypes) => {
    const Skill = sequelize.define(
        "Skill",
        {
            name: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
            },
            description: DataTypes.TEXT,
            isApproved: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
            },
        },
        {
            tableName: "skills",
            timestamps: true,
        }
    );

    Skill.associate = (models) => {
        Skill.hasMany(models.UserSkill, {
            foreignKey: "skillId",
            as: "userSkills",
        });
        Skill.hasMany(models.SwapSkill, {
            foreignKey: "skillId",
            as: "swapSkills",
        });
    };

    return Skill;
};
