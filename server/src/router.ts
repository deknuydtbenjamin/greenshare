import express from "express";

const router = express.Router();

import userRouter from "./routes/user.routes";

router.use("/api/users", userRouter);

import authRouter from "./routes/auth.routes";

router.use("/api/auth", authRouter);

import roleRouter from "./routes/role.routes";

router.use("/api/roles", roleRouter);

import categoryRouter from "./routes/category.routes";

router.use("/api/category", categoryRouter);

import planteRouter from "./routes/plante.routes";

router.use("/api/plantes", planteRouter);

export default router;
