import express from "express";
import cors from "cors";
// import morgan from "morgan";
import productRouter from "./routes/product.routes.js";

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);

// app.use(morgan("dev"));

app.use("/", productRouter);

export default app;
