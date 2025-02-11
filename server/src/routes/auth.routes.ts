import express from "express";
import { passwordCompare } from "../middlewares/hashPassword.middleware";
import userActions from "../modules/user/userActions";

const router = express.Router();

router.post("/login", userActions.readPasswordByUserName, passwordCompare);

export default router;
