import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";
import KosRoute from "./routes/KosRoute.js";
import CheckoutRoute from "./routes/CheckoutRoute.js";

const app = express();
mongoose.connect(
  "mongodb+srv://root:root@test.t022yqs.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("Connected to Database..."));

app.use(cors());
app.use(express.json());
app.use(UserRoute);
app.use(KosRoute);
app.use(CheckoutRoute);

app.listen(5000, () => {
  console.log("Server started...");
});
