
import { sendForgotPasswordEmail } from "../email-system/email.js";
import userModel from "../model/user.js";
import tokenGenerator from "../utils/tokenGenerator.js";
import bcrypt from "bcryptjs";

export default async function forgotPassword(req, res) {
  try {
    let { email } = req.body;
    let user = await userModel.findOne({
      email,
    });
    if (!user) {
      throw new Error("invalid credentials");
    }
    let token = tokenGenerator(6);

    let hashedToken = await bcrypt.hash(token.toString(), 8);
    user.resetPasswordToken = hashedToken;
    user.resetPasswordTokenExpiresAt = Date.now() + 3 * 60 * 60 * 1000;
    await user.save();
    await sendForgotPasswordEmail(user.email,user.userName,token)
    res.status(200).json({
      success: true,
      message: "token sucessfully sent to email please check your email",
    });
  } catch (error) {
    console.log("error in the frogot password", error.message);
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
}
