import jwt from "jsonwebtoken"; // import jwt
import mongoose from "mongoose";

// generate token for user
export const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "30d" });
};

// database connection
export const dbConnect = () =>
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log("MongoDB connected"))
    .catch((error) => {
      console.error("MongoDB connection error: ", error);
    });
