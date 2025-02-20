import jwt from "jsonwebtoken";
export default async function jwtVerify(req, res, next) {
  try {
    let { token } = req.cookies;

    if (!token) {
      throw new Error("unauthorized user");
    }
    let verified = jwt.verify(token, process.env.JWT_SECRET);
    if (!verified) {
      throw new Error("unauthorized user");
    }
    req.userID = verified.userID;

    next();
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
}
