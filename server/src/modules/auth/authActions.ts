import type { RequestHandler } from "express";
import jwt from "jsonwebtoken";
import type { PayloadType } from "../../lib/definitions";

export const JwtEncode = async (payload: PayloadType) => {
  return jwt.sign(payload, process.env.APP_SECRET as string, {
    expiresIn: "24h",
  });
};
const decodeToken = (token: string) => {
  return jwt.decode(token);
};

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

const checkToken: RequestHandler = async (req, res, next) => {
  try {
    const token = req.cookies.auth_token;

    if (!token) {
      res.status(403).json({ authentified: false });
    }

    const verifyToken = jwt.verify(
      req.cookies.auth_token,
      process.env.APP_SECRET as string,
    );
    if (verifyToken) {
      next();
    } else {
      res.json({ authentified: false });
      return;
    }
  } catch (err) {
    next(err);
  }
};

const authWall: RequestHandler = (req, res, next) => {
  const currentToken = req.cookies?.auth_token;

  if (currentToken) {
    next();
  } else {
    res.json({ authentified: false });
    return;
  }
};

export default { login, logout, checkToken, JwtEncode, decodeToken, authWall };
