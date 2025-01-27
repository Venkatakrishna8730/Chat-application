import path from "path";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();

import authRoutes from "./routes/authRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";
import connectDB from "./db/connectdb.js";
import userRouter from "./routes/userRoutes.js";
import cookieParser from "cookie-parser";

import { app, server } from "./socket/socket.js";

const __dirname = path.resolve();

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: "https://chat-application-o3kx.onrender.com/",
    credentials: true,
  })
);
const PORT = process.env.PORT || 8000;

app.use(express.static(path.join(__dirname, "/frontend/dist")));
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRouter);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

server.listen(PORT, () => {
  connectDB();
  console.log(`listening in the port ${PORT}`);
});
