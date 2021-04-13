import express from "express";
import { register } from "../controllers/auth";

const rotuer = express.Router();

rotuer.post("/register", register);

module.exports = rotuer;
