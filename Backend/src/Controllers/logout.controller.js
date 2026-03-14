import BlacklistToken from "../models/blacklist.model.js";

async function logoutUserController(req, res) {
    const token = req.cookies.token;

    if (token) {
        await BlacklistToken.create({ token });
        res.clearCookie("token");
        res.status(200).json({ message: "User logged out successfully" });
    }
}

export default logoutUserController