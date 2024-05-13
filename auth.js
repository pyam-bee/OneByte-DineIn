import User from "../entities/user.js";

export async function signup(req, res) {
  const { email, phone, username, password, user_type } = req.body;
  try {
    const isExist = await User.findOne({ email: email, user_type: "Customer" });
    if (isExist) {
      return res.status(400).json({ message: "User already exists" });
    }
    const user = new User({
      email,
      password,
      phone,
      username,
      user_type,
    });
    const response = await user.save();
    return res.status(201).json({ message: "Success", data: response });
  } catch (err) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function signin(req, res) {
  try {
    const { email, password, user_type } = req.body;
    const isExist = await User.findOne({
      email,
      password,
      user_type,
    });
    if (isExist)
      return res.status(200).json({ message: "Success", user: isExist });
    return res.status(401).json({ message: "Invalid Credentials" });
  } catch (err) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
