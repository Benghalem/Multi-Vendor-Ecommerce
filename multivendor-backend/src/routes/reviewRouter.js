import express from "express";
import {
  approveReview,
  creatReview,
  deleteReview,
  getAReviewBySlyg,
  getAllReviews,
  updateReview,
} from "../controllers/reviewController.js";

const reviewRouter = express.Router();

reviewRouter.post("/", creatReview); // create review
reviewRouter.get("/all", getAllReviews); // get all reviews
reviewRouter.get("/:slug", getAReviewBySlyg); // get review by slug
reviewRouter.put("/:id", updateReview); // update review
reviewRouter.put("/approve-request", approveReview); // approve review
reviewRouter.delete("/:id", deleteReview); // delete review

export default reviewRouter;
