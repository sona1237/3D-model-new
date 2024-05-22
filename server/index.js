import express from "express";
import { router } from "./routes/routes.js";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import * as dotenv from "dotenv";
import mongoose from "mongoose";
import path from "path"
dotenv.config();

const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;
const __dirname= path.resolve()
const app = express();

app.use(helmet());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const url = MONGO_URI;
mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection error : "));
db.once("open", () => {
  console.info("Connected Successfully");
});
const corsOptions = {
  origin: "*",
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"],
};
app.use(cors(corsOptions));
app.use("/api", router);

app.use(express.static(path.join(__dirname, '/client/dist')))

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname,'client','dist','index.html'))
})
app.listen(PORT, () => {
  console.info(`The App is listening at ${PORT}`);
});
