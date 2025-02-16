import jwt from "jsonwebtoken";
export default function jwtGenerator(payload, secret) {
  let token = jwt.sign(payload, secret);
  return token;
}
