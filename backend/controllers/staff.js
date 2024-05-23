import Contact from "../entities/contact.js";
import Reservation from "../entities/reservation.js";
import Table from "../entities/table.js";

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

export async function getReservations(req, res) {
  try {
    const reservations = await Reservation.aggregate([
      {
        $lookup: {
          from: "users",
          localField: "customer_id",
          foreignField: "_id",
          as: "customer",
        },
      },
      {
        $unwind: "$customer",
      },
      {
        $lookup: {
          from: "tables",
          localField: "table_id",
          foreignField: "_id",
          as: "table",
        },
      },
      {
        $unwind: "$table",
      },
    ]);

    const formattedReservations = reservations.map((reservation) => ({
      _id: reservation._id,
      reserved_date: reservation.reserved_date,
      status: reservation.status,
      customer: {
        _id: reservation.customer._id,
        name: reservation.customer.username,
        email: reservation.customer.email,
        phone: reservation.customer.phone,
      },
      table: {
        _id: reservation.table._id,
        name: reservation.table.table_name,
        capacity: reservation.table.capacity,
      },
    }));

    return res
      .status(200)
      .json({ message: "Success", data: formattedReservations });
  } catch (err) {
    console.error(err);
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
      data: response,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function getMessages(req, res) {
  try {
    const response = await Contact.find();
    return res.status(200).json({
      message: "Success",
      data: response,
    });
  } catch (err) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function removeMessages(req, res) {
  try {
    const response = await Contact.findByIdAndDelete(req.params.id);
    return res.status(200).json({
      message: "Success",
      data: response,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
