import expressAsyncHandler from "express-async-handler";
import { AppError } from "../middlewares/errorHandler.js";
import { subCategory } from "../models/subCategoryModel.js";

// @desc Creat a new SubCategory
// @router /api/subcategory
// @access Private

export const creatSubCategory = expressAsyncHandler(async (req, res) => {
  try {
    const newSubCategory = await subCategory.create(req.body);
    res.status(201).json({ status: true, data: newSubCategory });
  } catch (error) {
    throw new AppError(error, 400);
  }
});

// @desc Get all SubCategory
// @router /api/subcategory
// @access Public

export const getAllSubCategorys = expressAsyncHandler(async (req, res) => {
  try {
    const subcategorys = await subCategory.find();
    res.status(201).json({ status: true, data: subcategorys });
  } catch (error) {
    throw new AppError(error, 400);
  }
});

// @desc Get a SubCategory By Slug
// @router /api/subcategory/:slug
// @access Public

export const getASubCategoryBySlyg = expressAsyncHandler(async (req, res) => {
  try {
    const subcategory = await subCategory.findOne({ slug: req.params.slug });
    res.status(201).json({ status: true, data: subcategory });
  } catch (error) {
    throw new AppError(error, 400);
  }
});

// @desc Update a SubCategory
// @router /api/subcategory/:id
// @access Private

export const updateSubCategory = expressAsyncHandler(async (req, res) => {
  try {
    const subcategory = await subCategory.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    if (!subcategory) {
      throw new AppError("SubCategory not found", 404);
    }
    res.status(201).json({ status: true, data: subcategory });
  } catch (error) {
    throw new AppError(error, 400);
  }
});

// @desc Delete a SubCategory
// @router /api/subcategory/:id
// @access Private

export const deleteSubCategory = expressAsyncHandler(async (req, res) => {
  try {
    const subcategory = await subCategory.findOneAndDelete(req.params.id);
    if (!subcategory) {
      throw new AppError("SubCategory not found", 404);
    }
    res
      .status(201)
      .json({ status: true, message: "SubCategory deleted successfully" });
  } catch (error) {
    throw new AppError(error, 400);
  }
});
