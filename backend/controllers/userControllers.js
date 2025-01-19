import user from "../models/userSchema.js";

const getUsers = async (req, res) => {
  try {
    const id = req.user._id;
    const allUsers = await user.find({ _id: { $ne: id } }).select("-password");
    res.status(200).json(allUsers);
  } catch (error) {
    console.log("error in getUsers controllers", error.message);
    res.status(500).json({ error: "invalid server error" });
  }
};

export default getUsers;
