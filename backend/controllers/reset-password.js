import bcrypt from "bcryptjs";
import userModel from "../model/user.js";

export default async function resetPassword(req, res) {
  try {
    let { email, token, newPassword } = req.body;
    let user = await userModel.findOne({
      email,
      resetPasswordTokenExpiresAt: { $gt: Date.now() },
    });
    if (!user) {
      throw new Error("invalid credentials");
    }
    let result = await bcrypt.compare(token, user.resetPasswordToken);
    if (!result) {
      throw new Error("invalid token");
    }
    let hashedPassword = await bcrypt.hash(newPassword, 8);
    user.password = hashedPassword;
    user.resetPasswordToken = undefined;
    user.resetPasswordTokenExpiresAt = undefined;
    await user.save();
    res.status(200).json({
      message: "password changed successfully",
      success: true,
    });
  } catch (error) {
    console.log("error from reset password");
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
}
