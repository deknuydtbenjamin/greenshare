import type { RequestHandler } from "express";
import categoryRepository from "./categoryRepository";

const add: RequestHandler = async (req, res, next) => {
  try {
    const insertId = await categoryRepository.create(req.body);
    res.status(201).json({
      id: insertId,
      message: "Categorie crée",
    });
  } catch (err) {
    next(err);
  }
};

const browse: RequestHandler = async (req, res, next) => {
  try {
    const categoryDB = await categoryRepository.read();
    res.status(200).json(categoryDB);
  } catch (err) {
    next(err);
  }
};

export default { add, browse };
