import expressWinston from "express-winston";
import winston from "winston";
import dotenv from "dotenv";
dotenv.config();

const logFormat: winston.Logform.Format = winston.format.printf(
  (info: winston.Logform.TransformableInfo) => {
    if (process.env.NODE_ENV !== "development")
      return `[${info.timestamp}] ${info.level}: ${info.message}`;
    return `[${info.timestamp}] ${JSON.stringify(info.meta)} ${info.level}: ${info.message}`;
  },
);

expressWinston.requestWhitelist.push("body");

const logger = expressWinston.logger({
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ level: "info", filename: `./logs/app.log` }),
    new winston.transports.File({
      level: "error",
      filename: `./logs/errors.log`,
    }),
  ],
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    winston.format.json(),
    logFormat,
  ),
  meta: true,
  expressFormat: true,
  colorize: true,
});

export default logger;
