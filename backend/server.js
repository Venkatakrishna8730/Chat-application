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

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
const PORT = process.env.PORT || 8000;

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRouter);

server.listen(PORT, () => {
  connectDB();
  console.log(`listening in the port ${PORT}`);
});
