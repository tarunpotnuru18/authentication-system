export default function tokenGenerator(length) {
  let token =
    Math.floor(
      Math.random() * (Math.pow(10, length) - Math.pow(10, length - 1))
    ) + Math.pow(10, length - 1);
  console.log(token);
  return token;
}
