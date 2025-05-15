import type { RequestHandler } from "express";
import type {
  DecodedTokenType,
  PayloadType,
  UserType,
} from "../../lib/definitions";
import authActions from "../auth/authActions";
import userRepository from "./userRepository";

const add: RequestHandler = async (req, res, next) => {
  const newUser = req.body;

  try {
    const insertId: number = await userRepository.create(newUser);

    res.status(201).json({
      message: "bonjour",
      id: insertId,
    });
  } catch (err) {
    next(err);
  }
};

const readPasswordByUserName: RequestHandler = async (req, res, next) => {
  try {
    const userFromDB: UserType | null = await userRepository.readByUsername(
      req.body.username,
    );
    if (!userFromDB) {
      res.status(402);
      return;
    }

    req.body.passwordDB = userFromDB.password;
    next();
  } catch (err) {
    next(err);
  }
};

const readTokenRoleByUsername: RequestHandler = async (req, res, next) => {
  try {
    const decodedToken = authActions.decodeToken(
      req.cookies.auth_token,
    ) as PayloadType;

    const userRole = await userRepository.readRoleByUsername(
      decodedToken?.username,
    );

    if (userRole !== 1) {
      res.json({ authentified: false });
    } else {
      res.json({ authentified: true });
    }
  } catch (err) {
    next(err);
  }
};

export default { add, readPasswordByUserName, readTokenRoleByUsername };
