import express from "express";

const rotuer = express.Router();

rotuer.get("/register", (req, res) => {
  res.send("Register use");
});

module.exports = rotuer;
