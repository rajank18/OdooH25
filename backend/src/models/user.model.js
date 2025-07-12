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
        },
        {
            tableName: "users",
            timestamps: true,
        }
    );

    // Associations if any
    User.associate = (models) => {
        // Example: User.hasMany(models.Exam);
    };

    return User;
};
