import mongoose, { Schema } from "mongoose";

const contact = new Schema({
  email: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

export default mongoose.model("contact", contact);
