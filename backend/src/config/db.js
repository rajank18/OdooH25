const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: process.env.DIALECT || "mysql",
        logging: false,
        dialectOptions: JSON.parse(process.env.DIALECT_OPTIONS || "{}"),
        pool: {
            max: 5,
            min: 0,
            idle: 10000,
        },
    }
);

// Test connection
sequelize
    .authenticate()
    .then(() => console.info(`${new Date()} ✅ Database connection successful`))
    .catch((err) =>
        console.error(`${new Date()} ❌ DB connection error:`, err)
    );

module.exports = sequelize;
