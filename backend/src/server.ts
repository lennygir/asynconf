import express, { Express, NextFunction, Request } from "express";
import cors from "cors";
import { Response } from "express-serve-static-core";
import routes from "./routes";

const server: Express = express();

// CORS
const corsOptions = {
  origin: "http://localhost:8080",
};
server.use(cors(corsOptions));

// Logging
server.use((req: Request, res: Response, next: NextFunction): void => {
  console.log(`[${new Date().toLocaleTimeString("fr-FR")}] - ${req.method} ${req.url}`);
  next();
});

// Handle JSON Body
server.use(express.json());

// Routes
server.use(routes);

// Errors (not 404)
server.use(function (err: any, req: Request, res: Response, next: NextFunction) {
  const DEFAULT_STATUS = 500;
  res.status(err.status || DEFAULT_STATUS).json({ message: err.message, status: err.status });
});

// Error 404
server.use(function (req, res) {
  res.status(404).json({
    message: "Endpoint not found, make sure you used the correct URL / Method",
  });
});

export default server;
