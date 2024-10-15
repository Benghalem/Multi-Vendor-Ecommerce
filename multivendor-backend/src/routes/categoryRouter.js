import express from "express";

import {
  creatCategory,
  deleteCategory,
  getACategoryBySlyg,
  getAllCategorys,
  updateCategory,
} from "../controllers/categoryController.js";

const categoryRouter = express.Router();

categoryRouter.post("/", creatCategory); // create category
categoryRouter.get("/:slug", getACategoryBySlyg); // get category by slug
categoryRouter.get("/all", getAllCategorys); // get all categorys
categoryRouter.put("/:id", updateCategory); // update category
categoryRouter.delete("/:id", deleteCategory); // delete category

export default categoryRouter;
