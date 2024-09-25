import express from "express";

import {
  creatProduct,
  deleteProduct,
  getAProductBySlyg,
  getAllProducts,
  updateProduct,
} from "../controllers/productController.js";

const productRouter = express.Router();

productRouter.post("/", creatProduct); // create product
productRouter.get("/:slug", getAProductBySlyg); // get product by slug
productRouter.get("/all", getAllProducts); // get all products
productRouter.put("/:id", updateProduct); // update product
productRouter.delete("/:id", deleteProduct); // delete product

export default productRouter;
