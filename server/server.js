import express from "express";
import cors from "cors";
import { readdirSync } from "fs";
import mongoose from "mongoose";
const morgan = require("morgan");
require("dotenv").config();

// Create express app
const app = express();

//db
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("DB CONNECTED"))
  .catch((err) => console.log("db connection err => ", err));

// Apply middlewares
app.use(cors()); //Anytime you want to use middleware use app.use() which is a function coming with express
app.use(express.json());
app.use(morgan("dev"));

// Route
readdirSync("./routes").map((route) => {
  app.use("/api", require(`./routes/${route}`));
});

// PORT
const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
