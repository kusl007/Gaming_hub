import mongoose from "mongoose";

const ReviewSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    username: { type: String, required: true },
    productId: { type: Number, required: true },
    productType: { type: String, enum: ["game", "hardware"], required: true, default: "game" },
    rating: { type: Number, required: true, min: 1, max: 5 },
    content: { type: String, required: true, trim: true, maxlength: 1000 },
  },
  { timestamps: true }
);

export default mongoose.models.Review || mongoose.model("Review", ReviewSchema);
