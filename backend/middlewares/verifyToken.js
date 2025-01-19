import jwt from "jsonwebtoken";
import user from "../models/userSchema.js";

const verifyToken = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (!token) {
      return res
        .status(401)
        .json({ error: "Unauthorized No token provided here" });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded) {
      return res.status(401).json({ error: "Unauthorized Token invalid" });
    }
    const findUser = await user.findById(decoded.userId);

    if (!findUser) {
      return res.status(401).json({ error: "User not found" });
    }

    req.user = findUser;

    next();
  } catch (error) {
    console.log("error in protected middleware", error.message);
    res.status(500).send("error in the server");
  }
};

export default verifyToken;
