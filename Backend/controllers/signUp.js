const user = require("../models/userModel");
const bcrypt = require("bcrypt");

exports.signUp = async (req, res) => {
    try {
        const { username, email, password, role } = req.body;

        const confirmUser = await user.findOne({ email });

        if (confirmUser) {
            return res.status(500).json({
                success: false,
                message: "User already exists"
            });
        }

        let hashedPassword;
        try {
            hashedPassword = await bcrypt.hash(password, 10);
        } catch (err) {
            return res.status(500).json({
                success: false,
                message: "Password cannot be hashed"
            });
        }

        const newUser = await user.create({ username, email, password: hashedPassword, role });
        return res.status(200).json({
            success: true,
            message: "User registered successfully"
        });

    } catch (err) {
        return res.status(500).json({
            success: false,
            body: err,
            message: "Internal error"
        });
    }
};
