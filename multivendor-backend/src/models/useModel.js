import mongose from "mongoose"; // import mongoose
import bcrypt from "bcrypt"; // import bcrypt

// create schema for user
const userSchema = new mongose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["admin", "user", "vendor"],
      default: "user",
    },
    address: {
      street: String,
      city: String,
      state: String,
      country: String,
      pincode: String,
    },
    phone: {
      type: String,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

// add pre save to hash password before save
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

//  compare password before login
userSchema.methods.comparePassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

export const User = mongose.model("User", userSchema);
