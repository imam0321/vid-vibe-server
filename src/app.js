import express from "express";
import cors from "cors";

const app = express();
 
app.use(cors({
  origin: process.env.CORS_ORIGIN,
  Credentials: true
}));

// Common Middlewares
app.use(express.json({limit: "16kb"}));
app.use(express.urlencoded({extended: true, limit: "16kb"}));
app.use(express.static("public"))

// import routes 
import heathCheckRouter from "./routes/healthCheck.routes.js"

app.use("/api/v1/healthCheck", heathCheckRouter)


export {app};