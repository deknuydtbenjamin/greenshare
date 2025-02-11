import argon2 from "argon2";
import type { RequestHandler } from "express";

export const passwordHashing = async (password: string) => {
  const hashing: string = await argon2.hash(password);

  return hashing;
};

export const hashPassword: RequestHandler = async (req, res, next) => {
  const { hashpassword } = req.body;
  const hashedPassword: string = await passwordHashing(req.body.password);
  if (hashedPassword) {
    req.body.password = hashedPassword;
    next();
  }
};
