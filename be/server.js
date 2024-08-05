import express from "express";
import cors from "cors";
import { connectDb } from "./config/db.js";
import productsRouter from "./routes/productsRouter.js";
import userRouter from "./routes/userRouter.js";
import basketRouter from "./routes/basketRouter.js";
import orderRouter from "./routes/orderRouter.js";
import 'dotenv/config'


//app
const app = express();
const port = 4000;

//middleware
app.use(express.json());
app.use(cors());

//data base connection
connectDb();

//API endpoints
app.use("/api/products", productsRouter);
app.use("/images", express.static("uploads"));
app.use("/api/user", userRouter);
app.use("/api/basket", basketRouter);
app.use("/api/order", orderRouter);

app.get("/", (req, res) => {
    res.send("Working")
});

app.listen(port, () => {
    console.log(`Server running: http://localhost:${port}`);
});

export default app;



