import { signup, signin } from "../controllers/auth.js";

export default function AuthRoute(express) {
  const router = express.Router();
  router.post("/signup", signup);
  router.post("/signin", signin);
  return router;
}
