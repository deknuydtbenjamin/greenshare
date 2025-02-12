import express from "express";
import categoryActions from "../modules/category/categoryActions";

const router = express.Router();

router.post("/", categoryActions.add);

router.get("/", categoryActions.browse);

export default router;
