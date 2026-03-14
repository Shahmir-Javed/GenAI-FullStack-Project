import User from "../models/user.model.js";

export async function getMeController(req, res) {
    const user = await User.findById(req.user.id).select("-password");
    res.status(200).json({
        message: "User fetched successfully",
        User: {
            success: true,
            user
        }
    });
}