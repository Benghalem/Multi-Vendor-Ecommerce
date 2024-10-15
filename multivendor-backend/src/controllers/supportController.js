import { AppError } from "../middlewares/errorHandler.js";
import { Support } from "../models/supportSchema.js";
import expressAsyncHandler from "express-async-handler";
// @desc Creat a new Support
// @router /api/support/
// @access Private

export const createSupport = expressAsyncHandler(async (req, res) => {
  try {
    const support = new Support(req.body);
    await support.save();
    res.status(200).json({ status: true, data: support });
  } catch (error) {
    throw new AppError(error, 400);
  }
});

// @desc Get ALL  SupportS
// @router /api/support/
// @access Private

export const getAllSupport = expressAsyncHandler(async (req, res) => {
  try {
    const supports = await Support.find().populate(
      "user product assignedTo assignedBy"
    );
    res.status(200).json({ status: true, data: supports });
  } catch (error) {
    throw new AppError(error, 400);
  }
});

// @desc Get A Support
// @router /api/support/
// @access Private

export const getASupportById = expressAsyncHandler(async (req, res) => {
  try {
    const supports = await Support.findById(req.params.id).populate(
      "user product assignedTo assignedBy"
    );
    if (!supports) {
      return res
        .status(404)
        .json({ status: false, message: "Support Query Not Found" });
    }
    res.status(200).json({ status: true, data: supports });
  } catch (error) {
    throw new AppError(error, 400);
  }
});

// @desc Update A Support by ID
// @router /api/support/
// @access Private

export const updateASupportById = expressAsyncHandler(async (req, res) => {
  try {
    const supports = await Support.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!supports) {
      return res
        .status(404)
        .json({ status: false, message: "Support Query Not Found" });
    }
    res.status(200).json({ status: true, data: supports });
  } catch (error) {
    throw new AppError(error, 400);
  }
});

// @desc Delete A Support by ID
// @router /api/support/
// @access Private

export const deleteASupportById = expressAsyncHandler(async (req, res) => {
  try {
    const supports = await Support.findByIdAndDelete(req.params.id);
    if (!supports) {
      return res
        .status(404)
        .json({ status: false, message: "Support Query Not Found" });
    }
    res
      .status(200)
      .json({ status: true, message: "Support Deleted Successfully" });
  } catch (error) {
    throw new AppError(error, 400);
  }
});

// @desc Assign A Support
// @router /api/support/
// @access Private

export const assigneASupport = expressAsyncHandler(async (req, res) => {
  try {
    const { assigneTo, assigneBy } = req.body;
    const support = await Support.findByIdAndUpdate(
      req.params.id,
      {
        assigneTo,
        assigneBy,
      },
      {
        new: true,
      }
    ).populate("user product assignedTo assignedBy");
    if (!support) {
      return res
        .status(404)
        .json({ status: false, message: "Support Query Not Found" });
    }
    res.status(200).json({ status: true, data: support });
  } catch (error) {
    throw new AppError(error, 400);
  }
});

// @desc Update A Support Status
// @router /api/support/
// @access Private

export const updateASupportStatus = expressAsyncHandler(async (req, res) => {
  try {
    const { astatus } = req.body;
    const support = await Support.findByIdAndUpdate(
      req.params.id,
      { astatus },
      { new: true }
    ).populate("user product assignedTo assignedBy");
    if (!support) {
      return res
        .status(404)
        .json({ status: false, message: "Support Query Not Found" });
    }
    res.status(200).json({ status: true, data: support });
  } catch (error) {
    throw new AppError(error, 400);
  }
});
