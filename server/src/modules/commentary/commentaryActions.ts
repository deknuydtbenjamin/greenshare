import type { RequestHandler } from "express";
import commentaryRepository from "./commentaryRepository";

const add: RequestHandler = async (req, res, next) => {
  try {
    const newCommentary = {
      com_content: req.body.com_content,
      plante_id: Number.parseInt(req.body.plante_id),
      user_id: Number.parseInt(req.body.user_id),
    };
    const insertId = await commentaryRepository.create(newCommentary);

    res.status(201).json({
      id: insertId,
      message: "commentaire ajouter",
    });
  } catch (err) {
    next(err);
  }
};
const browse: RequestHandler = async (req, res, next) => {
  try {
    const { planteId } = req.params;
    const commentary = await commentaryRepository.read(Number(planteId));

    res.json(commentary);
  } catch (err) {
    next(err);
  }
};

export default { add, browse };
