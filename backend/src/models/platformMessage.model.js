// models/platformMessage.js
"use strict";

module.exports = (sequelize, DataTypes) => {
    const PlatformMessage = sequelize.define(
        "PlatformMessage",
        {
            title: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            content: {
                type: DataTypes.TEXT,
                allowNull: false,
            },
        },
        {
            tableName: "platform_messages",
            timestamps: true,
        }
    );

    return PlatformMessage;
};
