import express from "express";
import roleActions from "../modules/role/roleActions";
const router = express.Router();

router.post("/", roleActions.add);

router.get("/", roleActions.browse);

router.delete("/:id", roleActions.destroy);

export default router;
