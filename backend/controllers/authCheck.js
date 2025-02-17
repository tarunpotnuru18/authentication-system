import userModel from "../model/user.js";

export default async function authCheck(req, res) {
  try {
    let userID = req.userID;
    let user = await userModel.findOne({
      _id: userID,
    });
    if (!user) {
      throw new Error("unauthorized request");
    }

    return res.status(200).json({
      success: true,
      user: { ...user._doc, password: undefined },
    });
  } catch (error) {
    console.log("error from authcheck");
    return res.status(401).json({
      success: false,
      message: "unauthorized request",
    });
  }
}
