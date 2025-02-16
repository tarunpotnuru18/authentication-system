import zod from "zod";
import zodErrorFormatter from "../utils/zodError.js";
import userModel from "../model/user.js";
import bcrypt from "bcryptjs";
import jwtGenerator from "../utils/jwtGenerator";

export default async function verifyEmail(req, res) {
  try {
    let { email, token } = req.body();
    let requiredSchema = zod.object({
      email: zod.email("email is not in correct format"),
      token: zod.string("token must be a string"),
    });
    let schemaValidation = requiredSchema.safeParse(req.body);
    if (schemaValidation.success === false) {
      throw new Error(zodErrorFormatter(schemaValidation.error.issues));
    }
    let user = await userModel.findOne({
      email,
      verificationTokenExpiresAt: { $gt: Date.now() },
    });

    if (!user) {
      throw new Error("invalid credentials");
    }
    let result = await bcrypt.compare(token, user.verificationToken);
    if (!result) {
      throw new Error("invalid token");
    }
    user.verificationToken = undefined;
    user.verificationTokenExpiresAt = undefined;
    user.save();
    res.status(200).json({
      success: true,
      message: "verification successful",
    });
  } catch (error) {
    console.log("error from verify-email", error.message);
    res.status(400).json({ success: false, message: error.message });
  }
}
