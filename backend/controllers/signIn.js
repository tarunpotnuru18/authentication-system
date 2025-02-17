import zod from "zod";
import zodErrorFormatter from "../utils/zodError.js";
import userModel from "../model/user.js";
import { sendAuthenticationEmail } from "../email-system/email.js";
import tokenGenerator from "../utils/tokenGenerator.js";
import bcrypt from "bcryptjs";
export default async function signin(req, res) {

  try {
    let { email, password } = req.body;
    let requiredSchema = await zod.object({
      email: zod
        .string("email must be a string")
        .email("email is not in correct format"),
      password: zod
        .string("password must be a string")
        .min(3, "password is to short"),
    });

    let schemaValidation = await requiredSchema.safeParse({ email, password });
    if (schemaValidation.success === false) {
      throw new Error(zodErrorFormatter(schemaValidation.error.issues));
    }

    let user = await userModel.findOne({
      email,
    });
    if (!user) {
      throw new Error("user doesnt exist");
    }
    let token = tokenGenerator(5);

    let hashedToken = await bcrypt.hash(token.toString(), 9);
    user.twoFactorToken = hashedToken;
    user.twoFactorTokenExpiresAt = Date.now() + 10 * 60 * 60 * 1000;
    await user.save();
    
    sendAuthenticationEmail(user.email, user.userName, token);
    res
      .status(200)
      .json({ success: true, message: "sucessfully signed in and email sent" });
  } catch (error) {
    console.log("error from siginin", error.message);
    res.status(400).json({ success: false, message: error.message });
  }
}
