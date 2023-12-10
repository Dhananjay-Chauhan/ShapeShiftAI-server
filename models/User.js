import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    username: {
      type: String,
      required: true,
      unique:true,
      min: 2,
      max: 50,
    },
    password: {
      type: String,
      unique:true,
      required: true,
      min: 5,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      min:10,
    },
    // phone_number: {
    //   type: String,
    //   // required: true,
    //   default:"1212121212"
    //   // unique: true,
    // },
    
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);
export default User;