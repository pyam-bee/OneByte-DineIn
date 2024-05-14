import mongoose, { Schema } from "mongoose";

const table = new Schema({
  table_name: {
    type: String,
    required: true,
  },
  capacity: {
    type: Number,
    required: true,
  },
  isReserved: {
    type: Boolean,
    required: true,
    default: false,
  },
});

export default mongoose.model("table", table);
