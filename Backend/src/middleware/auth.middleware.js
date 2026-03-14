import jwt from "jsonwebtoken";
import BlacklistToken from "../models/blacklist.model.js";


export async function authMiddleware (req, res, next){
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    const checkBlacklistToken = await BlacklistToken.findOne({ token });
    if (checkBlacklistToken) {
        return res.status(401).json({ message: "Unauthorized" });
        
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({ message: "Unauthorized" });
    }
};

