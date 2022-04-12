import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";

import { userRoutes } from "./routes/user.routes";

dotenv.config();
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/user", userRoutes);

mongoose
    .connect(
        `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_NAME}.5d1qp.mongodb.net/${process.env.DB}?retryWrites=true&w=majority`
    )
    .then(() => {
        app.listen(3333);
    });
