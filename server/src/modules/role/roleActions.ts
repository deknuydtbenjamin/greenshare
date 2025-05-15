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

const browse: RequestHandler = async (req, res, next) => {
  try {
    const roleDB = await roleRepository.read();
    res.status(200).json(roleDB);
  } catch (err) {
    next(err);
  }
};

const destroy: RequestHandler = async (req, res, next) => {
  try {
    const roleId = Number(req.params.id);
    await roleRepository.delete(roleId);
    res.sendStatus(204);
  } catch (error) {}
};

export default { add, browse, destroy };
