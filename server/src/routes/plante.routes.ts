import express from "express";
import image from "../modules/image/imageActions";
import planteActions from "../modules/plante/planteActions";
const router = express.Router();

router.post("/", image.uploadController, planteActions.add);
router.get("/", planteActions.read);

router.get("/teaser", planteActions.browse);

export default router;
