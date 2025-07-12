"use strict";

module.exports = (sequelize, DataTypes) => {
    const Message = sequelize.define(
        "Message",
        {
            senderId: {
                type: DataTypes.INTEGER,
                allowNull: true, // null for system/platform messages
                references: {
                    model: "users",
                    key: "id",
                },
            },
            recipientId: {
                type: DataTypes.INTEGER,
                allowNull: true, // null for platform-wide messages
                references: {
                    model: "users",
                    key: "id",
                },
            },
            title: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            content: {
                type: DataTypes.TEXT,
                allowNull: false,
            },
            type: {
                type: DataTypes.ENUM("private", "announcement", "notification"),
                defaultValue: "private",
            },
            isPlatformWide: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
            },
            isRead: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
            },
            readAt: {
                type: DataTypes.DATE,
                allowNull: true,
            },
            sentAt: {
                type: DataTypes.DATE,
                defaultValue: DataTypes.NOW,
            },
        },
        {
            tableName: "messages",
            timestamps: true,
        }
    );

    // Associations
    Message.associate = (models) => {
        Message.belongsTo(models.User, {
            foreignKey: "senderId",
            as: "sender",
        });

        Message.belongsTo(models.User, {
            foreignKey: "recipientId",
            as: "recipient",
        });
    };

    return Message;
}; 