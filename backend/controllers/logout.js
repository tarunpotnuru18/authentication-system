export default async function logOut(req, res) {
  try {
    res.clearCookie("token");
    res.status(200).json({ success: true, message: "logged out successfully" });
  } catch (err) {
    res.status(400).json({ success: false, message: error.message });
  }
}
