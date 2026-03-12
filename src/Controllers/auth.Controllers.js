import User from "../models/user.model";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { set } from "mongoose";


export async function userRegister(req, res) {
    const { username, email, password } = req.body
    if (!username || !email || password) {
        return res.status(400).json({ message: "All fields are required" })
    }

    const isUserExist = await User.findOne({ email })
    if (isUserExist) {
        return res.status(400).json({ message: "User already exists" })
    }
    const hashedPass = await bcrypt.hash(password, 10)
    const user = await User.create({
        username,
        email,
        password: hashedPass
    })
    const token = jwt.sign({ id: user._id, username: user.username }, process.env.JWT_SECRET, { expiresIn: "1d" })
    res.Cookie("token", token)




    res.status(201).json({
        message: "User created successfully",
        user: {
            id: user._id,
            username: user.username,
            email: user.email
        }
    })

}

export async function userLogin(req, res) {
    const {email, password} = req.body

    if(!email || !password){
        return res.status(400).json({message: "All fields are required"})
    }

    const user = await User.findOne({email})
    if(!user){
        return res.status(400).json({message: "Invalid Email or Password    "})
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password)
    if(!isPasswordCorrect){
        return res.status(400).json({message: "Invalid Email or Password"})
    }

    const token = jwt.sign({id: user._id, username: user.username}, process.env.JWT_SECRET, {expiresIn: "1d"})
    res.cookie("token", token)

    res.status(200).json({
        message: "User logged in successfully",
        user: {
            id: user._id,
            username: user.username,
            email: user.email
        }
    })

}