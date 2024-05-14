import express from "express";
import routes from "./routes/index.js";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
const port = 4000;

app.use(express.json());
app.use(
  cors({
    origin: "*",
  }),
);

routes(app, express);

mongoose.connect(
  "mongodb+srv://pamshre55:XVpm7qG2oEvLjrEV@cluster0.sfqradt.mongodb.net/table_booking?retryWrites=true&w=majority&appName=Cluster0",
);

app.listen(port, () => {
  console.log(`Server started at ${port}`);
});
