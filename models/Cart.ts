import mongoose from "mongoose";

const CartItemSchema = new mongoose.Schema(
  {
    productId: { type: Number, required: true },
    productType: { type: String, enum: ["game", "hardware"], required: true },
    title: { type: String, required: true },
    platform: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    quantity: { type: Number, required: true, min: 1, default: 1 },
  },
  { _id: true }
);

const CartSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true, unique: true },
    items: { type: [CartItemSchema], default: [] },
  },
  { timestamps: true }
);

export default mongoose.models.Cart || mongoose.model("Cart", CartSchema);
