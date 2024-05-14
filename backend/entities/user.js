import mongoose, { Schema } from "mongoose";

const user = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  user_type: {
    type: String,
    required: true,
  },
});

export default mongoose.model("user", user);