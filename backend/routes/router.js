import signUp from "../controllers/signUp.js";
import express from "express";
let router = express.Router();

router.post("/signup", signUp);
export default router;
