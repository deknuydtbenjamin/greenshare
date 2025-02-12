import express from "express";

const router = express.Router();

import userRouter from "./routes/user.routes";

router.use("/api/users", userRouter);

import authRouter from "./routes/auth.routes";

router.use("/api/auth", authRouter);

export default router;
