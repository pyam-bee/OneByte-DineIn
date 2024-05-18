import {
  createTable,
  updateReservationStatus,
  updateTable,
  getMessages,
  removeMessages,
  getReservations,
} from "../controllers/staff.js";

export default function StaffRouter(express) {
  const router = express.Router();
  router.post("/createTable", createTable);
  router.patch("/updateTable/:id", updateTable);
  router.patch("/updateReservation/:id", updateReservationStatus);
  router.get("/messages", getMessages);
  router.delete("/messages/:id", removeMessages);
  router.get("/allReservations", getReservations);
  return router;
}
