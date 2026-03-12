import express from "express";
import { userRegister, userLogin } from "../Controllers/auth.Controllers";

const router = express.Router();

router.post("/Register", (req, res) => {
    res.send("Register" , userRegister);``
})

router.post("/Login", (req, res) => {
    res.send("Login", userLogin);
})

export default router;