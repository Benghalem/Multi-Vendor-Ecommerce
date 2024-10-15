import mongose from "mongoose"; // import mongoose

const wishListSchema = new mongose.Schema(
  {
    user: {
      type: mongose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    product: {
      type: mongose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Wishlist = mongose.model("Wishlist", wishListSchema);
