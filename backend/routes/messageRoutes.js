import express from "express";
import verifyToken from "../middlewares/verifyToken.js";
import { sendMessage, getMessages } from "../controllers/messageControllers.js";

const router = express.Router();

router.get("/:id", verifyToken, getMessages);
router.post("/send/:id", verifyToken, sendMessage);

export default router;
