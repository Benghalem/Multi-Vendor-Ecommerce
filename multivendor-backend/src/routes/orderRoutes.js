import express from "express";
import {
  createOrder,
  deleteAOrder,
  getAllOrders,
  handlerOrderCansellation,
  handlerOrderReturn,
  handlerOrderReturnStatus,
  updateAOrder,
  updateOrderStatus,
} from "../controllers/orderController.js";

const orderRouter = express.Router();

orderRouter.post("/", createOrder);
orderRouter.get("/:id", getAllOrders);
orderRouter.get("/:id", getAllOrders);
orderRouter.post("/:id", updateAOrder);
orderRouter.delete("/:id", deleteAOrder);
orderRouter.patch("/:id/status", updateOrderStatus);
orderRouter.patch("/:id/cancel", handlerOrderCansellation);
orderRouter.patch("/:id/return", handlerOrderReturn);
orderRouter.patch("/:id/return/status", handlerOrderReturnStatus);

export default orderRouter;
