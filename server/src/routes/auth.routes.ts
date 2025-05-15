import express from "express";
import { passwordCompare } from "../middlewares/hashPassword.middleware";
import authActions from "../modules/auth/authActions";
import userActions from "../modules/user/userActions";

const router = express.Router();

router.post(
  "/login",
  userActions.readPasswordByUserName,
  passwordCompare,
  authActions.login,
);

router.post("/logout", authActions.logout);

router.use(authActions.checkToken, authActions.authWall);

router.get("/adminChecking", userActions.readTokenRoleByUsername);

export default router;
