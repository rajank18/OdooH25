require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
// const { notFound, errorHandler } = require("./middleware/errorHandler");
// const Router = require("./routes");
const sequelize = require("./config/db.js"); // Import the database connection

const app = express();

app.use(cors());
app.use(express.json({ limit: "30mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve("./public")));

app.get("/", (_req, res) => {
    res.send("Hello World! This is SkillShare-API by Team Eureka.");
});

// app.use(Router);

// app.use(notFound);
// app.use(errorHandler);

module.exports = app;
