const user = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(500).json({
                success: false,
                message: "Please fill in the details carefully"
            });
        }

        const confirmUser = await user.findOne({ email });

        if (!confirmUser) {
            return res.status(401).json({
                success: false,
                message: "User does not exist"
            });
        }

        const payload = {
            email: confirmUser.email,
            id: confirmUser._id,
            role: confirmUser.role
        };

        const passwordMatch = await bcrypt.compare(password, confirmUser.password);

        if (passwordMatch) {
            const token = jwt.sign(payload, process.env.JWT_SECRET, {
                expiresIn: "2h"
            });

            confirmUser.token = token;
            confirmUser.password = undefined;

            const options = {
                expires: new Date(Date.now() + 2 * 60 * 60 * 1000), // 2 hours
                httpOnly: true,
                secure: process.env.NODE_ENV === "production" ? true : false // Set to true in production
            };

            res.cookie("cookie1", token, options).status(200).json({
                success: true,
                token,
                confirmUser,
                message: "Logged in successfully"
            });
        } else {
            return res.status(403).json({
                success: false,
                message: "Password incorrect"
            });
        }
    } catch (err) {
        console.error(err);
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
};
