// models/swapFeedback.js
"use strict";

module.exports = (sequelize, DataTypes) => {
    const SwapFeedback = sequelize.define(
        "SwapFeedback",
        {
            swapId: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            givenBy: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            rating: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            comments: DataTypes.TEXT,
        },
        {
            tableName: "swap_feedback",
            timestamps: true,
        }
    );

    SwapFeedback.associate = (models) => {
        SwapFeedback.belongsTo(models.User, { foreignKey: "givenBy" });
        SwapFeedback.belongsTo(models.SwapRequest, { foreignKey: "swapId" });
    };

    return SwapFeedback;
};
