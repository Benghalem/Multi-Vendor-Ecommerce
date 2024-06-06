import mongose from "mongoose"; // import mongoose

const categorySchema = new mongose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    description: String,
    parentCategory: {
      type: mongose.Schema.Types.ObjectId,
      ref: "Category",
    },
    subCategory: {
      type: mongose.Schema.Types.ObjectId,
      ref: "Category",
    },
  },
  {
    timestamps: true,
  }
);

export const Category = mongose.model("Category", categorySchema);
