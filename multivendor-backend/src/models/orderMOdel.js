import mongos from "mongoose"; // import mongoose

const orderItemsSchema = new mongos.Schema(
  {
    product: {
      type: mongos.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
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
      min: 1,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  { _id: false, timestamps: true }
);

const cancellationSchema = new mongos.Schema(
  {
    reson: {
      type: String,
      required: true,
    },
    creatdAt: {
      type: Date,
      default: Date.now(),
    },
  },
  { _id: false, timestamps: true }
);

const returnSchema = new mongos.Schema(
  {
    reson: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending",
    },
    creatdAt: {
      type: Date,
      default: Date.now(),
    },
  },
  { _id: false, timestamps: true }
);

const orderSchema = new mongos.Schema(
  {
    user: {
      type: mongos.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    orderItems: [orderItemsSchema],
    totalPrice: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "processing", "shipped", "delivered", "cancelled"],
      default: "pending",
    },
    address: {
      street: String,
      city: String,
      state: String,
      country: String,
      zip: String,
    },
    paymentMethod: {
      type: String,
      enum: ["cod", "card", "paypal"],
      required: true,
    },
    cancellation: cancellationSchema,
    return: returnSchema,
  },
  {
    timestamps: true,
  }
);

export const Order = mongos.model("Order", orderSchema);
