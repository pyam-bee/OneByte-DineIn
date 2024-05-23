import AuthRoute from "./auth.js";
import CustomerRoute from "./customer.js";
import StaffRouter from "./staff.js";

export default function routes(app, express) {
  app.use("/customer", CustomerRoute(express));
  app.use("/staff", StaffRouter(express));
  app.use("/auth", AuthRoute(express));
}
