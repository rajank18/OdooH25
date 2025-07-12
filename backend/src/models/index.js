"use strict";

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const sequelize = require("../config/db"); // centralized Sequelize instance
const basename = path.basename(__filename);
const db = {};

// Load all files ending with `.model.js`
fs.readdirSync(__dirname)
    .filter((file) => file !== basename && file.endsWith(".model.js"))
    .forEach((file) => {
        const model = require(path.join(__dirname, file))(
            sequelize,
            Sequelize.DataTypes
        );
        db[model.name] = model;
    });

// Run associations if present
Object.keys(db).forEach((modelName) => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
