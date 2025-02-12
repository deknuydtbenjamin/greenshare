import type { RequestHandler } from "express";
import roleRepository from "./roleRepository";

const add: RequestHandler = async (req, res, next) => {
  try {
    const insertId = await roleRepository.create(req.body);
    res.status(201).json({
      id: insertId,
      message: "Role crée",
    });
  } catch (err) {
    next(err);
  }
};

export default { add };
