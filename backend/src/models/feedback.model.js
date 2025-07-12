"use strict";

module.exports = (sequelize, DataTypes) => {
    const Feedback = sequelize.define(
        "Feedback",
        {
            swapId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: "swaps",
                    key: "id",
                },
            },
            reviewerId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: "users",
                    key: "id",
                },
            },
            reviewedId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: "users",
                    key: "id",
                },
            },
            rating: {
                type: DataTypes.INTEGER,
                allowNull: false,
                validate: {
                    min: 1,
                    max: 5,
                },
            },
            comment: {
                type: DataTypes.TEXT,
                allowNull: true,
            },
            isEdited: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
            },
            editedAt: {
                type: DataTypes.DATE,
                allowNull: true,
            },
        },
        {
            tableName: "feedback",
            timestamps: true,
            indexes: [
                {
                    unique: true,
                    fields: ["swapId", "reviewerId"],
                },
            ],
        }
    );

    // Associations
    Feedback.associate = (models) => {
        Feedback.belongsTo(models.Swap, {
            foreignKey: "swapId",
            as: "swap",
        });

        Feedback.belongsTo(models.User, {
            foreignKey: "reviewerId",
            as: "reviewer",
        });

        Feedback.belongsTo(models.User, {
            foreignKey: "reviewedId",
            as: "reviewed",
        });
    };

    return Feedback;
}; 