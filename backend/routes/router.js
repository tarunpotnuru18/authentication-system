import express from "express";
import {
  signUp,
  signIn,
  resetPassword,
  verifyEmail,
  forgotPassword,
  authenticateUser,
  authCheck,
  logOut,
} from "../controllers/index.js";
import jwtVerify from "../middlewares/jwtVerify.js";

let router = express.Router();

router.post("/signup", signUp);
router.post("/signin", signIn);
router.post("/verify-email", verifyEmail);
router.post("/reset-password", resetPassword);
router.post("/forgot-password", forgotPassword);
router.post("/authenticate-User", authenticateUser);
router.post("/authcheck", jwtVerify, authCheck);
router.post("/logout", logOut);
export default router;
