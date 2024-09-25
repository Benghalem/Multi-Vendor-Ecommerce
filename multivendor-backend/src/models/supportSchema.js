import mongose from "mongoose"; // import mongoose

// creat a schema for message
const mesSchema = new mongose.Schema(
  {
    user: {
      type: mongose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    createAt: {
      type: Date,
      default: Date.now(),
    },
  },
  { _id: false }
);

// creat a schema for support
const supportSchema = new mongose.Schema({
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
  supject: {
    type: String,
    required: true,
  },
  message: String,
  status: {
    type: String,
    enum: ["open", "close"],
    default: "open",
  },
  priority: {
    type: String,
    enum: ["low", "medium", "high"],
    default: "low",
  },
  Category: String,
  assignedTo: {
    type: mongose.Schema.Types.ObjectId,
    ref: "User",
    default: null,
  },
  assignedBy: {
    type: mongose.Schema.Types.ObjectId,
    ref: "User",
    default: null,
  },
  createAt: {
    type: Date,
    default: Date.now(),
  },
  updateAt: {
    type: Date,
    default: Date.now(),
  },
});

// support pre save method to update updateAt
supportSchema.pre("save", function (next) {
  this.updateAt = Date.now();
  next();
});

export const Support = mongose.model("Support", supportSchema);
