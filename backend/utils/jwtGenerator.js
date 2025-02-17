import jwt from "jsonwebtoken";
export default function jwtGenerator(payload) {
  let token = jwt.sign(payload, process.env.JWT_SECRET);
  return token;
}
