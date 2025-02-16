import signIn from "../controllers/signIn.js";
import signUp from "../controllers/signUp.js";
import verifyEmail from "../controllers/verify-email.js";
import resetPassword from "../controllers/reset-password.js";
import express from "express";
import forgotPassword from "../controllers/forgot-password.js";
import authenticateUser from "../controllers/auth-user.js";
let router = express.Router();

router.post("/signup", signUp);
router.post("/signin", signIn);
router.post("/verify-email",verifyEmail)
router.post("/reset-password",resetPassword)
router.post("/forgot-password",forgotPassword)
router.post("/authenticateUser",authenticateUser)
export default router;
