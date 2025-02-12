import express from "express";
import planteActions from "../modules/plante/planteActions";

const router = express.Router();

router.post("/", planteActions.add);

export default router;
