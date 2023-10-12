import usersModel from "../models/users.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const userRegister = async (req, res) => {
  const { username, password } = req.body;
  const user = await usersModel.findOne({ username: username });
  if (user) {
    return res.json({ Message: "user already exist please login" })
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = usersModel({
    username: username,
    password: hashedPassword
  });
  await newUser.save();
  res.json({ message: "User created successfully" });
};

export const userLogin = async (req, res) => {
  const { username, password } = req.body;
  const user = await usersModel.findOne({ username });

  if (!user) {
    return res
      .status(400)
      .json({ message: "Username or password is incorrect" });
  };

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res
      .status(400)
      .json({ message: "Username or password is incorrect" });
  };
  const token = jwt.sign({ id: user.id }, "Secret");
  res.json({ token, userID: user.id })
};

export default { userRegister, userLogin }