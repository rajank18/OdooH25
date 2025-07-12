"use strict";

module.exports = (sequelize, DataTypes) => {
    const Swap = sequelize.define(
        "Swap",
        {
            requesterId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: "users",
                    key: "id",
                },
            },
            recipientId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: "users",
                    key: "id",
                },
            },
            offeredSkillId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: "skills",
                    key: "id",
                },
            },
            requestedSkillId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: "skills",
                    key: "id",
                },
            },
            message: {
                type: DataTypes.TEXT,
                allowNull: true,
            },
            status: {
                type: DataTypes.ENUM("pending", "accepted", "rejected", "completed", "cancelled"),
                defaultValue: "pending",
            },
            acceptedAt: {
                type: DataTypes.DATE,
                allowNull: true,
            },
            rejectedAt: {
                type: DataTypes.DATE,
                allowNull: true,
            },
            rejectionReason: {
                type: DataTypes.TEXT,
                allowNull: true,
            },
            completedAt: {
                type: DataTypes.DATE,
                allowNull: true,
            },
        },
        {
            tableName: "swaps",
            timestamps: true,
        }
    );

    // Associations
    Swap.associate = (models) => {
        Swap.belongsTo(models.User, {
            foreignKey: "requesterId",
            as: "requester",
        });

        Swap.belongsTo(models.User, {
            foreignKey: "recipientId",
            as: "recipient",
        });

        Swap.belongsTo(models.Skill, {
            foreignKey: "offeredSkillId",
            as: "offeredSkill",
        });

        Swap.belongsTo(models.Skill, {
            foreignKey: "requestedSkillId",
            as: "requestedSkill",
        });

        // A swap can have feedback from both users
        Swap.hasMany(models.Feedback, {
            foreignKey: "swapId",
            as: "feedback",
        });
    };

    return Swap;
}; 