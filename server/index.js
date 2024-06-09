import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { router as userRouter } from "./routes/users.js";

const app = express();
app.use(express.json());
app.use(cors());

const url = "mongodb+srv://1234:1234@cluster0.kmbijch.mongodb.net/blog";
mongoose.connect(url);

const db = mongoose.connection;

// Function to display connection status
const displayConnectionStatus = () => {
  db.once("open", () => {
    console.log("Backend is connected successfully to the database");
  });

  db.on("error", (error) => {
    console.error("Connection error:", error);
  });
};

displayConnectionStatus();

// Use the user router for routes starting with /api
app.use("/api", userRouter);

app.listen(9000, () => {
  console.log("Backend is running successfully on port 9000");
});
