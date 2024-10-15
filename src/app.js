import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    Credentials: true,
  })
);

// Common Middlewares
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

// import routes
import heathCheckRouter from "./routes/healthCheck.routes.js";
import userRouter from "./routes/user.routes.js";


app.use("/api/v1/healthCheck", heathCheckRouter);
app.use("/api/v1/user", userRouter);

export { app };
