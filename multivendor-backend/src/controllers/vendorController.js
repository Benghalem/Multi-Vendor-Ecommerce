import expressAsyncHandler from "express-async-handler";
import { AppError } from "../middlewares/errorHandler.js";
import { Vendor } from "../models/vendorModel.js";

// @desc Get a new vendors
// @router /api/vendor
// @access Private Access

export const creatVondor = expressAsyncHandler(async (req, res) => {
  try {
    const newVonder = await Vendor.create(req.body);
    res.status(201).json({ status: true, data: newVonder });
  } catch (error) {
    throw new AppError(" Somthing went wrong", 400);
  }
});

// @desc Get  Vendors
// @router /api/vendor
// @access Public Access

export const getVendors = expressAsyncHandler(async (req, res) => {
  try {
    const vendors = await Vendor.find().populate("user");
    res.status(201).json({ status: true, data: vendors });
  } catch (error) {
    throw new AppError(" Somthing went wrong on getting vendors", 400);
  }
});

// @desc Get  Vendors By slug
// @router /api/vendor/:slug
// @access Public Access

export const getVendorBySlug = expressAsyncHandler(async (req, res) => {
  try {
    const vendor = await Vendor.findOne({ slug: req.params.slug }).populate(
      "user",
      "-password"
    );
    res.status(201).json({ status: true, data: vendor });
  } catch (error) {
    throw new AppError(" Somthing went wrong on getting vendors", 400);
  }
});

// @desc Update  Vendors
// @router /api/vendor/:id
// @access Public Access

export const updateVendor = expressAsyncHandler(async (req, res) => {
  try {
    const vendor = await Vendor.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!vendor) {
      throw new AppError("Vendor not found", 404);
    }
    res.status(201).json({ status: true, data: vendor });
  } catch (error) {
    throw new AppError(" Somthing went wrong on getting vendors", 400);
  }
});

// @desc Delete  Vendors
// @router /api/vendor/:id
// @access Public Access

export const deleteVendor = expressAsyncHandler(async (req, res) => {
  try {
    const vendor = await Vendor.findByIdAndDelete(req.params.id);
    if (!vendor) {
      throw new AppError("Vendor not found", 404);
    }
    res.status(201).json({ status: true, data: vendor });
  } catch (error) {
    throw new AppError(" Somthing went wrong on getting vendors", 400);
  }
});
