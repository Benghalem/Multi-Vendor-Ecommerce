import express from "express";
import { protect } from "../middlewares/authMiddleware.js";
import {
  creatVondor,
  deleteVendor,
  getVendorBySlug,
  getVendors,
  updateVendor,
} from "../controllers/vendorController.js";
import { get } from "mongoose";

const vendorRouter = express.Router();

// Creatr a new vendor
vendorRouter.post("/", creatVondor);

// Get all vendors route
vendorRouter.get("/all", getVendors);

// Get vendor by slug route
vendorRouter.get("/:slug", getVendorBySlug);

// Get Update Vendor route
vendorRouter.put("/:id", updateVendor);

// Get Delete Vendor route
vendorRouter.delete("/:id", deleteVendor);

export default vendorRouter;
