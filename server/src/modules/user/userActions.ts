import type { RequestHandler } from "express";
import type { UserType } from "../../lib/definitions";
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

export default { add, readPasswordByUserName };
