import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";

import User from "./models/User.js";
import PoseReport from "./models/PoseReport.js";
import ExerciseReport from "./models/ExerciseReport.js";

import auth from "./routes/auth.js";
import report from "./routes/report.js";



// import userRouter from "./routes/auth.js";

// import { login,users,register} from "./controllers/auth.js";
/* CONFIGURATIONS */

dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(cors());
app.use(function(req,res,next){
  res.header("Access-Control-Allow-Origin","*");
  res.header("Access-Control-Allow-Headers","Origin,X-Requested-With,Content-Type,Accept");
  next();
})


// Routes 
app.use("/auth",auth);
app.use("/report",report);



/* MONGOOSE SETUP */

const PORT = 8000;

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/ShapeShiftAI');
    console.log('Database connected on port 27017 !');
}
app.listen(PORT,()=>{
  console.log(`Database connected at Port : ${PORT}`);
})
