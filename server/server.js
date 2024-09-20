import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";

// Initialize dotenv to load environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 3001;
const mongoURL = process.env.DATABASE_URL;

// MongoDB connection
mongoose
  .connect(mongoURL)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((e) => {
    console.log(e, "failed to connect to MongoDB");
  });

  const server = app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
// Middleware
app.use(
  cors({
    origin: [process.env.ORIGIN],
    method: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    crendentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());

// Start server

// Error handling middleware
app.use((e, req, res, next) => {
  const statusCode = e.statusCode || 500;
  const message = e.message || "Internal Server Error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

app.get("/api/test", (req, res) => {
  res.send("Test route working");
});
  