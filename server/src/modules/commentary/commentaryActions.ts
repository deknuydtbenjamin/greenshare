import type { RequestHandler } from "express";
import commentaryRepository from "./commentaryRepository";

const add: RequestHandler = async (req, res, next) => {
  try {
    const newCommentary = {
      com_content: req.body.com_content,
      plante_id: req.body.plante_id,
      user_id: req.body.user_id,
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

export default { add };
