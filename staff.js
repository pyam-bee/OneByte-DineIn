import Reservation from "../entities/reservation.js";
import Table from "../entities/table.js";
import User from "../entities/user.js";

export async function createTable(req, res) {
  try {
    const { name, capacity } = req.body;
    const table = new Table({
      table_name: name,
      capacity,
    });
    const response = await table.save();
    return res
      .status(201)
      .json({ message: "Table Added Succesfully", data: response });
  } catch (err) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function updateTable(req, res) {
  try {
    const { isReserved } = req.body;
    const { id } = req.params;
    const response = await Table.findByIdAndUpdate(id, {
      isReserved,
    });
    return res.status(200).json({
      message: "Table Updated Succesfully",
      data: { reserved: isReserved },
    });
  } catch (err) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function updateReservationStatus(req, res) {
  try {
    const { status } = req.body;
    const { id } = req.params;

    const response = await Reservation.findByIdAndUpdate(id, {
      status,
    });

    return res.status(200).json({
      message: "Reservation Status Updated",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
