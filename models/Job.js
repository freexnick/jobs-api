const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema(
  {
    company: {
      type: string,
      required: [true, "Please provide company name"],
      maxlength: 50,
    },
    position: {
      type: string,
      required: [true, "Please provide position "],
      maxlength: 100,
    },
    status: {
      type: String,
      enum: ["Interview", "Declined", "Pending"],
      default: "pending",
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: [true, "Please provide user"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Job", JobSchema);
