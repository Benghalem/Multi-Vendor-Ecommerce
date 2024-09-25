import mongose from "mongoose"; // import mongoose
import slugify from "slugify";

const prosuctVariationSchema = new mongose.Schema({
  color: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    required: true,
  },
  quntity: {
    type: Number,
    min: 0,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const productSchema = new mongose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      unique: true,
    },
    description: String,
    vendor: {
      type: mongose.Schema.Types.ObjectId,
      ref: "Vendor",
      required: true,
    },
    category: {
      type: mongose.Schema.Types.ObjectId,
      ref: "Category",
    },
    subcategory: {
      type: mongose.Schema.Types.ObjectId,
      ref: "Category",
    },
    brand: {
      type: mongose.Schema.Types.ObjectId,
      ref: "Brand",
    },
    image: [String],
    variations: [prosuctVariationSchema],
    ratingAvrage: {
      type: Number,
      default: 0,
    },
    ratingQuantity: {
      type: Number,
      default: 0,
    },
    reviews: [
      {
        type: mongose.Schema.Types.ObjectId,
        ref: "Review",
      },
    ],
  },
  { timestamps: true }
);

productSchema.pre("save", async function (next) {
  this.slug = slugify(this.name).toLowerCase();
  next();
});

export const Product = mongose.model("Product", productSchema);
