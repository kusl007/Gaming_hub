import mongoose from "mongoose";

const TournamentRegistrationSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: false },
    fullName: { type: String, required: true, trim: true, maxlength: 100 },
    email: { type: String, required: true, trim: true, lowercase: true },
    gamerTagOrTeamName: { type: String, required: true, trim: true, maxlength: 100 },
    tournamentName: { type: String, required: true, trim: true },
    platform: {
      type: String,
      enum: ["PC", "PlayStation 5", "Xbox Series X|S"],
      required: true,
    },
    countryOrRegion: { type: String, required: true, trim: true, maxlength: 80 },
    experience: { type: String, default: "", trim: true, maxlength: 1000 },
    status: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending",
    },
  },
  { timestamps: true }
);

TournamentRegistrationSchema.index(
  { email: 1, tournamentName: 1, gamerTagOrTeamName: 1 },
  { unique: true }
);

export default mongoose.models.TournamentRegistration ||
  mongoose.model("TournamentRegistration", TournamentRegistrationSchema);
