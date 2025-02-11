import express from "express";
import {
  hashPassword,
  passwordCompare,
} from "../middlewares/hashPassword.middleware";
import userActions from "../modules/user/userActions";

const router = express.Router();

router.post("/", hashPassword, userActions.add);

export default router;
