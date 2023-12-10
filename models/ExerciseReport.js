import mongoose from "mongoose";
import User from "./User.js";

const ExerciseReportSchema = new mongoose.Schema(
  {
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    count: {
      type: Number,
      required: true,
    },
    exercise_name : {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    calorie: {
      type: String,
      required: true,
      unique: true,
    },
    
  },
  { timestamps: true }
);

const ExerciseReport = mongoose.model("ExerciseReport", ExerciseReportSchema);
export default ExerciseReport;