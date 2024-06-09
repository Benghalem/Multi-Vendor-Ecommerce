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

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.get("/profile", protect, profile);
userRouter.put("/profile", protect, updateProfile);
userRouter.get("/profiles", protect, authorize("admin"), getAllProfile);
userRouter.delete("/:id", protect, deletUserProfile);

export default userRouter;
