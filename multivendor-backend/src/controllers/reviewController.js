import expressAsyncHandler from "express-async-handler";
import { AppError } from "../middlewares/errorHandler.js";
import { Review } from "../models/reviewModel.js";

// @desc Creat a new Review
// @router /api/review
// @access Private

export const creatReview = expressAsyncHandler(async (req, res) => {
  try {
    const newReview = await Review.create(req.body);
    res.status(201).json({ status: true, data: newReview });
  } catch (error) {
    throw new AppError(error, 400);
  }
});

// @desc Get all Reviews
// @router /api/review
// @access Public

export const getAllReviews = expressAsyncHandler(async (req, res) => {
  try {
    const reviews = await Review.find();
    res.status(201).json({ status: true, data: reviews });
  } catch (error) {
    throw new AppError(error, 400);
  }
});

// @desc Get a Review By Slug
// @router /api/review/:slug
// @access Public

export const getAReviewBySlyg = expressAsyncHandler(async (req, res) => {
  try {
    const review = await Review.findOne({ id: req.params.slug });
    res.status(201).json({ status: true, data: review });
  } catch (error) {
    throw new AppError(error, 400);
  }
});

// @desc Update a Review
// @router /api/review/:id
// @access Private

export const updateReview = expressAsyncHandler(async (req, res) => {
  try {
    const review = await Review.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!review) {
      throw new AppError("Review not found", 404);
    }
    res.status(201).json({ status: true, data: review });
  } catch (error) {
    throw new AppError(error, 400);
  }
});

// @desc Delete a Review
// @router /api/review/:id
// @access Private

export const deleteReview = expressAsyncHandler(async (req, res) => {
  try {
    const review = await Review.findOneAndDelete(req.params.id);
    if (!review) {
      throw new AppError("Review not found", 404);
    }
    res
      .status(201)
      .json({ status: true, message: "Review deleted successfully" });
  } catch (error) {
    throw new AppError(error, 400);
  }
});

// @desc Update is Approved
// @router /api/review/approved-request
// @access Private

export const approveReview = expressAsyncHandler(async (req, res) => {
  try {
    const review = await Review.findOneAndUpdate(
      req.params.id,
      { isApproved: req.body.isApproved },
      { new: true }
    );
    if (!review) {
      throw new AppError("Review not found", 404);
    }
    res
      .status(201)
      .json({ status: true, message: "Review Updated successfully" });
  } catch (error) {
    throw new AppError(error, 400);
  }
});
