import express from "express";
import { loginin, signup } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", loginin);

export default router;
