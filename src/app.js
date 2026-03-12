import express from "express";
import dotenv from "dotenv";
import router from "./routes/auth.routes.js";

dotenv.config();
const app = express();
app.use(express.json());

app.use("/api/v1/auth", router);

export default app;