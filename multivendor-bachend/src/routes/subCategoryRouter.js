import express from "express";

import {
  creatSubCategory,
  deleteSubCategory,
  getASubCategoryBySlyg,
  getAllSubCategorys,
  updateSubCategory,
} from "../controllers/subcategoryController.js";

const subCategoryRouter = express.Router();

subCategoryRouter.post("/", creatSubCategory); // create subcategory
subCategoryRouter.get("/:slug", getASubCategoryBySlyg); // get subcategory by slug
subCategoryRouter.get("/all", getAllSubCategorys); // get all subcategorys
subCategoryRouter.put("/:id", updateSubCategory); // update subcategory
subCategoryRouter.delete("/:id", deleteSubCategory); // delete subcategory

export default subCategoryRouter;
