import type { RequestHandler } from "express";
import jwt from "jsonwebtoken";
import { JwtEncode } from "../../helpers/jwt.helper";

const login: RequestHandler = async (req, res, next) => {
  try {
    const { username } = req.body;
    const obj = { username };

    const token = await JwtEncode(obj);

    res.cookie("auth_token", token, {
      secure: false,
      httpOnly: true,
      maxAge: 8640000,
    });
    res.status(200).json({
      message: "Bienvenue",
    });
    return;
  } catch (error) {
    next(error);
  }
};
const logout: RequestHandler = (req, res) => {
  res.clearCookie("auth_token").json({
    message: "déconnexion",
  });
};

export default { login, logout };
