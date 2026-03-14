import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "username already taken"],
        unique: true,
    },
    email: {
        type: String,
        required: [true, "account already exists"],
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
});

const User = mongoose.model("User", userSchema);
export default User;