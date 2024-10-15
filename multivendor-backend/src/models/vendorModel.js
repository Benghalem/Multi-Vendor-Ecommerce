import mongose from "mongoose"; // import mongoose
import slugify from "slugify"; // import slugify

const subscriptionSchema = new mongose.Schema(
  {
    plan: {
      type: String,
      enum: ["basic", "standard", "premium"],
      required: true,
    },
    startData: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
      required: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    id: false,
  }
);

const vendorSchema = new mongose.Schema(
  {
    user: {
      type: mongose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    storName: {
      type: String,
      required: true,
      unique: true,
    },
    storeDecription: {
      type: String,
      required: true,
    },
    storeImage: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      unique: true,
    },
    storeBanner: {
      type: String,
      required: true,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    products: [
      {
        type: mongose.Schema.Types.ObjectId,
        ref: "Product",
      },
    ],
    subscription: subscriptionSchema,
  },
  {
    timestamps: true,
  }
);

vendorSchema.pre("save", async function (next) {
  this.slug = slugify(this.storName).toLowerCase();
  next();
});

export const Vendor = mongose.model("Vendor", vendorSchema);
