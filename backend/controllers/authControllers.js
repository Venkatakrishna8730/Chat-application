import user from "../models/userSchema.js";
import bcrypt from "bcryptjs";
import generateToken from "../utils/generateToken.js";
import jwt from "jsonwebtoken";

const signup = async (req, res) => {
  try {
    const { fullName, username, password, confirmPassword, gender } = req.body;

    if (password !== confirmPassword) {
      res.status(400).json({ error: "passwords doesn't match" });
    }

    const findUser = await user.findOne({ username });
    if (findUser) {
      console.log("Invalid username: User already exists");
      return res.status(400).json({ error: "User already exists" });
    }

    const maleProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const femaleProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await user.create({
      fullName,
      username,
      password: hashedPassword,
      gender,
      profilePic: gender === "male" ? maleProfilePic : femaleProfilePic,
    });

    generateToken(newUser._id, res);

    res.status(200).json({
      _id: newUser._id,
      fullName: newUser.fullName,
      username: newUser.username,
    });
  } catch (error) {
    console.log("error in signup controller", error.message);
    res.status(500).json({ error: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const findUser = await user.findOne({ username });

    const isPasswordTrue = await bcrypt.compare(
      password,
      findUser?.password || ""
    );

    if (!findUser || !isPasswordTrue) {
      return res.status(400).json({ error: "Invalid username or password" });
    }

    generateToken(findUser._id, res);

    res.status(200).json({
      _id: findUser._id,
      fullName: findUser.fullName,
      username: findUser.username,
    });
  } catch (error) {
    console.log("error in login controller", error.message);
    res.status(500).json({ error: "Invalid credentials" });
  }
};

const logout = (req, res) => {
  try {
    res.clearCookie("jwt", {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV !== "Development",
    });
    res.status(200).json({ message: "logged out successfully" });
  } catch (error) {
    console.log("error in logout controller", error.message);
    res.status(500).json({ error: "Invalid credentials" });
  }
};

export { signup, login, logout };
