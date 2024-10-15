import { Order } from "../models/orderMOdel.js";
import expressAsyncHandler from "express-async-handler";
import { AppError } from "../middlewares/errorHandler.js";

// @desc Creat a new Order
// @router /api/order/
// @access Private

export const createOrder = expressAsyncHandler(async (req, res) => {
  try {
    const order = new Order(req.body);
    await order.save();
    res.status(201).json({ status: true, data: order });
  } catch (error) {
    throw new AppError(error, 400);
  }
});

// @desc Get All Orders
// @router /api/order/
// @access Private

export const getAllOrders = expressAsyncHandler(async (req, res) => {
  try {
    const order = await Order.find().populate("user items.product");
    await order.save();
    res.status(200).json({ status: true, data: order });
  } catch (error) {
    throw new AppError(error, 400);
  }
});

// @desc Get A Single Order
// @router /api/order/
// @access Private

export const getAOrderByID = expressAsyncHandler(async (req, res) => {
  try {
    const order = await Order.findById(req.params.id).populate(
      "user items.product"
    );
    await order.save();
    res.status(200).json({ status: true, data: order });
  } catch (error) {
    throw new AppError(error, 400);
  }
});

// @desc Update A Order
// @router /api/order/
// @access Private

export const updateAOrder = expressAsyncHandler(async (req, res) => {
  try {
    const order = await Order.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!order) {
      return res
        .sendStatus(400)
        .json({ status: false, message: "Order Not Found!" });
    }
    await order.save();
    res.status(200).json({ status: true, data: order });
  } catch (error) {
    throw new AppError(error, 400);
  }
});

// @desc Delet A Order
// @router /api/order/
// @access Private

export const deleteAOrder = expressAsyncHandler(async (req, res) => {
  try {
    const order = await Order.findByIdAndDelete(req.params.id);
    if (!order) {
      return res
        .sendStatus(400)
        .json({ status: false, message: "Order Not Found!" });
    }
    await order.save();
    res.status(200).json({ status: true, message: "Order Deleted" });
  } catch (error) {
    throw new AppError(error, 400);
  }
});

// @desc Update A Oreder Statuse
// @router /api/order/
// @access Private

export const updateOrderStatus = expressAsyncHandler(async (req, res) => {
  try {
    const { status } = req.body;
    const order = await Order.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );
    if (!order) {
      return res
        .sendStatus(400)
        .json({ status: false, message: "Order Not Found!" });
    }
    await order.save();
    res.status(200).json({ status: true, data: order });
  } catch (error) {
    throw new AppError(error, 400);
  }
});

// @desc Handle Order Cancellation
// @router /api/order/
// @access Private

export const handlerOrderCansellation = expressAsyncHandler(
  async (req, res) => {
    try {
      const { reason } = req.body;
      const order = await Order.findByIdAndUpdate(
        req.params.id,
        {
          status: "cancelled",
          cansellation: { reason, createdAt: new Date() },
        },
        { new: true }
      );
      if (!order) {
        return res
          .sendStatus(400)
          .json({ status: false, message: "Order Not Found!" });
      }
      await order.save();
      res.status(200).json({ status: true, data: order });
    } catch (error) {
      throw new AppError(error, 400);
    }
  }
);

// @desc Handle Order Return
// @router /api/order/
// @access Private

export const handlerOrderReturn = expressAsyncHandler(async (req, res) => {
  try {
    const { reason } = req.body;
    const order = await Order.findByIdAndUpdate(
      req.params.id,
      { return: { reason, status: "pending", createdAt: new Date() } },
      { new: true }
    );
    if (!order) {
      return res
        .sendStatus(400)
        .json({ status: false, message: "Order Not Found!" });
    }
    await order.save();
    res.status(200).json({ status: true, data: order });
  } catch (error) {
    throw new AppError(error, 400);
  }
});

// @desc Handle Order Return
// @router /api/order/
// @access Private

export const handlerOrderReturnStatus = expressAsyncHandler(
  async (req, res) => {
    try {
      const { status } = req.body;
      const order = await Order.findOneAndUpdate(
        { _id: req.params.id, "return.status": "panding" },
        { "return.tatus": status },
        { new: true }
      );
      if (!order) {
        return res
          .status(400)
          .json({
            status: false,
            message: "Order Not Found or Return already processed!",
          });
      }
      await order.save();
      res.status(200).json({ status: true, data: order });
    } catch (error) {
      throw new AppError(error, 400);
    }
  }
);
