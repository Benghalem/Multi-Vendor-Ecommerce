import expressAsyncHandler from "express-async-handler";
import { AppError } from "../middlewares/errorHandler.js";
import { Product } from "../models/productModel.js"; // import product modele

// @desc Creat a new Product
// @router /api/product
// @access Private

export const creatProduct = expressAsyncHandler(async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);
    res.status(201).json({ status: true, data: newProduct });
  } catch (error) {
    throw new AppError(error, 400);
  }
});

// @desc Get all Products
// @router /api/product
// @access Public

export const getAllProducts = expressAsyncHandler(async (req, res) => {
  try {
    const products = await Product.find();
    res.status(201).json({ status: true, data: products });
  } catch (error) {
    throw new AppError(error, 400);
  }
});

// @desc Get a Product By Slug
// @router /api/product/:slug
// @access Public

export const getAProductBySlyg = expressAsyncHandler(async (req, res) => {
  try {
    const product = await Product.findOne({ slug: req.params.slug });
    res.status(201).json({ status: true, data: product });
  } catch (error) {
    throw new AppError(error, 400);
  }
});

// @desc Update a Product
// @router /api/product/:id
// @access Private

export const updateProduct = expressAsyncHandler(async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!product) {
      throw new AppError("Product not found", 404);
    }
    res.status(201).json({ status: true, data: product });
  } catch (error) {
    throw new AppError(error, 400);
  }
});

// @desc Delete a Product
// @router /api/product/:id
// @access Private

export const deleteProduct = expressAsyncHandler(async (req, res) => {
  try {
    const product = await Product.findOneAndDelete(req.params.id);
    if (!product) {
      throw new AppError("Product not found", 404);
    }
    res
      .status(201)
      .json({ status: true, message: "Product deleted successfully" });
  } catch (error) {
    throw new AppError(error, 400);
  }
});
