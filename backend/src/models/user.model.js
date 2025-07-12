// models/user.js
"use strict";

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define(
        "User",
        {
            username: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
            },
            location: DataTypes.STRING,
            profilePhoto: DataTypes.STRING,
            availability: DataTypes.STRING,
            isPublic: {
                type: DataTypes.BOOLEAN,
                defaultValue: true,
            },
            role: {
                type: DataTypes.ENUM("user", "admin"),
                defaultValue: "user",
            },
            status: {
                type: DataTypes.ENUM("active", "banned"),
                defaultValue: "active",
            },
        },
        {
            tableName: "users",
            timestamps: true,
        }
    );

    User.associate = (models) => {
        User.hasMany(models.UserSkill, { foreignKey: "userId", as: "skills" });
        User.hasMany(models.SwapRequest, {
            foreignKey: "requesterId",
            as: "sentSwaps",
        });
        User.hasMany(models.SwapRequest, {
            foreignKey: "receiverId",
            as: "receivedSwaps",
        });
        User.hasMany(models.SwapFeedback, {
            foreignKey: "givenBy",
            as: "feedbackGiven",
        });
        User.hasMany(models.ActivityLog, { foreignKey: "userId", as: "logs" });
    };

    return User;
};
