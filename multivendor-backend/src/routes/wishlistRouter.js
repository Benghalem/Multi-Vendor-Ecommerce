import express from "express";

import {
  creatWishlist,
  deleteWishlist,
  getAWishlistBySlyg,
  getAllWishlists,
  updateWishlist,
} from "../controllers/wishlistController.js";

const wishlisteRouter = express.Router();

wishlisteRouter.post("/", creatWishlist); // create wishliste
wishlisteRouter.get("/:id", getAWishlistBySlyg); // get wishliste by slug
wishlisteRouter.get("/all", getAllWishlists); // get all wishlistes
wishlisteRouter.put("/:id", updateWishlist); // update wishliste
wishlisteRouter.delete("/:id", deleteWishlist); // delete wishliste

export default wishlisteRouter;
