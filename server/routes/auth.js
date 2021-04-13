import express from "express";
import { register } from "../controllers/auth";

const rotuer = express.Router();

rotuer.get("/register", register);

module.exports = rotuer;
