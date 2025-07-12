// 📁 File: controllers/auth.controller.js
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const userDao = require("../dao/user.dao");
const ApiError = require("../utils/ApiError");

const generateToken = (user) => {
    return jwt.sign(
        { id: user.id, email: user.email, username: user.username },
        process.env.JWT_SECRET,
        { expiresIn: "7d" }
    );
};

exports.register = async (req, res, next) => {
    try {
        const { username, email, password } = req.validated;

        const existing = await userDao.findUserByEmail(email);
        if (existing) throw new ApiError(409, "Email already exists");

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await userDao.createUser({
            username,
            email,
            password: hashedPassword,
        });

        const token = generateToken(newUser);
        res.status(201).json({ message: "User created", token });
    } catch (error) {
        next(error);
    }
};

exports.login = async (req, res, next) => {
    try {
        const { email, password } = req.validated;
        const user = await userDao.findUserByEmail(email);
        if (!user) throw new ApiError(401, "Invalid credentials");

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) throw new ApiError(401, "Invalid credentials");

        const token = generateToken(user);
        res.status(200).json({ message: "Login successful", token });
    } catch (error) {
        next(error);
    }
};
