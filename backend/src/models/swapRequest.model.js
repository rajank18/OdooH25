// models/swapRequest.js
"use strict";

module.exports = (sequelize, DataTypes) => {
    const SwapRequest = sequelize.define(
        "SwapRequest",
        {
            requesterId: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            receiverId: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            status: {
                type: DataTypes.ENUM(
                    "pending",
                    "accepted",
                    "rejected",
                    "cancelled"
                ),
                defaultValue: "pending",
            },
        },
        {
            tableName: "swap_requests",
            timestamps: true,
        }
    );

    SwapRequest.associate = (models) => {
        SwapRequest.belongsTo(models.User, {
            foreignKey: "requesterId",
            as: "Requester",
        });
        SwapRequest.belongsTo(models.User, {
            foreignKey: "receiverId",
            as: "Receiver",
        });
        SwapRequest.hasMany(models.SwapSkill, {
            foreignKey: "swapId",
            as: "swapSkills",
        });
        SwapRequest.hasMany(models.SwapFeedback, {
            foreignKey: "swapId",
            as: "feedbacks",
        });
    };

    return SwapRequest;
};
