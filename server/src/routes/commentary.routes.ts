import express from "express";

const router = express.Router();

import commentaryActions from "../modules/commentary/commentaryActions";

router.post("/", commentaryActions.add);
router.get("/:planteId", commentaryActions.browse);

export default router;
