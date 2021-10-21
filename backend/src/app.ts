import express, { Router } from "express";
import cors from "cors";
import compression from "compression";
import helmet from "helmet";
import logger from "./utils/logger";
import { config } from "dotenv";

config();
class App {
  public app: express.Application;
  public route: Router;
  constructor() {
    this.app = express();
    this.route = Router();
    this.setMiddleWare();
  }
  /**
   * loading all middlewares
   */
  public setMiddleWare(): void {
    this.app.use(logger);
    this.app.use(express.json());
    this.app.use(cors());
    this.app.use(helmet());
    this.app.use(compression());
  }
}

export default new App().app;
