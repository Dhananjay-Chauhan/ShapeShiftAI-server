import mongoose from "mongoose";
import User from "./User.js";

const PoseReportSchema = new mongoose.Schema(
  {
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    time: {
      type: Number,
      required: true,
    },
    pose_name : {
      type: String,
      required: true,
      min: 2,
      
    },
    calorie: {
      type: String,
      required: true,
    
    },
    
  },
  { timestamps: true }
);

const PoseReport = mongoose.model("PoseReport", PoseReportSchema);
export default PoseReport;