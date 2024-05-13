import Contact from "../entities/contact.js";
import Reservation from "../entities/reservation.js";
import Table from "../entities/table.js";

export async function reserve(req, res) {
  try {
    const { customer_id, table_id, reserved_date, customer_no, message } =
      req.body;

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

    if (alreadyReserved.length > 0) {
      return res.status(400).json({ message: "Table Request Already Sent" });
    }

    const isExist = await Reservation.find({
      customer_id,
      table_id,
      reserved_date,
      status: "PENDING",
    });

    if (isExist.length > 0) {
      return res.status(400).json({ message: "Table Request Already Sent" });
    }
    const reservation = new Reservation({
      customer_id,
      table_id,
      reserved_date,
      customer_no,
      message,
      reserved_date: reserved_date,
    });
    const response = await reservation.save();
    return res
      .status(201)
      .json({ message: "Reservation Request Sent", data: response });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function sendMessage(req, res) {
  try {
    const { email, username, message } = req.body;
    const contact = new Contact({
      email,
      username,
      message,
    });
    const response = await contact.save();
    return res
      .status(201)
      .json({ message: "Message Sent Sucessfully", data: response });
  } catch (err) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
}

const _generateTimeSlots = (arr, reserved, table_id, customer_id) => {
  const startHour = 9;
  const endHour = 23;
  const interval = 30;
  const slots = [];
  console.log("Obj", arr);

  for (let hour = startHour; hour <= endHour; hour++) {
    for (let minute = 0; minute < 60; minute += interval) {
      const time = `${hour.toString().padStart(2, "0")}:${minute
        .toString()
        .padStart(2, "0")}`;
      const [year, month, day] = reserved.split("-").map(Number);
      const [hours, minutes] = time.split(":").map(Number);
      const date = new Date(year, month - 1, day, hours, minutes);
      const object = arr[date.toString() + table_id];
      if (object) {
        let isApproved =
          object.customer_id.toString() === customer_id &&
          object.status === "APPROVED";
        let isDeclined =
          object.customer_id.toString() === customer_id &&
          object.status === "DECLINED";
        console.log(object.customer_id.toString() === customer_id &&
          object.status === "APPROVED");
        slots.push({
          isApproved,
          isDeclined,
          isDisabled: isDeclined ? false : true,
          time,
        });
      } else {
        slots.push({
          isApproved: false,
          isDeclined: false,
          isDisabled: false,
          time,
        });
      }
    }
  }
  return slots;
};

export async function getBookingInformation(req, res) {
  const { date, table_id, customer_id } = req.params;
  try {
    const reservation = await Reservation.find();

    let filtered = {};
    reservation.forEach((item) => {
      filtered[item.reserved_date.toString() + item.table_id] = {
        customer_id: item.customer_id,
        status: item.status,
      };
    });

    return res.status(200).json({
      message: "Success",
      data: {
        slots: _generateTimeSlots(filtered, date, table_id, customer_id),
      },
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function getTables(req, res) {
  try {
    const tables = await Table.find();
    return res.status(200).json({
      message: "Success",
      data: {
        tables,
      },
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
