// models/activityLog.js
"use strict";

module.exports = (sequelize, DataTypes) => {
    const ActivityLog = sequelize.define(
        "ActivityLog",
        {
            userId: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            actionType: {
                type: DataTypes.ENUM(
                    "skill",
                    "swap",
                    "feedback",
                    "admin",
                    "auth",
                    "report"
                ),
                allowNull: false,
            },
            actionDetail: {
                type: DataTypes.TEXT,
                allowNull: false,
            },
            metadata: DataTypes.JSON,
        },
        {
            tableName: "activity_logs",
            timestamps: true,
        }
    );

    ActivityLog.associate = (models) => {
        ActivityLog.belongsTo(models.User, { foreignKey: "userId" });
    };

    return ActivityLog;
};
