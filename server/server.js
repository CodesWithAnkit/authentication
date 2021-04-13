import express from "express";
import cors from "cors";
import { readdirSync } from "fs";
const morgan = require("morgan");
require("dotenv").config();

const app = express();

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
