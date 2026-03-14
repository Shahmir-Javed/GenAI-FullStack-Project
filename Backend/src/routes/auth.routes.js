import express from "express";
import { userRegister, userLogin } from "../Controllers/auth.controller.js";
import logoutUserController from "../Controllers/logout.controller.js"
import { authMiddleware } from "../middleware/auth.middleware.js";
import { getMeController } from "../Controllers/getme.controller.js";

const router = express.Router();


router.post("/register", userRegister)


router.post("/login", userLogin)

router.get("/logout", logoutUserController)

router.get("/getme", authMiddleware, getMeController)




export default router;