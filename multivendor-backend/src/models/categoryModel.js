import mongose from "mongoose"; // import mongoose

const categorySchema = new mongose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    description: String,
    slug: String,
    subCategory: {
      type: mongose.Schema.Types.ObjectId,
      ref: "SubCategory",
    },
  },
  {
    timestamps: true,
  }
);

categorySchema.pre("save", async function (next) {
  this.slug = slugify(this.name).toLowerCase();
  next();
});

export const Category = mongose.model("Category", categorySchema);
