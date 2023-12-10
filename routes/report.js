import express from "express";
import { poseReport,exerciseReport,myPoseReport,myExerciseReport } from "../controllers/report.js";

const router = express.Router();

router.get("/my_PoseReport/:id",myPoseReport);
router.get("/my_ExerciseReport/:id",myExerciseReport);

router.post("/poseReport", poseReport);
router.post("/exerciseReport", exerciseReport);

export default router;
