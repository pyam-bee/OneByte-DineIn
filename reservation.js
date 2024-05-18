import mongoose, { Schema } from "mongoose";

const reservation = new Schema({
  customer_id: {
    type: Schema.ObjectId,
    required: true,
    ref: "User",
  },
  table_id: {
    type: Schema.ObjectId,
    required: true,
  },
  reserved_date: {
    type: Date,
    required: true,
  },
  message: {
    type: String,
    required: false,
  },
  customer_no: {
    type: String,
    required: false,
  },
  status: {
    type: String,
    required: false,
    default: "PENDING",
  },
});

export default mongoose.model("reservation", reservation);
