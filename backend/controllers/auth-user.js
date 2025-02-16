import bcrypt from "bcryptjs";
import zod from "zod";
import zodErrorFormatter from "../utils/zodError.js";
import userModel from "../model/user.js";
import jwtGenerator from "../utils/jwtGenerator.js";
export default async function authenticateUser(req, res) {
  try {
    let { email, token } = req.body;
    let requiredSchema = zod.object({
      email: zod.email("invalid email format"),
      token: zod.string("token must be a string"),
    });

    let schemaValidation = requiredSchema.safeParse(req.body);
    if (schemaValidation.success === false) {
      throw new Error(zodErrorFormatter(schemaValidation.error.issues));
    }
    let user = await userModel.findOne({
      email,
      twoFactorTokenExpiresAt: { $gt: Date.now() },
    });
    if (!user) {
      throw new Error("invalid credentials");
    }
    let result = await bcrypt.compare(token, user.twoFactorToken);
    if (!result) {
      throw new Error("invalid token");
    }
    user.twoFactorToken = undefined;
    user.twoFactorTokenExpiresAt = undefined;
    await user.save();
    let jwtToken = jwtGenerator({ userID: user._id });
    res.cookie("token", jwtToken, {
      httpOnly: true, // cookie cannot be accessed by client side scripts

      secure: process.env.NODE_ENV === "production", // cookie will only be set on https

      sameSite: "strict", // cookie will only be set on the same site

      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });
    res.status(200).json({
      success: false,
      message: "two factor authentication sucessful",
    });
  } catch (error) {
    console.log("error from authenticate user: ", error.message);
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
}
