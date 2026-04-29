import mongoose, { Schema, model, models } from "mongoose";

const PassSchema = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    place: {
      type: String,
      required: true,
    },
    purpose: {
      type: String,
      required: true,
    },
    timeOut: {
      type: String,
      required: true,
    },
    timeIn: {
      type: String,
      required: true,
    },
    person: {
      type: String,
    },
    personPhone: {
      type: String,
    },
    status: {
      type: String,
      enum: ["Active", "Expired", "Pending"],
      default: "Active",
    },
  },
  {
    timestamps: true,
  }
);

const Pass = models.Pass || model("Pass", PassSchema);

export default Pass;
