import "express-async-errors";

import { ExpressErrorHandler } from "./utils/ExpressErrorHandler";
import { NotFoundError } from "./utils/notFoundError";
import { apiRoutes } from "./api";
import cors from "cors";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";

const app = express();

app.use(morgan("dev"));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.use("/api", apiRoutes);

app.use("/", (_req, res) => {
  res.json({
    msg: "🦄🌈✨👋🌎🌍🌏✨🌈🦄",
  });
});

//! Not found page error
app.all("*", NotFoundError);

// ! Error Handlers
app.use(ExpressErrorHandler);

export { app };
