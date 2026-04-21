import mongoose from "mongoose";

const ContactInquirySchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: false },
    name: { type: String, required: true, trim: true, maxlength: 100 },
    email: { type: String, required: true, trim: true, lowercase: true },
    category: {
      type: String,
      enum: ["Order issue", "Activation issue", "Tournament question", "General inquiry"],
      required: true,
    },
    message: { type: String, required: true, trim: true, maxlength: 2000 },
    status: {
      type: String,
      enum: ["new", "in_progress", "resolved"],
      default: "new",
    },
  },
  { timestamps: true }
);

export default mongoose.models.ContactInquiry ||
  mongoose.model("ContactInquiry", ContactInquirySchema);
