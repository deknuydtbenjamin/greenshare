import argon2 from "argon2";
import type { RequestHandler } from "express";

export const passwordHashing = async (password: string) => {
  const hashing: string = await argon2.hash(password);

  return hashing;
};

export const hashPassword: RequestHandler = async (req, res, next) => {
  const hashedPassword: string = await passwordHashing(req.body.password);
  if (hashedPassword) {
    req.body.password = hashedPassword;
    next();
  }
};

export const verifyPassword = async (passwordDB: string, password: string) => {
  return await argon2.verify(passwordDB, password);
};

export const passwordCompare: RequestHandler = async (req, res, next) => {
  try {
    const isValid = await verifyPassword(
      req.body.passwordDB,
      req.body.password,
    );

    if (!isValid) {
      res.status(403).json({
        message: "Le couple email / mot de passe est incorrect.",
      });
      return;
    }

    next();
  } catch (e) {
    res.status(500).json({
      message: "Une erreur est survenue. Veuillez réessayer ultérieurement.",
    });
  }
};
