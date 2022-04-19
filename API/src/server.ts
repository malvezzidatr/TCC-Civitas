import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import swaggerUI from "swagger-ui-express";

import { projectRoutes } from "./routes/project.routes";
import { userRoutes } from "./routes/user.routes";
import swaggerDocs from "./swagger.json";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/users", userRoutes);
app.use("/projects", projectRoutes);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs));

mongoose
    .connect(
        `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_NAME}.5d1qp.mongodb.net/${process.env.DB}?retryWrites=true&w=majority`
    )
    .then(() => {
        app.listen(3333);
    });
