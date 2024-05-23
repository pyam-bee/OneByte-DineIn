import {
  reserve,
  sendMessage,
  getBookingInformation,
  getTables,
} from "../controllers/user.js";

export default function CustomerRoute(express) {
  const router = express.Router();
  router.post("/reserve", reserve);
  router.post("/send-message", sendMessage);
  router.get(
    "/getReservationInfo/:date/:table_id/:customer_id",
    getBookingInformation,
  );
  router.get("/getTables", getTables);
  return router;
}
