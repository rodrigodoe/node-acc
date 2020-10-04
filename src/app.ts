import express from "express";
import "express-async-errors";
import { json } from "body-parser";
import { NotFoundError } from "./errors/not-found-error";
import { errorHandler } from "./middlewares/error-handler";
import { phoneRoutes } from "./routes/phone";

const app = express();

app.use(json());

app.use(phoneRoutes);

app.all("*", async (req, res) => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
