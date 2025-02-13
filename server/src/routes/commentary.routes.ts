import express from "express";

const router = express.Router();

import commentaryActions from "../modules/commentary/commentaryActions";

router.post("/", commentaryActions.add);

export default router;
