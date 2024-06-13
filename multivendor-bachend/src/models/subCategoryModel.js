import mongose from "mongoose"; // import mongoose

const subCategorySchema = new mongose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    description: String,
    slug: String,
  },
  {
    timestamps: true,
  }
);

subCategorySchema.pre("save", async function (next) {
  this.slug = slugify(this.name).toLowerCase();
  next();
});

export const subCategory = mongose.model("subcategory", subCategorySchema);
