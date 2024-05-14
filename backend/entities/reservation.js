import mongoose, { Schema } from "mongoose";

const reservation = new Schema({
  customer_id: {
    type: Schema.ObjectId,
    required: true,
  },
  table_id: {
    type: Schema.ObjectId,
    required: true,
  },
  reserved_date: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    required: false,
    default: "PENDING",
  },
});

export default mongoose.model("reservation", reservation);
