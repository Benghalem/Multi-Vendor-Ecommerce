import express from "express";

import {
  creatBrand,
  deleteBrand,
  getABrandBySlyg,
  getAllBrands,
  updateBrand,
} from "../controllers/brandController.js";

const brandeRouter = express.Router();

brandeRouter.post("/", creatBrand); // create brande
brandeRouter.get("/:slug", getABrandBySlyg); // get brande by slug
brandeRouter.get("/all", getAllBrands); // get all brandes
brandeRouter.put("/:id", updateBrand); // update brande
brandeRouter.delete("/:id", deleteBrand); // delete brande

export default brandeRouter;
