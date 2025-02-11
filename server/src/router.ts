import express from "express";

const router = express.Router();

import userRouter from "./routes/user.routes";

router.use("/api/users", userRouter);

export default router;
