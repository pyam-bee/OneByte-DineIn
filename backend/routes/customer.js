import { reserve } from "../controllers/user.js";

export default function CustomerRoute(express) {
  const router = express.Router();
  router.post("/reserve", reserve);
  return router;
}
