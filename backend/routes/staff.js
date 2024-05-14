import {
  createTable,
  updateReservationStatus,
  updateTable,
} from "../controllers/staff.js";

export default function StaffRouter(express) {
  const router = express.Router();
  router.post("/createTable", createTable);
  router.patch("/updateTable/:id", updateTable);
  router.patch("/updateReservation/:id", updateReservationStatus);
  return router;
}
