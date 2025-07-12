// models/swapSkill.js
"use strict";

module.exports = (sequelize, DataTypes) => {
    const SwapSkill = sequelize.define(
        "SwapSkill",
        {
            swapId: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            skillId: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            fromUser: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
        },
        {
            tableName: "swap_skills",
            timestamps: true,
        }
    );

    SwapSkill.associate = (models) => {
        SwapSkill.belongsTo(models.SwapRequest, { foreignKey: "swapId" });
        SwapSkill.belongsTo(models.Skill, { foreignKey: "skillId" });
        SwapSkill.belongsTo(models.User, { foreignKey: "fromUser" });
    };

    return SwapSkill;
};
