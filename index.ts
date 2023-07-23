import express, { Express, Request, Response } from "express";

import dotenv from "dotenv";

const serviceAccount = require("../serviceAccount.json");

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

const admin = require("firebase-admin");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
