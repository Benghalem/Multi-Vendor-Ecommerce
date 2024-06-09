import mongoose from "mongoose"; // import mongoose

const brandSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    description: String,
    logo: String,
  },
  {
    timestamps: true,
  }
);

export const Brand = mongose.model("Brand", brandSchema);
