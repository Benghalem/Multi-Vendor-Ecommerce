import express from "express";
import {
  registerUser,
  loginUser,
  profile,
  updateProfile,
  getAllProfile,
  deletUserProfile,
} from "../controllers/userController.js"; // import user controller

import { authorize, protect } from "../middlewares/authMiddleware.js"; // import protect middleware

const userRouter = express.Router();

userRouter.post("/register", registerUser); // creat a new user
userRouter.post("/login", loginUser); // login user
userRouter.get("/profile", protect, profile); //  get user profile
userRouter.put("/profile", protect, updateProfile); // update user profile
userRouter.get("/profiles", protect, authorize("admin"), getAllProfile); //  get all profiles
userRouter.delete("/:id", protect, deletUserProfile); //  delete user profile

export default userRouter;
