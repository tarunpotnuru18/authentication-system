import zod from "zod";
import zodErrorFormatter from "../utils/zodError.js";
import tokenGenerator from "../utils/tokenGenerator.js";
import { sendVerificationEmail } from "../email-system/email.js";
import userModel from "../model/user.js";
import bcrypt from "bcryptjs";
import jwtGenerator from "../utils/jwtGenerator.js";
export default async function signUp(req, res) {
  try {
    let { userName, email, password } = req.body;

    let requiredSchema = zod.object({
      email: zod.string("invalid datatype").email("email in invalid format"),

      userName: zod.string("invalid datatype").min(5, "username is short"),

      password: zod.string("invalid datatype").min(5, "password is short"),
    });

    let schemaValidation = requiredSchema.safeParse(req.body);

    if (schemaValidation.success === false) {
      console.log();

      throw new Error(zodErrorFormatter(schemaValidation.error.issues));
    }

    let token = tokenGenerator(6);

    let hashedPassword = await bcrypt.hash(password, 8);

    let hashedVerificationToken = await bcrypt.hash(token.toString(), 8);
    const userAlreadyexists = await userModel.findOne({ email });
    if (userAlreadyexists) {
      throw new Error("user already exists");
    }
    let user = await userModel.create({
      email,

      userName,

      password: hashedPassword,

      verificationToken: hashedVerificationToken,

      verificationTokenExpiresAt: Date.now() + 24 * 60 * 60 * 1000,
    });

    await sendVerificationEmail(user.email, user.userName, token);

    const jwtToken = jwtGenerator({ userID: user._id }, process.env.JWT_SECRET);

    res.cookie("token", jwtToken, {
      httpOnly: true, // cookie cannot be accessed by client side scripts

      secure: process.env.NODE_ENV === "production", // cookie will only be set on https

      sameSite: "strict", // cookie will only be set on the same site

      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    res.status(200).json({ success: true, message: "signup successfull" });
  } catch (error) {
    console.log(error);

    console.log(error.message, "from signup");

    res.status(400).json({ success: false, message: error.message });
  }
}
