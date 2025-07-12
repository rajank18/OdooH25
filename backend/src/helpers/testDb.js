const sequelize = require("../config/db");

sequelize
    .authenticate()
    .then(() => {
        console.log("✅ Connection has been established successfully.");
        process.exit(0); // success
    })
    .catch((error) => {
        console.error("❌ Unable to connect to the database:", error);
        process.exit(1); // failure
    });
