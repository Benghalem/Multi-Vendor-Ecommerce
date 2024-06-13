import mongose from "mongoose"; // import mongoose
import slugify from "slugify";

const brandSchema = new mongose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    slug: {
      type: String,
      unique: true,
    },
    description: String,
    logo: String,
  },
  {
    timestamps: true,
  }
);

brandSchema.pre("save", async function (next) {
  this.slug = slugify(this.name).toLowerCase();
  next();
});

export const Brand = mongose.model("Brand", brandSchema);
