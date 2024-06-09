import { User } from "../models/useModel.js"; // import user model
import bcrypt from "bcrypt"; // import bcrypt
import expressAsyncHandler from "express-async-handler"; // import expressAsyncHandler
import { AppError } from "../middlewares/errorHandler.js";
import { generateToken } from "../utils/utils.js"; // import generateToken

// @add Register a new user
// @router /api/users/register
// @access Public

export const registerUser = expressAsyncHandler(async (req, res, next) => {
  const { name, email, password } = req.body;
  // First check if user already exists
  const userExists = await User.findOne({ email });
  if (userExists) {
    throw new AppError("User already exists", 400);
  }
  const user = await User.create({
    name,
    email,
    password,
  });
  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
    });
  } else {
    throw new AppError("Invalid user data", 400);
  }
});

// @add Login user
// @router /api/users/login
// @access Public
export const loginUser = expressAsyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // First check if user exists
  const user = await User.findOne({ email });

  if (user && (await user.comparePassword(password, user.password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      token: generateToken(user._id),
    });
  } else {
    throw new AppError("Invalid email or password");
  }
});

// @add Get User Profile
// @router /api/users/profile
// @access Private Access
export const profile = expressAsyncHandler(async (req, res) => {
  const { _id } = req.body;
  // First check if user exists
  const user = await User.findById({ _id });
  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      phone: user.phone,
      isActive: user.isActive,
    });
  } else {
    throw new AppError("User not found", 404);
  }
});

// @add Update User Profile
// @router /api/users/profile
// @access Private Access
export const updateProfile = expressAsyncHandler(async (req, res) => {
  const { _id } = req.user;
  // First check if user exists
  const user = await User.findById({ _id });
  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    if (req.body.password) {
      user.password = req.body.password || user.password;
    }
    user.phone = req.body.phone || user.phone;
    user.address = req.body.address || user.address;
    const updatedUser = await user.save();
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      phone: user.phone,
      isActive: user.isActive,
    });
  } else {
    throw new AppError("User not found", 404);
  }
});

// @add Get All User Profile
// @router /api/users/profile
// @access Private Access
export const getAllProfile = expressAsyncHandler(async (req, res) => {
  const user = await User.find();
  if (user) {
    res.json({ user });
  } else {
    throw new AppError("User not found", 404);
  }
});

// @add Delet  User Profile
// @router /api/users/profile
// @access Private Access
export const deletUserProfile = expressAsyncHandler(async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: "user deleted successfully" });
  } catch (error) {
    throw new AppError("User not found", 404);
  }
});
