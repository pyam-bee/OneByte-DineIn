import Reservation from "../entities/reservation.js";
import User from "../entities/user.js";

export async function reserve(req, res) {
  try {
    const { customer_id, table_id, reserved_date } = req.body;

    const alreadyReserved = await Reservation.find({
      table_id,
      reserved_date,
      $or: [
        {
          status: "PENDING",
        },
        {
          status: "APPROVED",
        },
      ],
    });

    if (alreadyReserved) {
      return res.status(400).json({ message: "Table Request Already Sent" });
    }

    const isExist = await Reservation.find({
      customer_id,
      table_id,
      reserved_date,
      status: "PENDING",
    });
    if (isExist) {
      return res.status(400).json({ message: "Table Request Already Sent" });
    }
    const reservation = new Reservation({
      customer_id,
      table_id,
      reserved_date: reserved_date,
    });
    const response = await reservation.save();
    return res
      .status(201)
      .json({ message: "Reservation Request Sent", data: response });
  } catch (err) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
