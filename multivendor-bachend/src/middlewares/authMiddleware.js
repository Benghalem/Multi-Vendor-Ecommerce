import jwt from "jsonwebtoken";
import { User } from "../models/useModel.js";
import { AppError } from "./errorHandler.js";

export const protect = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.id).select("-password");
      next();
    } catch (error) {
      throw new AppError("Not authorized ", 401);
    }
  }
  if (!token) {
    throw new AppError("Not token to access this route", 401);
  }
};

export const authorize = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      throw new AppError("You don't have permission to access this route", 403);
    }
    next();
  };
};
