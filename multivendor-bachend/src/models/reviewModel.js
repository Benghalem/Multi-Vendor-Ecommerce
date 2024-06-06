import mongos from "mongoose"; // import mongoose

const reviewSchema = new mongos.Schema(
  {
    user: {
      type: mongos.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    product: {
      type: mongos.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
    comment: String,
    vendorReply: {
      comment: String,
      createdAt: {
        type: Date,
        default: Date.now(),
      },
    },
  },
  {
    timestamps: true,
  }
);

reviewSchema.index({ product: 1, user: 1 }, { unique: true });

export const Review = mongos.model("Review", reviewSchema);
