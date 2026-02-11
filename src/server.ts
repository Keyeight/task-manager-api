import "reflect-metadata";
import express from "express";
import dotenv from "dotenv";
import { AppDataSource } from "./configs/db.config";
import { router } from "./routes/index.routes";
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

AppDataSource.initialize()
  .then(() => {
    console.log("Database connection established successfully.");

    app.use(express.json());
    app.use("/", router);

    app.listen(port, () => {
      console.log(`Server is running at http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.log("Error connecting to the database:", error);
    return;
  });
