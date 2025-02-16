import mongoose from "mongoose";

let userSchema = new mongoose.Schema({
  userName: { type: String, required: true },
  email: { type: String, required: true,unique:true },
  password: { type: String, required: true },
  isVerified: { type: Boolean, default: false },
  verificationToken: { type: String },
  verificationTokenExpiresAt: { type: Date },
  resetPasswordToken: { type: String },
  resetPasswordTokenExpiresAt: { type: String },
});

let userModel = mongoose.model("users", userSchema);

export default userModel;
