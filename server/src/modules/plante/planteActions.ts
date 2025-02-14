import type { RequestHandler } from "express";
import planteRepository from "./planteRepository";

const add: RequestHandler = async (req, res, next) => {
  try {
    const newPlante = {
      title: req.body.title,
      picture: req.body.picture,
      summary: req.body.summary,
      watering: Number.parseInt(req.body.watering),
      plant_exhibition: Number.parseInt(req.body.plant_exhibition),
      category_id: Number.parseInt(req.body.category_id),
      user_id: Number.parseInt(req.body.user_id),
    };

    const inserId = await planteRepository.create(newPlante);
    res.status(201).json({
      id: inserId,
      message: "plante ajouter",
    });
  } catch (err) {
    next(err);
  }
};

const read: RequestHandler = async (req, res, next) => {
  try {
    const plantes = await planteRepository.read();

    res.json(plantes);
  } catch (err) {
    next(err);
  }
};

const browse: RequestHandler = async (req, res, next) => {
  try {
    const plante = await planteRepository.readDiscovery();

    res.json(plante);
  } catch (err) {
    next(err);
  }
};

const readAdmin: RequestHandler = async (req, res, next) => {
  try {
    const plante = await planteRepository.readAdmin();

    res.json(plante);
  } catch (err) {
    next(err);
  }
};

export default { add, read, browse, readAdmin };
