import express from "express";
import verifyToken from "../middlewares/verifyToken.js";
import getUsers from "../controllers/userControllers.js";
const router = express.Router();

router.get("/", verifyToken, getUsers);

export default router;
